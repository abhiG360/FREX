import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 10,
    margin: '16px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6px 20px', // Adjusted padding for less height
    background: 'linear-gradient(-45deg, #424874,#04364A)',
    backgroundSize: '400% 400%',
    // boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
    transition: 'box-shadow 0.3s ease-in-out, background 0.3s ease-in-out',
    animation: '$gradient 15s ease infinite',
    '&:hover': {
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)', // Box shadow appears on hover
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '10px 10px', // Reduced padding for smaller screens
    },
  },
  heading: {
    fontFamily: '"Russo One", sans-serif',
    fontSize:'50px',
    color: '#BFA181',
    textDecoration: 'none',
    //fontSize: '2em',
    fontWeight: 300,
    // heading1: {
    //     color: '#BFA181',
    //     fontFamily: '"Russo One", sans-serif',
    //     fontSize:'50px',
    //   },
  },
  image: {
     marginLeft: '10px',
    //  marginTop: '5px',
    width: '70px', // Adjust the image size
    height: '70px', // Adjust the image size
    borderRadius: '50%',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Increase the box shadow for emphasis
    transition: 'transform 0.3s ease-in-out', // Add a transition for a smooth effect
    '&:hover': {
      transform: 'scale(1.1)', // Increase the scale on hover for a zoom effect
    },
    
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '350px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },

  signuserbutton: {
    height: '40px',
    background: 'linear-gradient(-45deg, #aa4b6b, #6b6b83, #3b8d99)',
    color: '#f5f3f4', // Font color before hover
    animation: '$fastGradient 5s ease infinite, $glow 1s ease-in-out infinite',
    fontWeight: 'bold',
    borderRadius: '5px',
    marginTop: '10px',
    boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
    transition: 'color 0.3s ease-in-out, background 0.3s ease-in-out',
    '&:hover': {
      background: '#e0e1dd',
      color: '#15616d', // Font color after hover
      boxShadow: '0 0 20px rgba(255, 255, 255, 1)',
    },
  },

  logout: {
    height:'40px',
    margin: theme.spacing(3, 0, 2),
    alignItems: 'center',
    background: '#78244c',
    color: '#edddd4',
    fontWeight: 'bold',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s ease-in-out, color 0.1s ease-in-out',
    '&:hover': {
      background: '#edddd4',
      color: '#78244c',
      boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
    },
  },
  userName: {
    display: 'flex',
    marginTop:'6px',
    color: '#edddd4',
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
  },
  brandContainer: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    flexDirection: 'row-reverse', // Change this line
    cursor: 'pointer',
  },
  purple: {
    marginTop:'6px',
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },

  '@keyframes fastGradient': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '100%': {
      backgroundPosition: '100% 50%',
    },
  },

  '@keyframes gradient': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
  '@keyframes glow': {
    '0%': {
      boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
    },
    '50%': {
      boxShadow: '0 0 12px rgba(255, 255, 255, 0.9)',
    },
    '100%': {
      boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
    },
  },
}));