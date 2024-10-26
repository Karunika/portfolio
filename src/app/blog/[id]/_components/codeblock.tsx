import SyntaxHighlighter from 'react-syntax-highlighter';
import Card from '@mui/joy/Card'

const Codeblock = ({ children, ...props }: any) => {
    const code = children.props.children
    const lang = children.props.className || ''

    return (
        <SyntaxHighlighter
            language={lang.replace('langauge-', '')}
            showLineNumbers={true}
            PreTag={({ children }) =>
                <Card sx={{ overflowX: 'scroll', width: '100%', boxSizing: 'border-box' }}>
                    {children}
                </Card>}
        >
            {code}
        </SyntaxHighlighter>
    )

}

export default Codeblock
