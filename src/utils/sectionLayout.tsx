import React from 'react'
import Box from '@mui/joy/Box';
import Container from '@mui/joy/Container';
import { Element } from 'react-scroll';


const SectionLayout = ({ children, name, odd = false, fullHeight = false, col = false, sx }: any) => {
    return (
        <Container
            sx={[
                (theme) => ({
                    position: 'relative',
                    minWidth: '100vw',
                    minHeight: fullHeight ? '100vh' : 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: odd ? '#eee' : '',
                }),
            ]}
        >
            <Element name={name} style={{ flex: 1 }}>
                <Box
                    sx={{
                        px: 20,
                        py: 10,
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        ...sx
                    }}
                >
                    {children}
                </Box>
            </Element>
        </Container>
    )
}

export default SectionLayout
