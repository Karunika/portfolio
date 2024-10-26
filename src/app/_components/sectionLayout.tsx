'use client'

import React from 'react';
import Box from '@mui/joy/Box';
import Container from '@mui/joy/Container';
import { useTheme } from '@mui/joy';
import { Element } from 'react-scroll';

interface props {
    children: React.ReactNode
    name: string
    odd?: boolean
    fullHeight?: boolean
    col?: boolean
    sx?: object
}

const SectionLayout = ({ children, name, odd = false, fullHeight = false, col = false, sx }: props) => {
    const theme = useTheme()
    return (
        <Container
            sx={{
                position: 'relative',
                minWidth: '100vw',
                minHeight: fullHeight ? '100vh' : 'auto',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: odd ? theme.palette.neutral[200] : '',
                '& > div': {
                    width: '100%'
                }
            }}
        >
            <Element name={name} style={{ flex: 1 }}>

                <Box sx={{
                    px: 32,
                    py: 10,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    [theme.breakpoints.down(1200)]: {
                        px: 16
                    },
                    [theme.breakpoints.down(1000)]: {
                        px: 10
                    },
                    [theme.breakpoints.down(833)]: {
                        px: 6,
                    },
                    [theme.breakpoints.down(600)]: {
                        px: 2,
                    },
                    [theme.breakpoints.down(400)]: {
                        px: 0,
                    },
                    ...sx
                }}>
                    {children}
                </Box>

            </Element>

        </Container>
    )
}

export default SectionLayout
