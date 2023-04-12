import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import { Brightness2, Error, Logout, Mail, Pages, PeopleAlt, ReduceCapacity, Settings } from "@mui/icons-material";
import Logout from "../../Pages/Logout";
import HomeIcon from '@mui/icons-material/Home';
// import { Button } from "bootstrap";





const Sidebar = ({ mode, setMode }) => {
    return (
        <Box position="sticky" flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton components="a" href="#home">
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton components="a" href="#mail">
                            <ListItemIcon>
                                <Mail />
                            </ListItemIcon>
                            <ListItemText primary="Mail" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton components="a" href="#pages">
                            <ListItemIcon>
                                <Pages />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton components="a" href="#groups">
                            <ListItemIcon>
                                <ReduceCapacity />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton components="a" href="#friends">
                            <ListItemIcon>
                                <PeopleAlt />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton components="a" href="#settings">
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton components="a" href="#about">
                            <ListItemIcon>
                                <Error />
                            </ListItemIcon>
                            <ListItemText primary="About" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton components="a" href="#theme">
                            <ListItemIcon>
                                <Brightness2 />
                            </ListItemIcon>
                            <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
                        </ListItemButton>
                    </ListItem>

                    {/* <ListItem disablePadding>
                        <ListItemButton components={<Logout/>} href="#about">
                            <ListItemIcon>
                                <Logout /> 
                            </ListItemIcon>
                            <ListItemText primary="Log out" />
                        </ListItemButton>
                    </ListItem> */}
                    <Logout />

                </List>
              
            </Box>
            
        </Box>
    );
}

export default Sidebar;