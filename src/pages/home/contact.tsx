import SectionLayout from "../../utils/sectionLayout"
import Typography from "@mui/joy/Typography"
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import Phone from '@mui/icons-material/Phone';

const Contact = () => {

    return (
        <SectionLayout odd name='contact'>
            <Typography level='h1'>Let's get in touch!</Typography>
            <List>
                <ListItem>
                    <ListItemDecorator><EmailOutlined /></ListItemDecorator>
                    <ListItemContent>karunikatrip@gmail.com</ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemDecorator><Phone /></ListItemDecorator>
                    <ListItemContent>+48 501 503 727</ListItemContent>
                </ListItem>
            </List>
        </SectionLayout>
    )

}

export default Contact
