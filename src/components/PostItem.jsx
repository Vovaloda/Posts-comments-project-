import React from 'react'
import { useNavigate } from 'react-router-dom';
import MyButton from './UI/buttons/MyButton';

const PostItem = (props) => {

    const router = useNavigate();
    
    return(
        <div className="post">
            <div className="postContent">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="postBtns">
                <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Open</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
            </div>
      </div>
    );
}

export default PostItem;