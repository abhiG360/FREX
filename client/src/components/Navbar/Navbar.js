import React, { useState, useEffect } from 'react';
import { LOGOUT } from '../../constants/actionTypes';
import { useDispatch } from 'react-redux';
import { AppBar, Avatar, Button, Typography,Toolbar } from "@material-ui/core";
import frex from  '../../images/frex.png'; 
import { useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode'


// import {Link} from 'react-router-dom';
// note I haven't used link which was during  
import useStyles from './styles';
// import jwtDecode from 'jwt-decode';

const Navbar = () => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    //check if user is authenticated or not
    // console.log(user);

    const logout = () => {
        dispatch({ type: LOGOUT });
    
        history.push('/auth');
    
        setUser(null);
      };


    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);
      
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
          }
      

        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);

    const handleNavigation = () => {
        history.push("/");
    };

    // const handleAuthentication = () => {
    //     history.push("/auth");
    // };
    return (
            <AppBar className={classes.appBar} position="static" color="inherit">
                <div className={classes.brandContainer} >
                    <Typography onClick={handleNavigation}  className={classes.heading} variant="h1" align="center">
                        Freely Express
                    </Typography>
                    <img  onClick={handleNavigation} className={classes.image} src={frex} alt='frex_icon' />
                </div>
                <Toolbar className={classes.toolbar}>
                    {user?.result ?(
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                            {/* style={{ backgroundColor: '#edb5bf', color: 'white' }} */}
                        </div>
                    ) :(
                        location.pathname !== "/auth" && <Button className={classes.signuserbutton} onClick={() => history.push("/auth")} variant="contained" color="primary">Sign In</Button>
                    )
                }
                </Toolbar>
            </AppBar>
        
    );
}

export default Navbar;
