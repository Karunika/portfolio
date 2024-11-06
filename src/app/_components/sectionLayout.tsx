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
            <Element name={name} style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <Box sx={{
                    py: 10,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 800,
                    ...sx
                }}>
                    {children}
                </Box>

            </Element>

        </Container>
    )
}

export default SectionLayout
