
import List from '@mui/joy/List'
import ListItem from '@mui/joy/ListItem'
import Card from '@mui/joy/Card'
import Checkbox from '@mui/joy/Checkbox'
import Link from '@mui/joy/Link'
import Divider from '@mui/joy/Divider'
import Sheet from '@mui/joy/Sheet'
import Table from '@mui/joy/Table'
import Typography from '@mui/joy/Typography'
import Codeblock from "./codeblock"
import { Components } from 'react-markdown/lib'



const config: Partial<Components> = {
    pre: ({ children, ...props }) => <Codeblock {...props}>{children}</Codeblock>,
    h1: ({ children }) => <Typography level='h2'> {children} </Typography>,
    h2: ({ children }) => <Typography level='h3'> {children} </Typography>,
    h3: ({ children }) => <Typography level='h4'> {children} </Typography>,
    h4: ({ children }) => <Typography level='title-lg'> {children} </Typography>,
    h5: ({ children }) => <Typography level='title-md'> {children} </Typography>,
    h6: ({ children }) => <Typography level='title-sm'> {children} </Typography>,
    hr: () => <Divider />,
    // @ts-ignore
    a: ({ children, href, ...props }) => <span {...props} > <Link href={href}> {children} </Link></span >,
    input: ({ type, ...rest }) => {
        if (type === 'checkbox') {
            return <Checkbox checked={rest.checked} disabled={rest.disabled} />
        }
    },
    ul: ({ children }) => <List marker="disc" > {children} </List>,
    ol: ({ children }) => <List marker="decimal" > {children} </List>,
    li: ({ children, ...props }) => <ListItem><span {...props} > {children} </span></ListItem >,
    p: ({ children }) => <Typography>{children} </Typography>,
    table: ({ children }) => {
        return (
            <Sheet>
                <Table borderAxis="both" >
                    {children}
                </Table>
            </Sheet>
        )
    },
    blockquote: ({ children }) => {
        return (
            <Card variant='soft' sx={{ py: 1, borderLeft: '2px solid #aaa', borderRadius: 1 }}>
                <Typography level='body-sm' >
                    {children}
                </Typography>
            </Card>
        )
    },
    img: ({ src, alt }) => {
        return (
            <span style={{
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

            </span>
        )
    }
}

export default config
