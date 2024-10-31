import Markdown from './_components/markdown'
import { getEntry, getEntries } from '../../../utils/contentfulService'
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import Chip from '@mui/joy/Chip'

interface Params {
    id: string
}

interface KeywordChipsProps {
    keywords: string
}

const KeywordChips = ({ keywords = '' }: KeywordChipsProps) => {
    return (
        <Stack direction='row' spacing={1} sx={{ flexWrap: 'wrap', mt: 2 }}>
            {/* @ts-ignore */}
            {keywords.split(', ').map((n: string, i: number) => <Chip key={i} variant='outlined' size='sm'>{n}</Chip>)}
        </Stack>
    )
}

export async function generateMetadata({ params }: { params: Params }) {
    let item = await getEntry(params.id)

    return {
        title: item.title,
        keywords: (item?.keywords || '').split(', '),
        openGraph: {
            title: item.title,
            images: item?.thumbnail,
            locale: 'en_US',
        }
    }
}

interface PageProps {
    params: Params
}

const Page = async ({ params }: PageProps) => {
    let item = await getEntry(params.id)

    return (
        <>
            <Typography level='h1' sx={{
                mt: 4,
                mb: '1rem !important'
            }}>
                {item.title}
            </Typography>

            <Typography sx={{ mt: 1 }} level='body-sm'>{item.createdAt}</Typography>

            {item.keywords && <KeywordChips keywords={item.keywords} />}

            <Markdown>
                {item.data}
            </Markdown>
        </>
    )
}

export default Page

export const generateStaticParams = async () => {
    const items = await getEntries()

    return items.map(({ id }: { id: string }) => ({
        id
    }))
}
