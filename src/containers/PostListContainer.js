import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../components/PostList";
import { getPosts } from "../module/posts";
function PostListContainer() {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  if (loading) return <div>로딩중</div>;
  if (!data) return null;
  if (error) return <div>에러!!</div>;

  return <PostList posts={data}></PostList>;
}

export default PostListContainer;
