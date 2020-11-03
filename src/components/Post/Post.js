import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const Post = (props) => {
    const { id, title, body } = props.post;
    const postStyle = {
        border: "2px solid gray",
        marginBottom: "25px",
        padding: "20px",
        textAlign: "center"
    }

    return (
        <div style={postStyle}>
            <h2>Title:{title}</h2>
            <p> <Link to={`/post/${id}`}>
                <Button variant="contained" color="primary" disableElevation>
                    Show Details of Id : {id}
                </Button>

            </Link></p>

        </div>

    );
};

export default Post;