'use client'

import Markdown from '../_components/markdown'
import Giscus from '@giscus/react'
import SectionLayout from '../../../_components/sectionLayout'
import Typography from '@mui/joy/Typography'
import Link from '@mui/joy/Link'

const Body = ({ item }: { item: any }) => {
    return (

        <SectionLayout fullHeight name='layout' sx={{ mt: -6 }}>

            <Typography sx={{ mt: 1 }} level='body-sm'>
                Image Courtesy:
                <Link href={item.thumbnailCourtesyLink} target='_blank' sx={{ ml: 1 }}>
                    {item.thumbnailCourtesyText}
                </Link>
            </Typography>

            <Markdown>
                {item.data}
            </Markdown>

            <Giscus
                id="comments"
                repo="karunika/portfolio"
                repoId="R_kgDOM95uww"
                category="Announcements"
                categoryId="DIC_kwDOM95uw84CjgmB"
                mapping="url"
                term="Welcome to @giscus/react component!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="light_protanopia"
                lang="en"
                loading="lazy"
            />
        </SectionLayout>
    )
}

export default Body
