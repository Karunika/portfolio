import { getEntry, getEntries } from '../../../utils/contentfulService'
import Header from './_components/header'
import Body from './_components/body'

interface Params {
    id: string
}

export async function generateMetadata({ params }: { params: Params }) {
    let item = await getEntry(params.id)

    return {
        title: item.title,
        keywords: (item?.keywords || '').split(', '),
        openGraph: {
            title: item.title,
            images: item.thumbnail,
            locale: 'en_US',
            site_name: 'karunika.work',
            description: item.keywords
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
            <Header item={item} />
            <Body item={item} />
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
