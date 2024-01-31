import { useEffect, useState } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import config from "../../config.json";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button,
} from 'reactstrap';
//import './Posts.css';
import Mapa from '../../js/Mapa';

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get(config.apiUrl);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (post) => {
    setPosts(posts.filter((p) => p._id !== post._id));
    await axios.delete(`${config.apiUrl}/${post._id}`);
  };

  return (
    <div className="posts">
      <div className="container">
      <Link to="/Dashboard">
          <Button color="primary">Regresar</Button>
        </Link>
        <button onClick={() => navigate("/post/new")} className="btn btn-primary mb-4">
          nuevo parqueadero
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>latitud</th>
              <th>longitud</th>
              <th>puestos</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td> {post.title} </td>
                <td> {post.content} </td>
                <td> {post.latitud} </td>
                <td> {post.longitud} </td>
                <td> {post.puestos} </td>
                <td>
                  <button
                    onClick={() => navigate(`/post/${post._id}`)}
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(post)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        
      </div>
      <Mapa  posts={posts} />
    </div>
  );
};

export default Posts;
