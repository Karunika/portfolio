'user client'

import React from 'react'
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
            animation: 'fadeInDown',
            animationDuration: '1s',
            animationFillMode: 'both',
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
                        <React.Fragment key={section}>
                            {i !== 0 && <ListDivider />}
                            <ListItem role="none">
                                <ListItemButton
                                    role="menuitem"
                                    component="a"
                                    onClick={() => scroller.scrollTo(section, {
                                        duration: 500 * (i + 1),
                                        smooth: true,
                                    })}
                                    sx={{
                                        width: 'max-content',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: '0.4s ease',
                                        '&:not(.Mui-selected, [aria-selected="true"]):hover': {
                                            backgroundColor: '#00000000',
                                        },
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            display: 'block',
                                            width: '0%',
                                            height: '2px',
                                            mt: 3,
                                            backgroundColor: '#4393E4',
                                            transition: '0.4s ease'
                                        },
                                        '&:hover::after': {
                                            width: '80%',
                                        },
                                        '&:hover': {
                                            color: '#4393E4 !important'
                                        }
                                    }}
                                >
                                    {section.replace(/^./, n => n.toUpperCase())}
                                </ListItemButton>
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </Box>
        </Stack >
    )
}

export default Nav
