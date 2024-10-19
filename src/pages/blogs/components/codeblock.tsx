import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";


const Codeblock = ({ children, className, language = 'ts' }: any) => {

    return (
        <SyntaxHighlighter
            lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
            language="ts"
            wrapLines={true}
        >
            {children}
        </SyntaxHighlighter>
    )

}

export default Codeblock
