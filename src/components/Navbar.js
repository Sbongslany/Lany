import React from 'react'
import { 
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box

 } from "@material-ui/core"; 
import {
    ArrowBack,
    AssignmentInd,
    Home,
    App,
    ContactMail
} from '@material-ui/icons'

const Navbar = () => {
    return (
        <Box component="nav">
            <AppBar position="static" style={{background: "#222"}}>
                <Toolbar >
                    <IconButton>
                        <ArrowBack style={{color: "tomato"}} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
