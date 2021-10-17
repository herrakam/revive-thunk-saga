import React from "react";
import { Link } from "react-router-dom";

function PostList({ posts }) {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li id={post.id}>
            <Link to={`/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostList;
