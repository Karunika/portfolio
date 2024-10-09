import React from 'react'
import SectionLayout from '../../utils/sectionLayout'
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack'

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
    return (
        <SectionLayout name='education'>
            <Typography level='h1'>Education</Typography>

            <Stack direction='row-reverse' spacing={2} sx={{ justifyContent: 'flex-end' }}>
                <Stepper orientation="vertical" sx={{
                    '--StepIndicator-size': '2rem',
                    '--Step-connectorRadius': '1rem',
                    '--Step-connectorThickness': '2px',
                }}>
                    {educations.map(({ institute, location, degree, time: { start, end } }, i: number) =>
                        // @ts-ignore
                        <Step id={i}>
                            <Stack>
                                <Typography level='h3'>{`${institute}, ${location}`}</Typography>
                            </Stack>
                            <Stack>
                                {degree && <Typography level='title-md'>{degree}</Typography>}
                                <Typography level='body-sm'>{`${start} - ${end}`}</Typography>
                            </Stack>
                        </Step>
                    )}
                    <Step sx={{ display: 'none !important' }} indicator={
                        <StepIndicator sx={{ display: 'hidden' }}>
                        </StepIndicator>
                    }></Step>
                </Stepper>

                <Card component="li" sx={{
                    maxWidth: 200,
                    ['& > div:not(:first-child)']: {
                        opacity: 0,
                        transition: '0.4s ease'
                    },
                    ['&:hover > div:not(:first-child)']: {
                        opacity: 1
                    }
                }}>
                    <CardCover>
                        <img src={require('../../assets/childhood.jpg')} />
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
            </Stack>


        </SectionLayout>
    )
}


export default Education
