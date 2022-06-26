import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loaders/Loader";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {

    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id)=>{
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchComments, isComLoading, comError] = useFetching(async (id)=>{
        const response = await PostService.getCommentsById(id);
        setComments(response.data);
    });

    useEffect(()=>{
        fetchPostById(params.id);
        fetchComments(params.id);
    },[]);

    return (
        <div>
            <h1>Is open post with id: {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div style={{marginTop: "15px"}}>{post.title}</div>
            }
            <h1 style={{marginTop: "15px"}}>Comments: </h1>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(comm => 
                        <div key={comm.id} style={{marginTop: "15px"}}>
                            <h5>User's nickname: {comm.name}</h5>
                            <div>Comment text: {comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
}

export default PostIdPage;