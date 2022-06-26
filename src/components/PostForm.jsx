import React, {useState} from 'react';
import MyButton from './UI/buttons/MyButton'
import MyInput from './UI/inputs/MyInput'


const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) =>{
        e.preventDefault();
        const newPost ={
            ...post, id: Date.now(),
        };
        create(newPost);
        setPost({title: '', body: ''});
      }

    return (
        <form>
            <MyInput 
                type="text" 
                placeholder="Post's name"
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}  
            />
            <MyInput 
                type="text" 
                placeholder="Post's description"
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
            />
            <MyButton onClick={addNewPost}>Create</MyButton>
      </form>
    );
}

export default PostForm;