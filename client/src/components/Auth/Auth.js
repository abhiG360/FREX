import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AUTH } from '../../constants/actionTypes';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Icon from './icon';
import useStyles from './styles';
import Input from './Input';
import { signin, signup } from '../../actions/auth';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
const Auth = () => {
    
  const classes = useStyles();
  const history = useHistory();
  const [showPassword,setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch=useDispatch();
  const [formData,setFormData]=useState(initialState);


  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, history));   //we are dispatching an action 'signup'
    } else {
      dispatch(signin(formData, history));
    }

  }
  

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const googleSuccess = async (res) => {
    const token = res?.credential;
    const result = jwt_decode(token); 
    // console.log(result);
    // console.log(token);
    try{

      dispatch({type:AUTH,data:{result,token}});

      history.push('/'); //after authenticating I am sending the user to  home page
    }catch(error){
      console.log(error);
    }
  }




  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.text}>{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }  
          </Button>
          <GoogleLogin 
              onSuccess={googleSuccess}
              onError={(error) => {
                console.log(error);
                console.log('Login Failed');
              }}
              cookiePolicy='single_host_origin'
                
            />
          <Grid container justifyContent="center">
            <Grid item>
            <Button onClick={switchMode}  fullWidth variant='contained' className={classes.signuserbutton}>
            { isSignup ? 'Been here before? Sign In ' : "First time here? Sign Up" }
            </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
