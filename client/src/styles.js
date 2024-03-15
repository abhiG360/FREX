import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A1828',
    
    //
  },
  heading1: {
    color: '#BFA181',
    fontFamily: '"Russo One", sans-serif',
    fontSize:'50px',
  },
  heading2: {
    color: '#178582',
    fontFamily: '"Russo One", sans-serif',
    fontSize: '20px',
    fontWeight: 'bold', // Updated property to fontWeight
    textAlign: 'right', // Added textAlign property
    
},

  image: {
    //justifyContent: 'flex-start',
    width: '80px', // Adjust the image size
    height: '80px', // Adjust the image size
    borderRadius: '50%',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Increase the box shadow for emphasis
    transition: 'transform 0.3s ease-in-out', // Add a transition for a smooth effect
    '&:hover': {
      transform: 'scale(1.1)', // Increase the scale on hover for a zoom effect
    },
},
  [theme.breakpoints.down('sm')]:{
    mainContainer: {
      flexDirection:"column-reverse"
    }
  }
}));