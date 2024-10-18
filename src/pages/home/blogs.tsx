import { Stack, Typography } from "@mui/joy"
import SectionLayout from "../../utils/sectionLayout"

const Blogs = () => {
    return (
        <SectionLayout name='blogs'>
            {/* <Typography level='h1'>Blogs</Typography> */}
            <Stack>
                <Stack spacing={1} sx={(theme) => ({
                    mt: 12,
                    ml: 10,
                    position: 'absolute',
                    [theme.breakpoints.down(800)]: {
                        mt: 0,
                        ml: 0
                    }
                })}>
                    <Typography level='h2' sx={(theme) => ({
                        mb: 0,
                        fontSize: 52,
                        color: '#666',
                        [theme.breakpoints.down(800)]: {
                            fontSize: 42,
                        }
                    })}>Oops!</Typography>
                    <Typography level='h3' sx={(theme) => ({
                        width: 400,
                        fontSize: 32,
                        color: '#999',
                        [theme.breakpoints.down(800)]: {
                            fontSize: 24,
                            width: '100%'
                        }
                    })}>This section is under construction</Typography>
                </Stack>
                <img style={{ maxWidth: "100%" }} className='construction' src='https://cdn.dribbble.com/users/448601/screenshots/2169052/crane_dribbble.gif' />
            </Stack>


        </SectionLayout>
    )
}

export default Blogs
