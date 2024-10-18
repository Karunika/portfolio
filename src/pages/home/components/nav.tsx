import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Stack from '@mui/joy/Stack'
import { scroller } from 'react-scroll';

const Nav = () => {
    return (

        <Stack sx={(theme) => ({
            position: 'absolute',
            top: 0,
            borderBottomRightRadius: 6,
            borderBottomLeftRadius: 6,
            overflow: 'hidden',
            zIndex: 50,
            [theme.breakpoints.down(780)]: {
                display: 'none'
            }
        })}>
            <Box
                component="nav"
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
    )
}

export default Nav
