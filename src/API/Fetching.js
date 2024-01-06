import axios from "axios";
import React from "react";

export default async function Fetching() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    // console.log(response);
    return response;
  };

