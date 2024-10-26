'use client'

import { Suspense } from 'react'
import { Typography } from "@mui/joy"
import SectionLayout from "../_components/sectionLayout"
import BlogList from '../_components/blogList'

const Blogs = () => {
    return (
        <SectionLayout name='blogs'>
            <Typography level='h1'>Blogs</Typography>
            <Suspense fallback={<>Loading...</>}>
                <BlogList />
            </Suspense>
        </SectionLayout>
    )
}

export default Blogs
