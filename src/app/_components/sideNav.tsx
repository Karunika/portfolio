'use client'

import { useState } from 'react'
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import DensityMedium from '@mui/icons-material/DensityMedium';
import { scroller } from 'react-scroll';
import { useTheme } from '@mui/joy/styles';

const SideNav = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const toggleDrawer =
        (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setOpen(inOpen);
        }

    return (
        <Box sx={(theme) => ({
            display: 'flex',
            [theme.breakpoints.up(780)]: {
                display: 'none'
            }
        })}>
            <Button
                variant="plain"
                color="neutral"
                onClick={toggleDrawer(true)}
                sx={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    '&:hover': {
                        backgroundColor: '#ffffff44',
                    }
                }}
            >
                <DensityMedium sx={{
                    color: theme.vars.palette.primary[50]
                }}
                />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List role="menubar">
                        {['about', 'experience', 'education', 'skills', 'blogs', 'contact'].map((section, i) => (
                            <>
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
            </Drawer>
        </Box>
    )

}

export default SideNav
