import { useMemo } from "react";

export const useSostedPosts = (posts, sort) => {
    const sortedPosts = useMemo(()=>{
        if(sort){
          return [...posts].sort((a,b)=>a[sort].localeCompare(b[sort]));
        }
        return posts;
      }, [sort, posts]);

      return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSostedPosts(posts, sort);

    const sortedAndSearchingPosts = useMemo(()=>{
        return [...sortedPosts].filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
      }, [query, sortedPosts]);

      return sortedAndSearchingPosts;
}