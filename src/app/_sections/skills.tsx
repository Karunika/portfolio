'use client'

import { FunctionComponent, useState, useRef, Fragment } from 'react';
import SectionLayout from '../_components/sectionLayout'
import Typography from '@mui/joy/Typography'
import Input, { InputProps } from '@mui/joy/Input'
import Divider from '@mui/joy/Divider'
import List from '@mui/joy/List'
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator, {
    listItemDecoratorClasses,
} from '@mui/joy/ListItemDecorator';
import IconButton from '@mui/joy/IconButton';
import Chip from '@mui/joy/Chip';
import ChipDelete from '@mui/joy/ChipDelete';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option, { optionClasses } from '@mui/joy/Option';
import ScrollAnimation from 'react-animate-on-scroll';
import Check from '@mui/icons-material/Check'
import { useTheme } from '@mui/joy';
import {
    JavascriptOriginal,
    TypescriptOriginal,
    ReactOriginal,
    ReduxOriginal,
    NextjsOriginal,
    AngularOriginal,
    Css3Original,
    SassOriginal,
    NodejsOriginal,
    PythonOriginal,
    GoOriginal,
    MongodbOriginal,
    PostgresqlOriginal,
    MysqlOriginal,
    GitOriginal,
    GithubOriginal,
    DockerOriginal,
    AzureOriginal,
    TailwindcssOriginal,
    MaterialuiOriginal,
    ReactrouterOriginal,
    ReactnavigationOriginal,
    BunOriginal,
    ExpressOriginal,
    PrismaOriginal,
    GitPlain,
    GitlabOriginal,
    CircleciPlain,
    JenkinsOriginal,
    KubernetesOriginal,
    AmazonwebservicesOriginalWordmark
} from "devicons-react";

const TechnologyEntity = (name: string, url: string, Icon: FunctionComponent<any> | null, keywords: string[]) => {
    return {
        name,
        url,
        Icon,
        keywords
    }
}

// const technologies = {}

const technologiesArray = [
    // Frontend Development
    TechnologyEntity('TypeScript', 'https://www.typescriptlang.org/', TypescriptOriginal, ['frontend', 'language']),
    TechnologyEntity('JavaScript', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', JavascriptOriginal, ['frontend', 'language']),
    TechnologyEntity('React', 'https://reactjs.org/', ReactOriginal, ['frontend', 'framework']),
    TechnologyEntity('Redux', 'https://redux.js.org/', ReduxOriginal, ['frontend', 'state management']),
    TechnologyEntity('Next.js', 'https://nextjs.org/', NextjsOriginal, ['frontend', 'framework', 'SSR']),
    TechnologyEntity('Angular', 'https://angular.io/', AngularOriginal, ['frontend', 'framework']),
    TechnologyEntity('CSS3', 'https://developer.mozilla.org/en-US/docs/Web/CSS', Css3Original, ['frontend', 'style']),
    TechnologyEntity('Sass', 'https://sass-lang.com/', SassOriginal, ['frontend', 'style', 'preprocessor']),
    TechnologyEntity('TailwindCSS', 'https://tailwindcss.com/', TailwindcssOriginal, ['frontend', 'style', 'utility']),
    TechnologyEntity('Material-UI', 'https://mui.com/', MaterialuiOriginal, ['frontend', 'style', 'UI library']),

    // Mobile Development
    TechnologyEntity('React Native', 'https://reactnative.dev/', ReactOriginal, ['mobile', 'framework']),
    TechnologyEntity('React Navigation', 'https://reactnavigation.org/', ReactnavigationOriginal, ['mobile', 'library', 'navigation']),
    TechnologyEntity('Expo', 'https://expo.dev/', null, ['mobile', 'framework', 'tooling']),

    // Backend Development
    TechnologyEntity('Node.js', 'https://nodejs.org/', NodejsOriginal, ['backend', 'language']),
    TechnologyEntity('Bun.js', 'https://bun.sh/', BunOriginal, ['backend', 'language', 'runtime']),
    TechnologyEntity('Go', 'https://golang.org/', GoOriginal, ['backend', 'language']),
    TechnologyEntity('Python', 'https://www.python.org/', PythonOriginal, ['backend', 'language']),
    TechnologyEntity('Express.js', 'https://expressjs.com/', ExpressOriginal, ['backend', 'framework']),
    TechnologyEntity('NestJS', 'https://nestjs.com/', NextjsOriginal, ['backend', 'framework']),
    TechnologyEntity('Prisma', 'https://www.prisma.io/', PrismaOriginal, ['backend', 'ORM']),

    // Database
    TechnologyEntity('MongoDB', 'https://www.mongodb.com/', MongodbOriginal, ['database', 'NoSQL', 'SQL driver']),
    TechnologyEntity('PostgreSQL', 'https://www.postgresql.org/', PostgresqlOriginal, ['database', 'SQL', 'SQL driver']),
    TechnologyEntity('MySQL', 'https://www.mysql.com/', MysqlOriginal, ['database', 'SQL', 'SQL driver']),

    // DevOps
    TechnologyEntity('Git', 'https://git-scm.com/', GitPlain, ['devops', 'version control']),
    TechnologyEntity('GitHub', 'https://github.com/', GithubOriginal, ['devops', 'version control', 'repository']),
    TechnologyEntity('GitLab', 'https://about.gitlab.com/', GitlabOriginal, ['devops', 'version control', 'repository']),
    TechnologyEntity('CircleCI', 'https://circleci.com/', CircleciPlain, ['devops', 'ci/cd']),
    TechnologyEntity('Jenkins', 'https://www.jenkins.io/', JenkinsOriginal, ['devops', 'ci/cd']),
    TechnologyEntity('Docker', 'https://www.docker.com/', DockerOriginal, ['devops', 'containerization']),
    TechnologyEntity('Kubernetes', 'https://kubernetes.io/', KubernetesOriginal, ['devops', 'orchestration']),

    // Cloud Platforms
    TechnologyEntity('AWS', 'https://aws.amazon.com/', AmazonwebservicesOriginalWordmark, ['cloud', 'platform']),
    TechnologyEntity('Azure', 'https://azure.microsoft.com/', AzureOriginal, ['cloud', 'platform']),
];

const keywords: { [key: string]: string[] } = {
    domain: ['frontend', 'backend', 'mobile', 'database', 'devops', 'cloud'],
    type: ['language', 'runtime', 'framework', 'preprocessor', 'SQL driver', 'platrom', 'ci/cd', 'version control'],
}

type DebounceProps = {
    handleDebounce: (value: string) => void;
    debounceTimeout: number;
};

function DebounceInput(props: InputProps & DebounceProps) {
    const { handleDebounce, debounceTimeout, ...other } = props;

    const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(
        undefined,
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            handleDebounce(event.target.value);
        }, debounceTimeout);
    };

    return <Input {...other} onChange={handleChange} />;
}

const intersection = (as: string[], bs: string[]) => {
    return as.filter((a) => bs.includes(a))
}

interface Props {
    query: string
    filter: string[]
    name: string
    Icon: FunctionComponent<any> | null
    keywords: string[]
}

const SkillChip = ({ query, filter, name, Icon, keywords }: Props) => {

    const isQueried = query !== ''
    const isQueryMatched = name.toLowerCase().startsWith(query.toLowerCase())
    const isFiltered = filter.length > 0
    const isFilterMatched = intersection(filter, keywords).length > 0

    const isMatched = (!isQueried && !isFiltered)
        || (!isFiltered && isQueried && isQueryMatched)
        || (!isQueried && isFiltered && isFilterMatched)
        || (isQueryMatched && isFilterMatched)

    return <Chip
        key={name}
        variant='outlined'
        size='lg'
        startDecorator={Icon && <Icon />}
        sx={{
            opacity: isMatched ? 1 : 0.4,
            order: isMatched ? 1 : 2,
            mx: 1
        }}
    >
        {name}
    </Chip>

}


const Skills = () => {
    const [query, setQuery] = useState('')
    const [filter, setFilter] = useState<string[]>([])

    const handleDebounce = (value: string) => {
        setQuery(value);
    };

    const handleChange = (newValue: string[] | null) => {
        if (newValue !== null) {
            setFilter(newValue)
        }
    };

    const clickHandler = (value: string) => {
        setFilter(prev => prev.filter((val) => val !== value))
    }
    // const theme = useTheme()
    return (
        <SectionLayout odd name='skills'>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                <Typography level='h1'>Skills</Typography>
            </ScrollAnimation>

            <Stack direction='row' spacing={2}>
                <DebounceInput
                    variant='outlined'
                    size='sm'
                    placeholder='search a skill...'
                    sx={{ flex: 1 }}
                    debounceTimeout={1000}
                    handleDebounce={handleDebounce}
                />
                <Select
                    variant='outlined'
                    size='sm'
                    placeholder='filter by ...'
                    multiple
                    renderValue={(o) => <Fragment>{'filter by ...'}</Fragment>}
                    onChange={(_, newValue: string[] | null) => handleChange(newValue)}
                    value={filter}
                >
                    {Object.keys(keywords).map((title: string, i: number) => (
                        <Fragment key={title}>
                            {i !== 0 && <ListDivider role="none" />}
                            <List sx={{ '--ListItemDecorator-size': '28px' }}>
                                <ListItem sticky>
                                    <Typography level="body-xs" sx={{ textTransform: 'uppercase' }}>
                                        {title}
                                    </Typography>
                                </ListItem>
                                {keywords[title].map((value) => (
                                    <Option
                                        key={value}
                                        value={value}
                                        sx={{
                                            [`&.${optionClasses.selected} .${listItemDecoratorClasses.root}`]:
                                            {
                                                opacity: 1,
                                            },
                                        }}
                                    >
                                        <ListItemDecorator sx={{ opacity: 0 }}>
                                            <Check />
                                        </ListItemDecorator>
                                        {value}
                                    </Option>
                                ))}
                            </List>
                        </Fragment>
                    ))}
                </Select>

            </Stack>

            {filter.length > 0 && <Stack spacing={1} sx={{ mt: 2, flexWrap: 'wrap', rowGap: 1 }} direction='row'>
                {filter.map((value: string) => (
                    <Chip size='sm'
                        endDecorator={
                            <ChipDelete onClick={() => clickHandler(value)} />
                        }
                        key={value}
                        variant='outlined'
                    >
                        {value}
                    </Chip>
                ))}
            </Stack>}

            <Divider sx={{ my: 2 }} />

            <Stack direction='row' sx={{ flex: 1, flexWrap: 'wrap', rowGap: 2, justifyContent: 'center' }}>
                {technologiesArray.map((techEntity, i) => (
                    <SkillChip {...techEntity} query={query} filter={filter} key={i} />
                ))}
            </Stack>
        </SectionLayout >
    )
}

export default Skills
