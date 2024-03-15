// styles.js
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    background: 'linear-gradient(-45deg, #0A1828, #09091e, #415471, #09091e)',
    backgroundSize: '400% 400%',
    transition: 'box-shadow 0.3s ease-in-out, background 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
      background: 'linear-gradient(0deg, #415471 0%, #0A1828 100%)',
    },
    animation: '$gradient 15s ease infinite',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: '#BFA181',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: '#BFA181',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    color: '#caffbf',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
    color: '#BFA181',
    fontWeight: 'bold',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
  clickable: {
    cursor: 'pointer',
  },
  postContainer: {
    '&:hover': {
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
      background: 'linear-gradient(0deg, #415471 0%, #0A1828 100%)',
    },
  },
  paragraph: {
    color: '#178582',
    fontSize: '16px',
    lineHeight: '1',
    margin: '10px 0',
  },
  glow: {
    '&:hover': {
      filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))',
    },
  },
  iconButton: { 
    color: '#78244c', // Set the original color for the delete button
    '&:hover': {
      color: 'darkred', // Set the glow color for the delete button on hover
      filter: 'drop-shadow(0 0 8px rgba(255, 0, 0, 0.8))', // Add a glow effect
    },
  },
  editButton: {
    color: 'lightblue', // Set the original color for the edit button
    '&:hover': {
      color: 'white', // Set the color for the edit button on hover
      filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))', // Add a glow effect
    },
  },
  likeButton: {
    color: '#edb5bf', // Set the original color for the like button
    '&:hover': {
      color: 'lightblue', // Set the glow color for the like button on hover
      filter: 'drop-shadow(0 0 8px rgba(173, 216, 230, 0.8))', // Add a glow effect
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
}));
