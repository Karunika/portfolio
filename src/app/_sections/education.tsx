'use client'

import Image from 'next/image'
import React from 'react'
import SectionLayout from '../_components/sectionLayout'
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator from '@mui/joy/StepIndicator';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack'
import ScrollAnimation from 'react-animate-on-scroll';
import { useTheme } from '@mui/joy';

interface IEducation {
    institute: string,
    location: string,
    degree?: string,
    time: {
        start: number
        end: number
    },
}

const educations: IEducation[] = [
    {
        institute: 'Warsaw University of Technology',
        location: 'Warsaw',
        degree: 'BSc. CS (spec. Computer Systems & Networks)',
        time: {
            start: 2020,
            end: 2024
        }
    },
    {
        institute: 'J.K.G International School',
        location: 'India',
        degree: 'Higher Secondary Education (Science Stream - PCM)',
        time: {
            start: 2018,
            end: 2020
        }
    },
    {
        institute: 'T.I.S.',
        location: 'Bahrain',
        time: {
            start: 2012,
            end: 2015
        }
    },
    {
        institute: 'Sherbourne',
        location: 'Qatar',
        time: {
            start: 2009,
            end: 2012
        }
    },
    {
        institute: 'Sherwood Academy',
        location: 'U.A.E',
        time: {
            start: 2004,
            end: 2009
        }
    }
]

const Education = () => {
    const theme = useTheme()
    return (
        <SectionLayout name='education'>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                <Typography level='h1'>Education</Typography>
            </ScrollAnimation>

            <Stack sx={{
                flexDirection: 'row-reverse',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',

                [theme.breakpoints.down(600)]: {
                    flexDirection: 'column-reverse',
                },
            }}>
                <Stepper orientation="vertical" sx={{
                    '--StepIndicator-size': '2rem',
                    '--Step-connectorRadius': '1rem',
                    '--Step-connectorThickness': '2px',
                }}>
                    {educations.map(({ institute, location, degree, time: { start, end } }, i: number) =>
                        // @ts-ignore
                        <Step id={i}>
                            <Stack>
                                <ScrollAnimation animateIn='fadeIn' animateOnce>
                                    <Typography level='h3'>{`${institute}, ${location}`}</Typography>
                                </ScrollAnimation>
                            </Stack>
                            <Stack>
                                <ScrollAnimation animateIn='fadeIn' animateOnce>
                                    {degree && <Typography level='title-md'>{degree}</Typography>}
                                    <Typography level='body-sm'>{`${start} - ${end}`}</Typography>
                                </ScrollAnimation>
                            </Stack>
                        </Step>
                    )}
                    <Step sx={{ display: 'none !important' }} indicator={
                        <StepIndicator sx={{ display: 'hidden' }}>
                        </StepIndicator>
                    }></Step>
                </Stepper>

                <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                    <Card component="li" sx={{
                        mr: 2,
                        minHeight: '400px',
                        maxWidth: 400,
                        '& > div:not(:first-of-type)': {
                            opacity: 0,
                            transition: '0.4s ease'
                        },
                        '&:hover > div:not(:first-of-type)': {
                            opacity: 1
                        },
                        [theme.breakpoints.down(700)]: {
                            mb: 4
                        },
                    }}>
                        <CardCover>
                            <img src='images/childhood.jpg' />
                        </CardCover>
                        <CardCover
                            sx={{
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            }}
                        />
                        <CardContent sx={{ justifyContent: 'flex-end' }}>
                            <Typography
                                level="body-xs"
                                textColor="neutral.300"
                            >
                                Mom captured a sweet moment of me and my brother heading to school. Grateful for the little moments :)
                            </Typography>
                        </CardContent>
                    </Card>
                </ScrollAnimation>
            </Stack>


        </SectionLayout >
    )
}


export default Education
