import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  pagination: {
    justifyContent: 'space-around',
    height: '40px', // Adjusted height
    width: 'fit-content', // Adjusted width
    '& .MuiPaginationItem-root': {
      background: 'linear-gradient(-45deg, #aa4b6b, #6b6b83, #3b8d99)',
      color: '#f5f3f4',
      fontWeight: 'bold',
      borderRadius: '5px',
      margin: '0 5px',
      transition: 'color 0.3s ease-in-out, background 0.3s ease-in-out',
      '&:hover': {
        background: '#e0e1dd',
        color: '#15616d',
        boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
      },
    },
    '& .Mui-selected': {
      background: '#15616d',
      color: '#f5f3f4',
      boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
    },
    '& .MuiPaginationItem-page:hover': {
      background: 'linear-gradient(to right, #20002c, #cbb4d4)',
      color: '#fff',
    },
  },
}));
