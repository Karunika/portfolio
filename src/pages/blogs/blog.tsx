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
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
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


const Calc = () => {
    let { state } = useLocation();
    let { id } = useParams();
    const context = useContext(BlogsContext);
    let navigate = useNavigate();

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

    const markdown = state?.some ?? (
        items.filter((item) =>
            String(item?.sys?.id) === id
        )?.map((item) =>
            String(item?.fields?.data)
        ) || ['']
    )[0]

    const backClickHandler = () => {
        navigate(state?.prev || '/')
    }

    return (
        <SectionLayout fullHeight>
            <Link sx={{ mt: -4 }} onClick={backClickHandler}>
                <ArrowBackIosIcon />
                Go back
            </Link>
            <Markdown
                rehypePlugins={[rehypeHighlight, remarkGfm, rehypeRaw, rehypeSanitize]}
                className='md-container'
                components={{
                    code: ({ children }) => <Codeblock>{children}</Codeblock>,
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
                    ul: ({ children }) => <List> {children} </List>,
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
                            <Card variant='soft' sx={{ py: 0.6 }}>
                                <Typography level='body-sm'>
                                    {children}
                                </Typography>
                            </Card>
                        )
                    },
                }}
            >
                {markdown}
            </Markdown>
            <Giscus
                id="comments"
                repo="Karunika/portfolio"
                repoId="R_kgDOM95uww"
                category="Announcements"
                categoryId="DIC_kwDOF1L2fM4B-hVS"
                mapping="pathname"
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
