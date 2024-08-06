// src/NavBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h5" style={{ flexGrow: 1, marginLeft: 200 }}>
                    Task Assignment App
                </Typography>
                <Button color="inherit" component={Link} to="/users">
                    Users
                </Button>
                <Button color="inherit" component={Link} to="/tasks">
                    Tasks
                </Button>
                <Button color="inherit" component={Link} to="/signin">
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
