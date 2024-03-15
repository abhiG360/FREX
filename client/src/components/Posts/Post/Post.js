// Post.js
import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import useStyles from "./styles";
import { deletePost, likePost } from '../../../actions/posts';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useHistory } from 'react-router-dom';

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();
  const [likes, setLikes] = useState(post?.likes);

  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedPost = post.likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (post?.likes?.length > 0) {
      return post.likes.find((like) => like === userId)
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  const openPost = () => {
    history.push(`/posts/${post._id}`);
  };

  const handleEditClick = (e) => {
    e.stopPropagation(); // Prevent the click from propagating to the parent (ButtonBase)
    setCurrentId(post._id);
    // Handle the edit button click logic here
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <div className={classes.overlay2}>
        {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (
          <Button className={classes.editButton} size="small" onClick={(e) => handleEditClick(e)}><MoreHorizIcon fontSize="medium" /></Button>
        )}
      </div>
      <div className={classes.clickable} onClick={openPost}>
        <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="inherit" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
          {post.title}
        </Typography>
        <CardContent className={classes.paragraph}>
          <Typography variant="body2" color="inherit" component="p">{post.message}</Typography>
        </CardContent>
      </div>
      <CardActions className={classes.cardActions}>
        <Button className={`${classes.likeButton} ${hasLikedPost ? 'liked' : ''}`} size="small" disabled={!user?.result} onClick={handleLike}>
          <Likes />
        </Button>
        {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (
          <Button className={classes.iconButton} size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
