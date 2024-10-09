import { Button, Container, Stack, Typography } from "@mui/joy"
import { Outlet } from "react-router"
import SectionLayout from "../utils/sectionLayout"
import { animateScroll } from 'react-scroll';
import { SocialIcon } from 'react-social-icons'
import ExpandLessOutlined from '@mui/icons-material/ExpandLessOutlined';

const Layout = () => {
    return (
        <>
            <Outlet />
            <SectionLayout>
                <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography>Copyright © 2024 Karunika</Typography>

                    <Button
                        size='lg'
                        variant='outlined'
                        sx={{ borderRadius: 20 }}
                        onClick={() => animateScroll.scrollToTop({
                            duration: 2000,
                            smooth: true,
                        })}
                    >
                        <ExpandLessOutlined />
                    </Button>

                    <Stack direction='row' spacing={1} sx={{
                        ['& > *']: {
                            opacity: 0.6,
                            transition: 'all 0.4s ease',
                            ['&:hover']: {
                                opacity: 1
                            }
                        }
                    }}>
                        {[
                            'github.com/karunika',
                            'linkedin.com/in/karunika-t',
                            'codepen.io/karunika',
                            'instagram.com/karu_nika',
                            'discord.com/channels/@me/713431503610183760'
                        ].map((link) => (
                            <SocialIcon target="_blank" url={`https://${link}`} />
                        ))}
                    </Stack>
                </Stack>
            </SectionLayout>
        </>
    )
}

export default Layout
