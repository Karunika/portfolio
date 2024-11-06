'use client'

import { Parallax } from 'react-parallax'
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import Chip from '@mui/joy/Chip'
import Box from '@mui/joy/Box'
import Link from '@mui/joy/Link'
import { useTheme } from '@mui/joy';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useRouter } from 'next/navigation'

interface KeywordChipsProps {
    keywords: string
}

const KeywordChips = ({ keywords = '' }: KeywordChipsProps) => {
    return (
        <Stack direction='row' spacing={1} sx={{ flexWrap: 'wrap', mt: 2, mb: 4 }}>
            {keywords.split(', ').map((n: string, i: number) =>
                <Chip
                    key={i}
                    variant='outlined'
                    size='sm'
                    sx={{ opacity: 0.7 }}
                >
                    {n}
                </Chip>
            )}
        </Stack>
    )
}

const Header = ({ item }: { item: any }) => {
    const router = useRouter()
    const theme = useTheme()

    const backClickHandler = () => {
        router.back()
    }

    return (
        <Box sx={{
            width: '100vw',
            alignSelf: 'center',
            justifySelf: 'center',
        }}>
            <Parallax
                bgImage={item.thumbnail}
                strength={-200}
            >
                <Box sx={{
                    minWidth: '100vw',
                    minHeight: '50vh',
                    backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.8)`,
                }}>
                    <Box
                        sx={{
                            minHeight: 'inherit',
                            margin: 'auto',
                            maxWidth: 800,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            px: '12px'
                        }}
                    >
                        <Link sx={{
                            mt: 4,
                            color: theme.vars.palette.primary[100],
                        }} onClick={backClickHandler}>
                            <ArrowBackIosIcon />
                            Go back
                        </Link>

                        <Box>
                            <Typography level='h1'
                                sx={{
                                    mb: '2rem !important',
                                    color: theme.vars.palette.primary[100],
                                    '&::after': {
                                        backgroundColor: theme.vars.palette.primary[100]
                                    }
                                }}>
                                {item.title}
                            </Typography>

                            <Typography
                                sx={{
                                    mt: 2,
                                    color: theme.vars.palette.primary[100],
                                }}
                                level='body-sm'
                            >
                                {item.createdAt}
                            </Typography>

                            {item.keywords && <KeywordChips keywords={item.keywords} />}

                        </Box>


                        {/* <Typography sx={{
                            mt: 4,
                            color: theme.vars.palette.primary[100],
                        }} level='body-sm'>
                            Image Courtesy:
                            <Link href={item.thumbnailCourtesyLink} target='_blank' sx={{ ml: 1 }}>
                                {item.thumbnailCourtesyText}
                            </Link>
                        </Typography> */}
                    </Box>

                </Box>
            </Parallax>
        </Box>
    )
}

export default Header
