import axios from "axios";
import { React, useEffect, useState } from "react";
import Fetching from "../API/Fetching";
import PostItem from "../components/PostItem";
import { useParams } from "react-router-dom";

export default function Blogpage() {
  const [posts, setPosts] = useState([]);
  const fetch = async () => {
    const response = await Fetching();
    setPosts(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      {posts.map((p) => (
        <PostItem post={p} key={p} />
      ))}
    </div>
  );
}
