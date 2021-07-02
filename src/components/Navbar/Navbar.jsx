import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    MenuItem,
    Menu,
    Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import logo from '../../assets/commerce.png';

const Navbar = () => {
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar >
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={ logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Commerce App
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                    
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
