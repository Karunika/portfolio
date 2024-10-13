import { Button, Divider, Stack } from '@mui/joy';
import Typography from '@mui/joy/Typography';
import { Parallax } from 'react-parallax';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import { scroller } from 'react-scroll';
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined';
import { useTheme } from '@mui/joy/styles';

const Landing = () => {
    const theme = useTheme();

    return (
        <Parallax
            // blur={{ min: -12, max: 15 }}
            bgImage={require('../../assets/landing-bg.jpg')}
            bgImageAlt="the dog"
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
                <Stack sx={{
                    position: 'absolute',
                    top: 0,
                    borderBottomRightRadius: 6,
                    borderBottomLeftRadius: 6,
                    overflow: 'hidden',
                    zIndex: 50
                }}>
                    <Box
                        component="nav"
                        aria-label="My site"
                        sx={{
                            flexGrow: 1,
                            p: 1,
                            backgroundColor: '#dcecfaff'
                        }}
                    >
                        <List role="menubar" orientation="horizontal">
                            {['about', 'experience', 'education', 'skills', 'blogs', 'contact'].map((section, i) => (
                                <>
                                    {i !== 0 && <ListDivider />}
                                    <ListItem role="none">
                                        <ListItemButton
                                            role="menuitem"
                                            component="a"
                                            onClick={() => scroller.scrollTo(section, {
                                                duration: 500 * (i + 1),
                                                smooth: true,
                                            })}
                                        >
                                            {section.replace(/^./, n => n.toUpperCase())}
                                        </ListItemButton>
                                    </ListItem>
                                </>
                            ))}
                        </List>
                    </Box>
                </Stack>
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
                        color: theme.vars.palette.primary[50]
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
