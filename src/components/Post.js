import React from "react";

function Post({ post }) {
  const { title, body } = post;
  return (
    <>
      <h1 className="title">{title}</h1>
      <div className="body">{body}</div>
    </>
  );
}

export default Post;
