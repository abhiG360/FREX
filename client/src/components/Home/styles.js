import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    background: 'linear-gradient(-45deg, #0A1828, #09091e, #415471, #09091e)',
    backgroundSize: '400% 400%',
    transition: 'box-shadow 0.3s ease-in-out, background 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
      background: 'linear-gradient(0deg, #415471 0%, #0A1828 100%)',
    },
    animation: '$gradient 15s ease infinite',
  },
  pagination: {
    borderRadius: '4px', // Adjusted border-radius
    marginTop: '1rem',
    padding: '6px', // Adjusted padding
    background: 'linear-gradient(-45deg, #caefd7, #f5bfd7, #abc9e9)',
    backgroundSize: '400% 400%',
    animation: '$fastGradient 10s ease infinite',
    textAlign: 'center',
    display: 'inline-block', // Centered and inline-block
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  searchButton: {
    height: '32px',
    background: 'linear-gradient(-45deg, #aa4b6b, #6b6b83, #3b8d99)',
    color: '#f5f3f4', // Font color before hover
    fontWeight: 'bold',
    borderRadius: '5px',
    marginTop: '10px',
    boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
    transition: 'color 0.3s ease-in-out, background 0.3s ease-in-out',
    '&:hover': {
      background: '#e0e1dd',
      color: '#15616d', // Font color after hover
      boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
    },
    animation: '$gradient 15s ease infinite',
  },

  textField: {
    background: 'linear-gradient(-45deg, #0f2027, #203a43, #2c5364)',
    color: 'black',
    marginBottom: '8px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.5)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.8)',
      },
    },
  },
  searchTextField: {
    background: 'linear-gradient(-45deg, #0f2027, #203a43, #2c5364)',
    color: 'white', // Font color for the input text
    marginBottom: '8px',
    '& .MuiInputLabel-root': {
      color: 'lightblue', // Color for the label
      fontWeight: 'bold', // Bold label
    },
    '& .MuiOutlinedInput-root': {
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

  tagsTextField: {
    borderColor: 'rgba(255, 255, 255, 0.8)',
    background: 'linear-gradient(-45deg, #0f2027, #203a43, #2c5364)',
    color: '#4CAF50', // Modern green for the tags text field
    marginBottom: '8px',
    '& .MuiInputLabel-root': {
      color: '#2a9d8f', // Color for the label
      fontWeight: 'bold', // Bold label
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.8)',
      },
      '& input': {
        color: '#caffbf', // Set the text color for the input
        fontWeight: 'bold', // Bold input text
      },
    },
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
