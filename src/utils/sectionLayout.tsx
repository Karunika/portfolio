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
                    '& > div': {
                        width: '100%'
                    }
                }),
            ]}
        >
            <Element name={name} style={{ flex: 1 }}>
                <Box
                    sx={[
                        (theme) => ({
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
                        })
                    ]}
                >
                    {children}
                </Box>
            </Element>
        </Container>
    )
}

export default SectionLayout
