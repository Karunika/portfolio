import SectionLayout from '../../utils/sectionLayout'
import Typography from '@mui/joy/Typography'
import { Card, Chip, List, ListItem, Stack, Box } from '@mui/joy'
import Divider from '@mui/joy/Divider'

const skills: { [key: string]: string | { [key: string]: string } } = {
    programming: {
        frontend: 'TypeScript, JavaScript (ES6+), HTML/CSS',
        backend: 'NodeJs, Go, C/C++, SQL',
    },
    frameworks: {
        react: 'Redux Toolkit, React Router v6, Next.js',
        'react native': 'React Native Navigation, expo',
        angular: 'Angular 2+, angular-material, angular services',
        backend: 'chi (go), express (nodeJs), Prisma ORM, Effect',
        styles: 'Sass/Scss, Tailwind CSS, Material UI, Chakra UI',
        database: 'PostgreSQL, MongoDB, MySQL',
    },
    tools: 'Git, Gulp, Webpack, Heroku, Lerna, Docker, npm'
}

const SkillChips = ({ title = '', skills }: { title?: string, skills: string }) => {
    return (
        <Stack>
            {title && <Typography level='body-xs' sx={{ mt: 2 }}>{title.toUpperCase()}</Typography>}
            <Stack direction='row' spacing={1} sx={{ mt: 1 }}>
                {skills.split(', ').map((n: string, i: number) => <Chip variant='outlined' size='sm'>{n}</Chip>)}
            </Stack>
        </Stack>
    )
}

const Skills = () => {
    return (
        <SectionLayout odd name='skills'>
            <Typography level='h1'>Skills</Typography>
            <Stack direction='row' >
                <Card>
                    {Object.keys(skills).map((title: string) => (
                        <Stack sx={{ position: 'relative' }}>
                            <Box sx={(theme) => ({
                                position: 'sticky',
                                top: 10,
                                backgroundColor: theme.vars.palette.neutral[50],
                                zIndex: 2,
                                '&::before': {
                                    width: '100%',
                                    content: '""',
                                    height: 10,
                                    backgroundColor: theme.vars.palette.neutral[50],
                                    zIndex: 2,
                                    display: 'block',
                                    position: 'absolute',
                                    top: -10,
                                }
                            })}>
                                <Typography level='title-lg'>{title.replace(/^./, (n) => n.toUpperCase())}</Typography>
                                <Divider sx={{ mt: 1 }} />
                            </Box>
                            {typeof skills[title] === 'string' ?
                                <SkillChips skills={skills[title] as string} />
                                : Object.keys(skills[title] as { [key: string]: string }).map((subtitle: string) => (
                                    <SkillChips title={subtitle} skills={(skills[title] as { [key: string]: string })[subtitle]} />
                                ))}
                        </Stack>
                    ))}
                </Card>
                <Box sx={{ position: 'relative', flex: 1 }}>

                    <Card sx={{ ml: 4, position: 'sticky', top: 10 }}>
                        <>
                            <Typography level='title-lg'>Key Soft Skills</Typography>
                            <Divider />
                            <List>
                                <ListItem>Native level proficiency in English</ListItem>
                                <ListItem>Effective Communication and Team Collaboration</ListItem>
                                <ListItem>Customer Relations</ListItem>
                                <ListItem>Inclusivity and Diversity Proponent</ListItem>
                            </List>
                            <Typography level='title-lg'>Key Technical Skills</Typography>
                            <Divider />
                            <List>
                                <ListItem>Single Page Applications</ListItem>
                                <ListItem>Progressive Web Applications</ListItem>
                                <ListItem>Quality Assurance and Testing</ListItem>
                                <ListItem>RESTful API Construction and Integration</ListItem>
                                <ListItem>Entity Relationship Modelling</ListItem>
                                <ListItem>Functional Programming</ListItem>
                                <ListItem>Object Oriented Programming</ListItem>
                                <ListItem>Data Structures and Algorithms</ListItem>
                            </List>
                        </>
                    </Card>
                </Box>
            </Stack>
        </SectionLayout>
    )
}


export default Skills
