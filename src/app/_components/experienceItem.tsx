'use client'

import React, { useEffect, useState } from 'react'
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Stack from '@mui/joy/Stack';
import East from '@mui/icons-material/East';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTheme } from '@mui/joy';
import { IExperience } from '../../content';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import axios from 'axios';

const mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const Head = ({ company, title, mode, location, time: { start, end } }: IExperience) => {
    return (
        <ScrollAnimation animateIn='fadeIn' animateOnce>
            <Stack sx={(theme) => ({
                ml: 4,
                [theme.breakpoints.down(800)]: {
                    ml: 2
                }
            })}>
                <Typography level='h3'>{company}</Typography>
                <Stack direction='row' spacing={1} sx={{ mb: 1 }}>
                    <Typography level='h4'>{title}</Typography>
                    <Chip variant='outlined' size='sm' sx={{ alignSelf: 'center' }}>{mode}</Chip>
                </Stack>
                <Typography level='body-sm'>
                    {`${mS[start.month - 1]} ${start.year} - ${mS[end.month - 1]} ${end.year} | ${location}`}
                </Typography>
            </Stack>
        </ScrollAnimation>

    )

}

interface MediaProps {
    link: string
}

const LinkMedia = ({ link }: MediaProps) => {
    const theme = useTheme()

    const [preview, setPreview] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        axios('https://api.linkpreview.net/?q=' + link, {
            headers: {
                'X-Linkpreview-Api-Key': process.env.NEXT_PUBLIC_LINK_PREVIEW_API_KEY
            }
        })
            .then(res => res.data)
            .then(data => {
                setPreview(data)
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })

    }, [])

    if (loading) {
        return <> loading... </>
    }

    if (error) {
        return (
            <Typography level='body-xs'>
                Unable to load link preview
            </Typography>
        )
    }

    return (
        <Card
            variant="outlined"
            orientation="horizontal"
            sx={{
                padding: 0,
                backgroundColor: '#ffffff00',
                border: 'none',
                flex: 1,
                [theme.breakpoints.down(800)]: {
                    flexDirection: 'column'
                }
            }}
        >
            <AspectRatio ratio="1" sx={{ width: 90 }}>
                <img
                    src={preview.image}
                    loading="lazy"
                />
            </AspectRatio>
            <CardContent>
                <Typography
                    level="title-lg"
                    id="card-description"
                    endDecorator={<ArrowOutwardIcon />}
                >
                    {preview.title}
                </Typography>
                <Typography
                    level="body-sm"
                    aria-describedby="card-description"
                    sx={{ mb: 1 }}
                >
                    <Link
                        target='_blank'
                        overlay
                        href={link}
                        sx={{ color: 'text.tertiary' }}
                    >
                        {preview.description}
                    </Link>
                </Typography>
            </CardContent>
        </Card>
    )

}

const Body = ({ description, tools, media }: IExperience) => {
    const theme = useTheme()

    return (
        <Stack sx={{
            ml: 2,
            [theme.breakpoints.down(800)]: {
                ml: 0
            }
        }}>
            <List>
                {description.map((point, i) => (
                    <ListItem key={i} sx={{ alignItems: 'flex-start' }}>
                        <ListItemDecorator>
                            <ScrollAnimation animateIn='fadeIn' animateOnce>
                                <East fontSize='small' />
                            </ScrollAnimation>
                        </ListItemDecorator>
                        <ListItemContent>
                            <ScrollAnimation animateIn='fadeIn' animateOnce>
                                {point}
                            </ScrollAnimation>
                        </ListItemContent>
                    </ListItem>
                ))}
                <ListItem>
                    <ScrollAnimation animateIn='fadeIn' animateOnce>
                        <b>Tools: </b>{tools.join(', ')}
                    </ScrollAnimation>
                </ListItem>
                {media && <ListItem sx={{ mt: 2 }}>
                    {media.filter(({ type }) => type === 'link')
                        .map(({ payload }, i) => (
                            <LinkMedia link={payload} key={i} />
                        ))
                    }
                </ListItem>}
            </List>
        </Stack>
    )
}

const ExperienceItem = {
    Head,
    Body
}

export default ExperienceItem
