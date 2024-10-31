'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import mdComponentsConfig from '../_components/mdComponents.config'

interface MarkdownProps {
    children: string
}

const Markdown = ({ children }: MarkdownProps) => {
    return (
        <ReactMarkdown
            rehypePlugins={[remarkGfm, rehypeRaw, rehypeSanitize]}
            className='md-container'
            components={mdComponentsConfig}
        >
            {children}
        </ReactMarkdown>
    )

}

export default Markdown
