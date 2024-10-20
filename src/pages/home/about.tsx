import Typography from "@mui/joy/Typography"
import SectionLayout from "../../utils/sectionLayout"
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {
    const aboutMe = `Hi! I am an experienced Full Stack Engineer, with a strong history of building, delivering, and maintaining robust industrial applications. I thrive in collaborative environments, where I excel at empowering team members to perform at their best. With a keen eye for detail, I’m dedicated to ensuring every product I work on is meticulously crafted and of the highest quality. My passion for precision and teamwork drives me to create solutions that not only meet, but exceed expectations.`

    return (
        <SectionLayout name='about'>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                <Typography level='h1'>About me</Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' animateOnce>
                <Typography>{aboutMe}</Typography>
            </ScrollAnimation>
        </SectionLayout>
    )
}

export default About
