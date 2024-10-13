import SectionLayout from "../../utils/sectionLayout"
import Typography from "@mui/joy/Typography"
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import Phone from '@mui/icons-material/Phone';
import ScrollAnimation from 'react-animate-on-scroll';

const Contact = () => {

    return (
        <SectionLayout odd name='contact'>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                <Typography level='h1'>Let's get in touch!</Typography>
            </ScrollAnimation>
            <List>
                <ListItem>
                    <ListItemDecorator>
                        <ScrollAnimation animateIn='fadeIn' animateOnce>
                            <EmailOutlined />
                        </ScrollAnimation>
                    </ListItemDecorator>
                    <ListItemContent>
                        <ScrollAnimation animateIn='fadeInRight' animateOnce>
                            karunikatrip@gmail.com
                        </ScrollAnimation>
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemDecorator>
                        <ScrollAnimation animateIn='fadeIn' animateOnce>
                            <Phone />
                        </ScrollAnimation>
                    </ListItemDecorator>
                    <ListItemContent>
                        <ScrollAnimation animateIn='fadeInRight' animateOnce>
                            +48 501 503 727
                        </ScrollAnimation>
                    </ListItemContent>
                </ListItem>
            </List>
        </SectionLayout>
    )

}

export default Contact
