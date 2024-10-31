'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Typography from '@mui/joy/Typography'
import List from '@mui/joy/List'
import ListDivider from '@mui/joy/ListDivider'
import ListItem from '@mui/joy/ListItem'
import AspectRatio from '@mui/joy/AspectRatio'
import Stack from '@mui/joy/Stack';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import { getEntries } from '../../utils/contentfulService'
import { useTheme } from '@mui/joy';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const KeywordChips = ({ keywords }: { keywords: string }) => {
    return (
        <Stack direction='row' spacing={1} sx={{ flexWrap: 'wrap', pt: 3, rowGap: 1 }}>
            {keywords.split(', ').map((n: string, i: number) => <Chip key={i} variant='outlined' size='sm'>{n}</Chip>)}
        </Stack>
    )
}

const Layout = () => {
    const [items, setItems] = useState<any[]>([])
    const theme = useTheme()

    useEffect(() => {
        getEntries()
            .then((res) => setItems(res as any[]))
    }, [])

    return (
        <List sx={{ flex: 1 }}>
            {items.map((item, i) => (
                <React.Fragment key={item.id}>
                    {i !== 0 && <ListDivider sx={{ my: 3 }} />}
                    <ListItem key={i} sx={{
                        p: 0,
                        alignItems: 'center',
                        [theme.breakpoints.down(800)]: {
                            flexDirection: 'column',
                            alignItems: 'flex-start'
                        }
                    }}>
                        <AspectRatio ratio='1' sx={{
                            width: '100px',
                            borderRadius: 'md',
                            mr: 2,
                            [theme.breakpoints.down(800)]: {
                                width: '100%'
                            }
                        }}>
                            <img
                                src={'https:' + item.thumbnail}
                                loading="lazy"
                            />
                        </AspectRatio>
                        <Link href={'/blog/' + item.id}
                            style={{
                                flex: 1,
                                height: '100px'
                            }}
                            className='anchor'
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    height: '100%',
                                    [theme.breakpoints.down(800)]: {
                                        height: 'auto'
                                    }
                                }}
                            >

                                <Typography
                                    level='title-lg'
                                    endDecorator={<ArrowOutwardIcon />}
                                >
                                    {String(item.title)}
                                </Typography>
                                <Typography level='body-sm'>
                                    {item.createdAt}
                                </Typography>

                                <KeywordChips keywords={item.keywords} />
                            </Box>
                        </Link>
                    </ListItem>
                </React.Fragment>
            ))}
        </List>
    )
}

export default Layout
