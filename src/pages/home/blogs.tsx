import { Stack, Typography } from "@mui/joy"
import SectionLayout from "../../utils/sectionLayout"

const Blogs = () => {
    return (
        <SectionLayout name='blogs'>
            {/* <Typography level='h1'>Blogs</Typography> */}
            <Stack>
                <Stack spacing={1} sx={{ mt: 12, ml: 10, position: 'absolute' }}>
                    <Typography level='h2' sx={{ mb: 0, fontSize: 52, color: '#666' }}>Oops!</Typography>
                    <Typography level='h3' sx={{ width: 400, fontSize: 32, color: '#999' }}>This section is under construction</Typography>
                </Stack>
                <img src='https://cdn.dribbble.com/users/448601/screenshots/2169052/crane_dribbble.gif' />
            </Stack>


        </SectionLayout>
    )
}

export default Blogs
