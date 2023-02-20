import React from "react";
import { AppBar, Box, styled, Toolbar, Typography, InputBase, Avatar, Menu, MenuItem } from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
import { Chat, Home, Notifications, PersonAdd } from "@mui/icons-material";
import Badge from '@mui/material/Badge';
import { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";






const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "30px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    }
}));


const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "5px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    }
}));

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                <span className="company-name"><span className="product-name">Mingo</span>9<span className="product-name-2">ja</span></span>
                </Typography>
                <img className='logo' src={Logo} sx= {{ display: { xs: "block", sm: "none" } }} />
                <Search>
                    <InputBase placeholder="Search" />
                </Search>
                <Icons>
                    <Badge>
                        <Home />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <PersonAdd />
                    </Badge>
                    <Badge badgeContent={6} color="error">
                        <Chat />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>

                    <Avatar sx={{ width: 30, height: 30 }} src="https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" onClick={e => setOpen(true)} />

                </Icons>
                <UserBox onClick={e => setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }} src="https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
                    <Typography variant="span">Onifade</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >Chat</MenuItem>
                <MenuItem >Edit account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;