'use client'

import SectionLayout from '../_components/sectionLayout'
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import Typography from '@mui/joy/Typography';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTheme } from '@mui/joy';
import content, { IExperience } from '../../content';
import ExperienceItem from '../_components/experienceItem'

const mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const experiences: IExperience[] = content.homepage.experience

const Experience = () => {
    const theme = useTheme()
    return (
        <SectionLayout odd fullHeight col name='experience'>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
                <Typography level='h1'>Work Experience</Typography>
            </ScrollAnimation>
            <Stepper orientation="vertical" sx={{
                '--StepIndicator-size': '6rem',
                '--Step-connectorRadius': '1rem',
                '--Step-connectorThickness': '2px',
                [theme.breakpoints.down(800)]: {
                    '--StepIndicator-size': '4rem',
                },
                [`.${stepIndicatorClasses.root}`]: {
                    [`& img`]: {
                        height: '100%',
                    },
                    overflow: 'hidden',
                    position: 'relative',
                    borderColor: '#fff',
                }
            }}>
                {experiences.map((experience, i) => (
                    <Step key={i} indicator={
                        <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                            <StepIndicator>
                                <img src={'images/' + experience.logo} />
                            </StepIndicator>
                        </ScrollAnimation>
                    }>
                        <ExperienceItem.Head {...experience} />
                        <ExperienceItem.Body {...experience} />
                    </Step>
                ))}
                <Step sx={{ display: 'none !important' }} indicator={
                    <StepIndicator sx={{ display: 'hidden' }}>
                    </StepIndicator>
                }></Step>
            </Stepper>

        </SectionLayout >
    )
}

export default Experience