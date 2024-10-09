import React from 'react'
import SectionLayout from '../../utils/sectionLayout'
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import { Card, Stack, Typography } from '@mui/joy'

interface IEducation {
    institute: string,
    location: string,
    degree: string,
    time: {
        start: number
        end: number
    },
}

const educations = [
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
]

const Education = () => {
    return (
        <SectionLayout name='education'>
            <Typography level='h1'>Education</Typography>
            {/* {educations.map(({institute, location, degree, time: { start, end}}) =>)} */}
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
                            <Typography level='title-md'>{degree}</Typography>
                            <Typography level='body-sm'>{`${start} - ${end}`}</Typography>
                        </Stack>
                    </Step>
                )}
                <Step sx={{ display: 'none !important' }} indicator={
                    <StepIndicator sx={{ display: 'hidden' }}>
                    </StepIndicator>
                }></Step>
            </Stepper>

        </SectionLayout>
    )
}


export default Education
