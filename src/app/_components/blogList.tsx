'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Typography from '@mui/joy/Typography'
import List from '@mui/joy/List'
import ListDivider from '@mui/joy/ListDivider'
import ListItem from '@mui/joy/ListItem'
import Stack from '@mui/joy/Stack';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import { getEntries } from '../../utils/contentfulService'

const KeywordChips = ({ keywords }: { keywords: string }) => {
    return (
        <Stack direction='row' spacing={1} sx={{ flexWrap: 'wrap', mt: 1 }}>
            {/* @ts-ignore */}
            {keywords.split(', ').map((n: string, i: number) => <Chip key={i} variant='outlined' size='sm'>{n}</Chip>)}
        </Stack>
    )
}

const Layout = () => {
    const [items, setItems] = useState<any[]>([])

    useEffect(() => {
        getEntries()
            .then((res) => setItems(res as any[]))
    }, [])

    return (
        <List sx={{ flex: 1 }}>
            {items.map((item, i) => (
                <React.Fragment key={item.id}>
                    {i !== 0 && <ListDivider />}
                    <ListItem key={i}>
                        <Link href={'/blog/' + item.id}
                            style={{ flex: 1 }}
                            className='anchor'
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >

                                <Box>

                                    <Typography level='title-lg'>
                                        {String(item.title)}
                                    </Typography>
                                    <Typography level='body-sm'>
                                        {item.createdAt}
                                    </Typography>

                                    <KeywordChips keywords={item.keywords} />
                                </Box>
                                <Box>

                                </Box>
                            </Box>
                        </Link>
                    </ListItem>
                </React.Fragment>
            ))}
        </List>
    )
}

export default Layout
