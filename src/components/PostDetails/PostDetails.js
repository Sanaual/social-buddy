import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const PostDetails = () => {
  const { postId } = useParams();
  const [posts, setPosts] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  const [comments, setComments] = useState({});
  useEffect(() => {
    let temp = parseInt(postId);
    let commentsId;
    if (temp == 1) {
      commentsId = 1;
    }
    else {
      console.log(temp);
      let value = temp - 1;
      console.log(value);
      commentsId = temp + (4 * value);
    }
    console.log(commentsId);

    for (let i = commentsId; i < commentsId + 5; i++) {
      console.log(i);
      let url = `https://jsonplaceholder.typicode.com/comments/${i}`;
      fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))

    }
  }, [])

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  // export default function MediaCard() {
  const classes = useStyles();


  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          {/* <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {posts.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {posts.body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <div style=
        {{
          border: '2px solid #6B8E23',
          margin: '20px 5px',
          borderRadius: '10px',
          padding: '20px'
        }}>

        <h2>Name:{comments.name}</h2>
        <p>Email:{comments.email}</p>
        <p>Body:{comments.body}</p>

      </div>

    </div>


  );
};

export default PostDetails;