'use client'

import { Button, Stack, Typography } from "@mui/joy"
import SectionLayout from "./_components/sectionLayout"
import { animateScroll } from 'react-scroll';
import { SocialIcon } from 'react-social-icons'
import ExpandLessOutlined from '@mui/icons-material/ExpandLessOutlined';
import { useTheme } from '@mui/joy';
import '../index.css'
import 'animate.css/animate.compat.css';

const Copyright = () => {
    const theme = useTheme()
    return <Typography sx={{
        [theme.breakpoints.down(800)]: {
            order: 2
        }
    }}>Copyright © 2024 Karunika</Typography>
}

const GoToTop = () => {
    const theme = useTheme()
    return (
        <Button
            size='lg'
            variant='outlined'
            sx={{
                borderRadius: 20,
                [theme.breakpoints.down(800)]: {
                    order: 0
                }
            }}
            onClick={() => animateScroll.scrollToTop({
                duration: 2000,
                smooth: true,
            })}
        >
            <ExpandLessOutlined />
        </Button>
    )
}

const SocialMedia = () => {
    const theme = useTheme()
    return (
        <Stack direction='row' spacing={1} sx={{
            [theme.breakpoints.down(800)]: {
                order: 1,
            },
            ['& > *']: {
                opacity: 0.6,
                transition: 'all 0.4s ease',
                ['&:hover']: {
                    opacity: 2
                },
            }
        }}>
            {[
                'github.com/karunika',
                'linkedin.com/in/karunika-t',
                'codepen.io/karunika',
                'instagram.com/karu_nika',
                'discord.com/channels/@me/713431503610183760'
            ].map((link, i) => (
                // @ts-ignore
                <SocialIcon key={i} target="_blank" url={`https://${link}`} />
            ))}
        </Stack>
    )
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head />
            <body>
                {children}
                <SectionLayout odd name='footer'>
                    <Stack sx={[(theme) => ({
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        [theme.breakpoints.down(800)]: {
                            flexDirection: 'column',
                            rowGap: 2
                        }
                    })]}>
                        <Copyright />
                        <GoToTop />
                        <SocialMedia />
                    </Stack>
                </SectionLayout>
            </body>
        </html>
    )
}
