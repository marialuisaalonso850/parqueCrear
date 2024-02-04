import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from 'reactstrap';
import axios from "axios";
import config from "../../config.json";
import Mapa from '../../js/Mapa';

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    // Suponiendo que tienes una forma de obtener el ID del usuario actual después de la autenticación
    const userId = '...'; // Reemplaza con el ID de usuario real

    try {
      const res = await axios.get(`${config.apiUrl}?userId=${userId}`);
      setPosts(res.data);
    } catch (error) {
      console.error("Error al obtener los mensajes:", error);
    }
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
          Nuevo parqueadero
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Latitud</th>
              <th>Longitud</th>
              <th>Puestos</th>
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
                    Actualizar
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(post)}
                    className="btn btn-danger"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Mapa posts={posts} />
    </div>
  );
};

export default Posts;
