import About from './about'
import Blogs from './blogs'
import Contact from './contact'
import Education from './education'
import Experience from './experience'
import Landing from './landing'
import Skills from './skills'

const Home = () => {
    return (
        <>
            <Landing />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Blogs />
            <Contact />
        </>
    )
}

export default Home
