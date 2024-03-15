import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
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
  fastGlow: {
    borderRadius: '4px',
    marginTop: '1rem',
    padding: '6px',
    background: 'linear-gradient(-45deg, #caefd7, #f5bfd7, #abc9e9)',
    backgroundSize: '400% 400%',
    animation: '$fastGradient 5s ease infinite, $glow 1s ease-in-out infinite',
    textAlign: 'center',
    display: 'inline-block',
    transition: 'background 0.3s ease-in-out, color 0.3s ease-in-out',
    '&:hover': {
      background: 'linear-gradient(-45deg, #1a2839, #0f4c75, #3282b8)',
      color: 'lightblue',
      boxShadow: '0 0 12px rgba(255, 255, 255, 0.9)',
    },
  },
  title: {
    fontFamily: 'Gentona, sans-serif', // Set the font family to Gentona and fallback to generic sans-serif
    fontWeight: 'bolder', // Set the font weight to bolder
    background: 'linear-gradient(-45deg, #000000, #333333)', // Full-width black gradient background
    WebkitBackgroundClip: 'text', // Clip text to the background
    color: '#4ca1af', // Set the text color to the original color
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Add text shadow
    display: 'inline-block', // Make sure the box shadow doesn't extend too much
    padding: '0.2em 0', // Add some padding to prevent cutting off shadow
    // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a slight elevation
    transition: 'box-shadow 0.3s ease-in-out', // Smooth transition for the elevation
    '&:hover': {
      // boxShadow: '0 8px 12px rgba(0, 0, 0, 0.3)', // Increase elevation on hover
    },
  },
  
  form: {
    color: '#178582',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& .MuiInputLabel-root': {
      color: 'lightblue', // Color for the label
      fontWeight: 'bold', // Bold label
    },
    '& .MuiOutlinedInput-root': {
      background: 'linear-gradient(-45deg, #0f2027, #203a43, #2c5364)',
      color: 'white', // Font color for the input text
      marginBottom: '8px',
      '& fieldset': {
        borderColor: 'white', // Border color for the textfield when not hovered
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.8)',
      },
      '& input': {
        color: '#f5ebe0', // Set the text color for the input
        fontWeight: 'bold', // Bold input text
      },
    },
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    background: 'linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99)',
    color: '#f5f3f4', // Font color before hover
    fontWeight: 'bold',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s ease-in-out, color 0.1s ease-in-out',
    '&:hover': {
      background: 'linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)',
      color: 'lightblue', // Font color after hover
      boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
    },
  },
  buttonClear: {
    marginBottom: 10,
    background: 'linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b)',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s ease-in-out, color 0.1s ease-in-out',
    '&:hover': {
      background: '#edddd4',
      color: '#78244c',
    },
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    '&:hover': {
      color: '#BFA181',
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
  '@keyframes fastGradient': {
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
