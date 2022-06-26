import React, {useEffect, useRef, useState} from 'react'
import PostService from '../API/PostService';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/buttons/MyButton';
import Loader from '../components/UI/Loaders/Loader';
import MyModal from '../components/UI/MyModals/MyModal';
import { useFetching } from '../hooks/useFetching';
import { useObserver } from '../hooks/useObserver';
import { usePosts } from '../hooks/usePosts';
import '../styles/app.css'
import { getPageCount } from '../utils/pages';

function Posts() {
  const [posts, setPosts] = useState([]); 
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async()=>{
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, ()=>{
    setPage(page + 1); 
  });

  const sortedAndSearchingPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(()=>{
    fetchPosts();
  }, [page]);

  const createPost = (newPost) =>{
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className='App'>
      <MyButton style={{marginTop: '30px'}} onClick={()=> setModal(true)}>Create new post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && 
        <h1>Error: {postError}</h1>
      }
      {isPostsLoading && <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader /></div>}
      <PostList remove={removePost} posts={sortedAndSearchingPosts} title={'Posts'} />
      <div ref={lastElement} style={{height:"20px"}}></div>
    </div>
  );
}

export default Posts;
