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
                    // [theme.breakpoints.up(834)]: {
                    //     flexDirection: 'row',
                    //     gap: 6,
                    // },
                    // [theme.breakpoints.up(1199)]: {
                    //     gap: 12,
                    // },
                }),
                // reversed ? { flexDirection: 'column-reverse' } : { flexDirection: 'column' },
            ]}
        >
            <Element name={name} style={{ flex: 1 }}>
                <Box
                    sx={{
                        px: 20,
                        py: 10,
                        flex: 1,
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
