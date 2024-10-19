import Typography from '@mui/joy/Typography'
import SectionLayout from "../../utils/sectionLayout"
import BlogList from '../../utils/blogList'

const Layout = () => {

    return (
        <SectionLayout>
            <Typography level='h1'>My Blogs</Typography>
            <BlogList />
        </SectionLayout>
    )
}

export default Layout
