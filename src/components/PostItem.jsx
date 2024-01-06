import React from "react";
import { Link } from "react-router-dom";

export default function PostItem({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div>
        <div>
          {post.id}.{post.title}
        </div>
        <div>{post.body}</div>
      </div>
    </Link>
  );
}
