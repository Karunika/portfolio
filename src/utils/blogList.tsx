import { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import Typography from '@mui/joy/Typography'
import List from '@mui/joy/List'
import ListItem from '@mui/joy/ListItem'
import Card from '@mui/joy/Card'
import Stack from '@mui/joy/Stack';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import moment from 'moment';
import { BlogsContext, BlogsContextType } from '../context/blogs';

const KeywordChips = ({ keywords }: { keywords: string }) => {
    return (
        <Stack direction='row' spacing={1} sx={{ flexWrap: 'wrap', mt: 1 }}>
            {/* @ts-ignore */}
            {keywords.split(', ').map((n: string, i: number) => <Chip key={i} variant='outlined' size='sm'>{n}</Chip>)}
        </Stack>
    )
}

const formatTimestamp = (timestamp: string) => moment(timestamp).format('MMMM Do, YYYY h:mm A');

const Layout = () => {
    const { pathname } = useLocation()
    const context = useContext(BlogsContext);

    if (!context) {
        return <p>Error: Blog Context is not available.</p>;
    }
    const { items, loading, error } = context as BlogsContextType;

    if (loading || error) {
        return <p>Error: DataContext is not available.</p>;
    }

    return (
        <List sx={{ flex: 1 }}>
            {items.map((item, i) => (
                // @ts-ignore
                <ListItem key={i}>
                    <Link to={'/blog/' + String(item?.sys?.id)}
                        style={{ flex: 1 }}
                        className='anchor'
                        state={{ item: item, prev: pathname }}
                    >
                        <Card sx={{ flex: 1 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >

                                <Box>

                                    <Typography level='title-lg'>
                                        {String(item?.fields?.title)}
                                    </Typography>
                                    <Typography level='body-sm'>
                                        {formatTimestamp(String(item?.sys?.createdAt))}
                                    </Typography>

                                    <KeywordChips keywords={String(item?.fields?.keywords)} />
                                </Box>
                                <Box>

                                </Box>
                            </Box>
                        </Card>
                    </Link>
                </ListItem>
            ))}
        </List>
    )
}

export default Layout
