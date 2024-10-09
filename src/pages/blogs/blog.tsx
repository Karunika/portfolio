import { Link, Card, Checkbox, Divider, List, ListItem, Sheet, Table, Typography } from "@mui/joy"
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import SectionLayout from "../../utils/sectionLayout"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"

const Calc = () => {
    const markdown = ''

    return (
        <SectionLayout fullHeight sx={{ ['& > *']: { my: 2 } }}>
            <Markdown
                rehypePlugins={[rehypeHighlight, remarkGfm, rehypeRaw, rehypeSanitize]}
                components={{
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
        </SectionLayout>
    )

}

export default Calc
