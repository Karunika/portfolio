import { useContext, useEffect } from 'react';
import Giscus from '@giscus/react';
import List from '@mui/joy/List'
import ListItem from '@mui/joy/ListItem'
import Card from '@mui/joy/Card'
import Checkbox from '@mui/joy/Checkbox'
import Link from '@mui/joy/Link'
import Divider from '@mui/joy/Divider'
import Sheet from '@mui/joy/Sheet'
import Table from '@mui/joy/Table'
import Typography from '@mui/joy/Typography'
import Chip from '@mui/joy/Chip';
import Stack from '@mui/joy/Stack';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SectionLayout from "../../utils/sectionLayout"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import Codeblock from "./components/codeblock"
import { useLocation, useParams } from "react-router"
import { BlogsContext, BlogsContextType } from '../../context/blogs';
import { animateScroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import moment from 'moment';


const formatTimestamp = (timestamp: string) => moment(timestamp).format('MMMM Do, YYYY h:mm A');

const KeywordChips = ({ keywords = '' }: { keywords: string }) => {
    return (
        <Stack direction='row' spacing={1} sx={{ flexWrap: 'wrap', mt: 2 }}>
            {/* @ts-ignore */}
            {keywords.split(', ').map((n: string, i: number) => <Chip key={i} variant='outlined' size='sm'>{n}</Chip>)}
        </Stack>
    )
}

const Calc = () => {
    let { state } = useLocation();
    let { id } = useParams();
    const context = useContext(BlogsContext);
    let navigate = useNavigate();

    useEffect(() => {
        // for giscus
        const meta = document.createElement('meta')

        if (id) {
            meta.setAttribute('property', 'og:title')
            meta.setAttribute('content', id)
            document.head.appendChild(meta)
        }

        return () => {
            document.head.removeChild(meta)
        }
    }, [id])

    useEffect(() => {

        animateScroll.scrollToTop({
            duration: 500,
            smooth: true,
        })
    }, [])

    if (!context) {
        return <p>Error: DataContext is not available.</p>;
    }
    const { items, loading, error } = context as BlogsContextType;

    if (loading) {
        return <SectionLayout fullHeight>loading...</SectionLayout>;
    }
    if (error) {
        return <p>failed to load the blog</p>;
    }

    const item = state?.item || (
        items.filter((item) =>
            String(item?.sys?.id) === id
        ) || {}
    )[0]


    if (!item) {
        return <SectionLayout fullHeight>blog not found</SectionLayout>;
    }

    const backClickHandler = () => {
        navigate(state?.prev || '/')
    }

    return (
        <SectionLayout fullHeight>
            <Link sx={{ mt: -4 }} onClick={backClickHandler}>
                <ArrowBackIosIcon />
                Go back
            </Link>
            <Typography level='h1' sx={{
                mt: 4,
                mb: '1rem !important'
            }}>
                {item?.fields?.title}
            </Typography>

            <Typography sx={{ mt: 1 }} level='body-sm'>{formatTimestamp(item?.sys?.createdAt)}</Typography>

            <KeywordChips keywords={item?.fields?.keywords} />

            <Markdown
                rehypePlugins={[remarkGfm, rehypeRaw, rehypeSanitize]}
                className='md-container'
                components={{
                    pre: ({ children, ...props }) => <Codeblock {...props}>{children}</Codeblock>,
                    h1: ({ children }) => <Typography level='h2'>{children}</Typography>,
                    h2: ({ children }) => <Typography level='h3'>{children}</Typography>,
                    h3: ({ children }) => <Typography level='h4'>{children}</Typography>,
                    h4: ({ children }) => <Typography level='title-lg'>{children}</Typography>,
                    h5: ({ children }) => <Typography level='title-md'>{children}</Typography>,
                    h6: ({ children }) => <Typography level='title-sm'>{children}</Typography>,
                    hr: () => <Divider />,
                    a: ({ children, href }) => <Link href={href}>{children}</Link>,
                    input: ({ type, ...rest }) => {
                        if (type === 'checkbox') {
                            return <Checkbox checked={rest.checked} disabled={rest.disabled} />
                        }
                    },
                    ul: ({ children }) => <List marker="disc"> {children} </List>,
                    ol: ({ children }) => <List marker="decimal"> {children} </List>,
                    li: ({ children }) => <ListItem>{children}</ListItem>,
                    p: ({ children }) => <Typography>{children}</Typography>,
                    table: ({ children }) => {
                        return (
                            <Sheet>
                                <Table borderAxis="both">
                                    {children}
                                </Table>
                            </Sheet>
                        )
                    },
                    blockquote: ({ children }) => {
                        return (
                            <Card variant='soft' sx={{ py: 1, borderLeft: '2px solid #aaa', borderRadius: 1 }}>
                                <Typography level='body-sm'>
                                    {children}
                                </Typography>
                            </Card>
                        )
                    },
                    img: ({ src, alt }) => {
                        return (
                            <div style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <img
                                    src={src}
                                    loading="lazy"
                                    alt={alt}
                                    style={{
                                        width: '90%',
                                        margin: 'auto',
                                        borderRadius: 10
                                    }}
                                />

                            </div>
                        )
                    }
                }}
            >
                {item?.fields?.data}
            </Markdown>

            <Giscus
                id="comments"
                repo="karunika/portfolio"
                repoId="R_kgDOM95uww"
                category="Announcements"
                categoryId="DIC_kwDOM95uw84CjgmB"
                mapping="og:title"
                term="Welcome to @giscus/react component!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="light_protanopia"
                lang="en"
                loading="lazy"
            />
        </SectionLayout>
    )

}

export default Calc
