'use client'

import Typography from "@mui/joy/Typography"
import SectionLayout from "../_components/sectionLayout"
import ScrollAnimation from 'react-animate-on-scroll'
import List from '@mui/joy/List'
import ListItem from '@mui/joy/ListItem'
import ListItemContent from '@mui/joy/ListItemContent'
import ListItemDecorator from '@mui/joy/ListItemDecorator'
import LocationOn from '@mui/icons-material/LocationOn'
import Link from '@mui/joy/Link'
import { scroller } from 'react-scroll'

const About = () => {
    const aboutMe = `Hi! I am an experienced Full Stack Engineer, with a strong history of building, delivering, and maintaining robust industrial applications. I thrive in collaborative environments, where I excel at empowering team members to perform at their best. With a keen eye for detail, I’m dedicated to ensuring every product I work on is meticulously crafted and of the highest quality. My passion for precision and teamwork drives me to create solutions that not only meet, but exceed expectations.`

    return (
        <SectionLayout name='about'>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                <Typography level='h1'>About me</Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInRight' animateOnce>
                <Typography level='body-sm'
                    startDecorator={
                        <LocationOn fontSize='md' />
                    }
                    sx={{ ml: -1, mb: 2 }}
                >
                    Kraków, Poland
                </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' animateOnce>
                <Typography>{aboutMe}</Typography>
            </ScrollAnimation>
            <Link
                role="menuitem"
                component="a"
                onClick={() => scroller.scrollTo('skills', {
                    duration: 1000,
                    smooth: true,
                })}
                sx={{ mt: 2 }}
            >
                Check out my Skills...
            </Link>
        </SectionLayout>
    )
}

export default About
