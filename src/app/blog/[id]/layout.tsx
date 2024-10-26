'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Giscus from '@giscus/react'
import SectionLayout from '../../_components/sectionLayout'
import Link from '@mui/joy/Link'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

const Layout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()

    const backClickHandler = () => {
        router.back()
    }

    return (
        <SectionLayout fullHeight name='layout'>
            <Link sx={{ mt: -4 }} onClick={backClickHandler}>
                <ArrowBackIosIcon />
                Go back
            </Link>

            {children}

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

export default Layout
