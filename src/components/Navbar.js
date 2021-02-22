import React ,{useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { MobilRightMenuSlider } from "@material-ui/core/Drawer";
import { 
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,


 } from "@material-ui/core"; 
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
} from '@material-ui/icons'

import  avatar  from "../avatar.png";

//CSS STYLE
const useStyle = makeStyles(theme=>({
   menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "30rem"
   },
   avatar:{
       display: "block",
       margin: "0.5rem auto",
       width: theme.spacing(13),
       height: theme.spacing(13)
   },
   listItem:{
       color: 'tan'
   }
}))

const menuItems = [
{
    listIcon: <Home />,
    listText: "Home"
},
{
    listIcon: <AssignmentInd />,
    listText: "Resume"
},
{
    listIcon: <Apps />,
    listText: "Portfolio"
},
{
    listIcon: <ContactMail />,
    listText: "Contacts"
},
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = ((slider, open) => () => {
        setState({...state, [slider]: open})
    })

    const classes = useStyle();

    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div">
        <Avatar className={classes.avatar} src={avatar} alt="Xolani Ndebele" />
    <Divider />
    <List>
        {menuItems.map((lsItem, key) => (
            <ListItem button key={key}>
                <ListItemIcon className={classes.listItem}>
                    {lsItem.listIcon}
                </ListItemIcon>
                <ListItemText className={classes.listItem} primary={lsItem.listText}/>
            </ListItem>
        ))}
    
    </List>
    </Box>
    )
    return (
        <>

        <Box component="nav">
            <AppBar position="static" style={{background: "#222"}}>
                <Toolbar >
                    <IconButton>
                        <ArrowBack style={{color: "tomato"}} />
                    </IconButton>
                    <Typography varient="h5" style={{color: "tan"}}>
                        Portfolio
                    </Typography>
                    <MobilRightMenuSlider open={state.right}>
                        {sideList}
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
