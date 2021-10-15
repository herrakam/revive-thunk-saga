import React from "react";
import posts from "../module/posts";

function PostList({ posts }) {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li id={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default PostList;
