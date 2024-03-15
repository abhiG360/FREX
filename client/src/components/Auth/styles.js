import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    background: 'linear-gradient(-45deg, #0A1828, #09091e, #415471, #09091e)',
    backgroundSize: '400% 400%',
    borderRadius: 10,
    transition: 'box-shadow 0.3s ease-in-out, background 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
      background: 'linear-gradient(0deg, #415471 0%, #0A1828 100%)',
    },
    animation: '$gradient 15s ease infinite',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    color: 'white',
    backgroundColor: theme.palette.secondary.main,
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: 'linear-gradient(-45deg, #1a2839, #0f4c75, #3282b8)',
      animation: '$glow 1.5s ease-in-out infinite',
      zIndex: -1,
    },
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
    color: '#178582',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& .MuiInputLabel-root': {
      color: 'lightblue',
      fontWeight: 'bold',
    },
    '& .MuiOutlinedInput-root': {
      background: 'linear-gradient(-45deg, #0f2027, #203a43, #2c5364)',
      color: 'white',
      marginBottom: '8px',
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.8)',
      },
      '& input': {
        color: '#f5ebe0',
        fontWeight: 'bold',
      },
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99)',
    color: '#f5f3f4',
    fontWeight: 'bold',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s ease-in-out, color 0.1s ease-in-out',
    '&:hover': {
      background: 'linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)',
      color: 'lightblue',
      boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
    },
  },
  googleButton: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  text: {
    color: 'lightblue',
    fontWeight: 'bold',
    '&:hover': {
      color: '#caffbf',
    },
  },
  signuserbutton: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99)',
    color: '#f5f3f4',
    fontWeight: 'bold',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s ease-in-out, color 0.1s ease-in-out',
    '&:hover': {
      background: '#e0e1dd',
      color: '#15616d', // Font color after hover
      boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
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
