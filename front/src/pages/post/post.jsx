import config from "../../config.json";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
//import './Post.css';
const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "", 
    content: "",
    longitud: "",
    latitud: "",
    puestos: "",
  });

  useEffect(() => {
    if (!id) return;
    const fetchPost = async () => {
      const { data } = await axios.get(`${config.apiUrl}/${id}`);
      setPost(data);
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const postClone = { ...post };
    postClone[e.target.name] = e.target.value;
    setPost(postClone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id === "new") {
      await axios.post(config.apiUrl, post);
      return navigate("/Posts");
    } else {
      await axios.put(`${config.apiUrl}/${id}`, post);
      return navigate("/Posts");
    }
  };
  return (
    <div className="post__wrapper">
      <div className="container">
        <form className="post">
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
            placeholder="latitud..."
            name="latitud"
            value={post.latitud}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="longitud..."
            name="longitud"
            value={post.longitud}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="puestos..."
            name="puestos"
            value={post.puestos}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className="btn btn-primary">
            {id === "new" ? "agregar" : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
