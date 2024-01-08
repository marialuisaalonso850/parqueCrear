import React from "react";
import Posts from "./pages/posts/posts";
import { Routes, Route } from "react-router-dom";
import Post from "./pages/post/post";
import { PostInfo } from "./pages/posts/postsInfo";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/:id/info" element={<PostInfo />} />
      </Routes>
    </>
  );
};

export default App;