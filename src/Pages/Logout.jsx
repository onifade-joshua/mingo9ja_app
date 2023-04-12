import React, { useState } from 'react';
import { Alert } from 'bootstrap';
import { useAuth } from '../contexts/AuthStateListener';
import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { HandymanOutlined } from '@mui/icons-material';
import { Button } from 'react-bootstrap';

const Logout = () => {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const logUserOut = useNavigate();

  async function handleLogout() {
    setError(" ")

    try {
      await logout()
      logUserOut("/login")
    } catch {
      setError(`Failed to sign out!`)
    }
  }
  return (
    <>
      {/* {error && <Alert variant="danger" className="alert text-center bg-white border-0">{error}</Alert>} */}
      <div>

      {/* {error && <Alert variant="danger" className="alert text-center bg-white border-0">{error}</Alert>} */}

        <List>
          <ListItem disablePadding>
            <ListItemButton components="a" href="#logout" onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItemButton>
          </ListItem>
        </List>
        {/* <Button varaint="link" onClick={handleLogout}></Button> */}
      </div>
    </>
  );
};

export default Logout;