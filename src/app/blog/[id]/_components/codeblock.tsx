import SyntaxHighlighter from 'react-syntax-highlighter';
import Card from '@mui/joy/Card'
import Box from '@mui/joy/Box'

const Codeblock = ({ children, ...props }: any) => {
    const code = children.props.children
    const lang = children.props.className || ''

    return (
        <Box sx={{
            maxWidth: 'calc(100vw - 24px)'
        }}>
            <SyntaxHighlighter
                language={lang.replace('langauge-', '')}
                showLineNumbers={true}
                PreTag={({ children }) =>
                    <Card sx={{
                        overflowX: 'scroll',
                        boxSizing: 'border-box'
                    }}>
                        {children}
                    </Card>}
            >
                {code}
            </SyntaxHighlighter>
        </Box>
    )

}

export default Codeblock
