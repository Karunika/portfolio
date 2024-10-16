import SectionLayout from '../../utils/sectionLayout'
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Stack from '@mui/joy/Stack';
import East from '@mui/icons-material/East';
import ScrollAnimation from 'react-animate-on-scroll';

const mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

interface IDate {
    month: number,
    year: number
}

interface IExperience {
    time: {
        start: IDate,
        end: IDate
    },
    logo?: string,
    company: string,
    title: string,
    mode: string,
    location: string,
    description: string[],
    tools: string[]
}


const experiences: IExperience[] = [
    {
        time: {
            start: { month: 3, year: 2022 },
            end: { month: 12, year: 2022 }
        },
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4_1aEWdkMwbedzb7SjD1SMUsCCIgEKivdA&s',
        company: 'Samsung R&D',
        title: 'Javascript Developer',
        mode: 'hybrid',
        location: 'Warsaw Spire, Warsaw',
        description: [
            `Revamped 10-year-old Content Creation tool "WebAuthor", used on over 100K+ Commercial LFD panels globally, for the MagicINFO 9 project.`,
            `Developed, tested and deployed features ensuring  cross-platform compatibility and conformance to the design specifications.`,
            `Led development of the "Supernova" monorepo widget library, focused on Social Media Cards using 3rd party APIs.`
        ],
        tools: [`Angular 2+`, `ReactJs`, `Jest`, `Cypress`, `StoryBook`, `fp-ts`, `RxJs`, `Git`, `Jira`]
    },
    {
        time: {
            start: { month: 1, year: 2022 },
            end: { month: 3, year: 2022 }
        },
        logo: 'https://montrosesoftware.com/images/unique-images/PNG/preview.png',
        company: 'Montrose',
        title: 'React Developer',
        mode: 'office',
        location: 'Kraków, Poland',
        description: [
            `Developed Internal Web Applications that boosted the efficiency of the workflow in the company many manifolds.`,
            `Provided mentorship to interns.`,
            `Sole frontend developer besides an intern, delivered features in a timely manner with quality and adherence to wireframes.`,
            `Actively participated in SCRUM meetings, contributing to agile project management and iterative development cycles.`
        ],
        tools: [`ReactJs`, `Django`, `TailwindCSS`, `GraphQL`]
    },
    {
        time: {
            start: { month: 6, year: 2021 },
            end: { month: 12, year: 2021 }
        },
        logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQG9c8WtnnV6eg/company-logo_200_200/company-logo_200_200/0/1630549697252?e=1736380800&v=beta&t=7CyWn3oJQFje0FhyMiPhF3pdW9Y6N4moPBNDeFW_1I4',
        company: 'Comitium',
        title: 'Volunteer Frontend Developer',
        mode: 'remote',
        location: 'Birmingham, U.K.',
        description: [
            `Enhanced front-end in Vue.js, reducing development time by 15%.`,
            `Praised for communication, coding practices, and Git proficiency.`,
        ],
        tools: [`VueJs`, `CSS`, `Jira`]
    },
]

const Experience = () => {
    return (
        <SectionLayout odd fullHeight col name='experience'>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
                <Typography level='h1'>Work Experience</Typography>
            </ScrollAnimation>
            <Stepper orientation="vertical" sx={(theme) => ({
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
                    // boxShadow: `0 0 0 1px ${theme.vars.palette.primary[500]}`,
                }
            })}>
                {experiences.map(({ logo, company, title, mode, description, tools, location, time: { start, end } }, i) => (
                    // @ts-ignore
                    <Step id={i} indicator={
                        <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                            <StepIndicator>
                                <img src={logo} />
                            </StepIndicator>
                        </ScrollAnimation>
                    }>
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
                                <Typography level='body-sm'>{`${mS[start.month - 1]} ${start.year} - ${mS[end.month - 1]} ${end.year} | ${location}`}</Typography>
                            </Stack>
                        </ScrollAnimation>
                        <Stack sx={(theme) => ({
                            ml: 2,
                            [theme.breakpoints.down(800)]: {
                                ml: 0
                            }
                        })}>
                            <List>
                                {description.map((point, i) => (
                                    // @ts-ignore
                                    <ListItem id={i} sx={{ alignItems: 'flex-start' }}>
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
                            </List>
                        </Stack>
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