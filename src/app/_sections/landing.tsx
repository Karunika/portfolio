'use client'

import Button from '@mui/joy/Button'
import Divider from '@mui/joy/Divider'
import Typography from '@mui/joy/Typography'
import { Parallax } from 'react-parallax'
import { scroller } from 'react-scroll'
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined'
import { useTheme } from '@mui/joy'
import Nav from '../_components/nav'
import SideNav from '../_components/sideNav'

const Landing = () => {
    const theme = useTheme();

    return (
        <Parallax
            bgImage='images/landing-bg.jpg'
            strength={-200}
        >
            <div style={{
                minHeight: '100vh',
                minWidth: '100vw',
                backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.6)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'

            }}>
                <Nav />
                <SideNav />

                <svg viewBox="0 0 1320 120">
                    <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                        Karunika
                    </text>
                </svg>

                <Divider sx={{
                    width: '30%',
                    backgroundColor: theme.vars.palette.primary[300],
                    margin: '20px auto',
                    blockSize: '2px !important'
                }} />

                <Typography level='h2' sx={{
                    color: theme.vars.palette.primary[200],
                    animation: 'fadeIn',
                    animationDuration: '4s',
                    animationDelay: '2s',
                    animationFillMode: 'both'
                }}>
                    Fullstack Developer
                </Typography>

                <Button
                    size='lg'
                    variant='outlined'
                    sx={{
                        bottom: 40,
                        position: 'absolute',
                        borderRadius: 20,
                        color: theme.vars.palette.primary[50],

                        '&:hover': {
                            backgroundColor: '#ffffff44',
                        }
                    }}
                    onClick={() => scroller.scrollTo('about', {
                        duration: 1000,
                        smooth: true,
                    })}
                >
                    <ExpandMoreOutlined />
                </Button>
            </div>
        </Parallax>
    )
}

export default Landing
