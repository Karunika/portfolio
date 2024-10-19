import { Typography } from "@mui/joy"
import SectionLayout from "../../utils/sectionLayout"
import BlogList from '../../utils/blogList'

const Blogs = () => {
    return (
        <SectionLayout name='blogs'>
            <Typography level='h1'>Blogs</Typography>
            <BlogList />
        </SectionLayout>
    )
}

export default Blogs
