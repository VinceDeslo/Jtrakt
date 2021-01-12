import React from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { useNavbarStyles } from '../styles/navbar-styles';

function Navbar() {

    const style = useNavbarStyles();

    return (
        <div className={style.root}>
            <AppBar 
            className={style.navBar} 
            position="fixed">
            <Toolbar>
                <Avatar 
                    className={style.logo} 
                    src={process.env.PUBLIC_URL + "/favicon.ico"}
                />
                <Typography 
                    className={style.companyName} 
                    variant="h5">
                    Jtrakt
                </Typography>
                <Button 
                    className={style.authButton}
                    variant="outlined"
                >Login</Button>
            </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;