import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import config from "../../src/config.json";
import "../routes/parqueadero.css"

const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    content: "",
    longitud: "",
    latitud: "",
  });

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      try {
        const { data } = await axios.get(`${config.apiUrl}/${id}`);
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id === "new") {
        await axios.post(config.apiUrl, post);
      } else {
        await axios.put(`${config.apiUrl}/${id}`, post);
      }

      navigate("/");
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  return (
    <div className="post__wrapper">
      <div className="container">
        <form className="post" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre..."
            name="title"
            value={post.title}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Descripcion..."
            name="content"
            value={post.content}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Latitud..."
            name="latitud"
            value={post.latitud}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Longitud..."
            name="longitud"
            value={post.longitud}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            {id === "new" ? "Agregar" : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
