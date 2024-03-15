import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import FileBase from 'react-file-base64';

import { useDispatch, useSelector}  from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import { createPost , updatePost } from '../../actions/posts';

//get current id


const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  });
  const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));
  const classes = useStyles();
  const  dispatch=useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = (e) => {
    // Handle form submission logic
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name },history));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
       clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.fastGlow} elevation={6}>
        <Typography variant="h6" align="center" className={classes.text}>
          Why this anonymous behaviour? Please Sign In
        </Typography>
      </Paper>
    );
  }


  

  return (
    <Paper className={classes.paper} elevation={6}>
      <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
      <Typography className={classes.title} variant="h6">
        {currentId ? `Editing "${post?.title}"` : 'Creating a Feel'}
      </Typography>

        <TextField
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          InputProps={{
            style: {
              color: '#178582', // Turquoise color for text input
            },
          }}
          InputLabelProps={{
            style: {
              color: '#BFA181', // Golden color for label
            },
          }}
        />

        <TextField
          name='message'
          variant='outlined'
          label='Message'
          fullWidth
          multiline minRows={4} 
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          InputProps={{
            style: {
              color: '#C4E0E5', // Turquoise color for text input
              fontWeight: 'bold', // Bold label
            },
          }}
          InputLabelProps={{
            style: {
              color: '#BFA181', // Golden color for label
              
            },
          }}
        />
        <TextField
          name='tags'
          variant='outlined'
          label='Tags (comma seperated)'
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
          InputProps={{
            style: {
              color: '#a8ff78', // Turquoise color for text input
            },
          }}
          InputLabelProps={{
            style: {
              color: '#BFA181', // Golden color for label
            },
          }}
        />

        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant='contained'
          color='inherit'
          size='medium'
          type='submit'
          fullWidth
        >
          Submit
        </Button>
        <Button className={classes.buttonClear} variant='contained' color='primary' size='small' onClick={clear} fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
