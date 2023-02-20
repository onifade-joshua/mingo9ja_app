import React from "react";
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";

const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" width={300}>
                <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
                <AvatarGroup max={5}>
                    <Avatar alt="Joy Dele" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmfQgdsbH1qYF6-dScZoNXWfgH7B02WmlOw&usqp=CAU" />
                    <Avatar alt="Travis Alabi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmfQgdsbH1qYF6-dScZoNXWfgH7B02WmlOw&usqp=CAU" />
                    <Avatar alt="Cindy Oyedepo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmfQgdsbH1qYF6-dScZoNXWfgH7B02WmlOw&usqp=CAU" />
                    <Avatar alt="John Damilare" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmfQgdsbH1qYF6-dScZoNXWfgH7B02WmlOw&usqp=CAU" />
                    <Avatar alt="Vera Oyedepo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmfQgdsbH1qYF6-dScZoNXWfgH7B02WmlOw&usqp=CAU" />
                    <Avatar alt="Crawford Mill" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmfQgdsbH1qYF6-dScZoNXWfgH7B02WmlOw&usqp=CAU" />
                    <Avatar alt="Crawford John" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmfQgdsbH1qYF6-dScZoNXWfgH7B02WmlOw&usqp=CAU" />

                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmfQgdsbH1qYF6-dScZoNXWfgH7B02WmlOw&usqp=CAU"
                            alt="Josh"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmfQgdsbH1qYF6-dScZoNXWfgH7B02WmlOw&usqp=CAU"
                            alt="Josh"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmfQgdsbH1qYF6-dScZoNXWfgH7B02WmlOw&usqp=CAU"
                            alt="Josh"
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant="h6" fontWeight={100} mt={2}>Latest Conservation</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmfQgdsbH1qYF6-dScZoNXWfgH7B02WmlOw&usqp=CAU" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmfQgdsbH1qYF6-dScZoNXWfgH7B02WmlOw&usqp=CAU" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmfQgdsbH1qYF6-dScZoNXWfgH7B02WmlOw&usqp=CAU" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}

export default Rightbar;