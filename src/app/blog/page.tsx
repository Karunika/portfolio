'use client'

import Typography from '@mui/joy/Typography'
import SectionLayout from "../_components/sectionLayout"
import BlogList from '../_components/blogList'

const Page = () => {

    return (
        <SectionLayout name='blog'>
            <Typography level='h1'>My Blogs</Typography>
            <BlogList />
        </SectionLayout>
    )
}

export default Page
