import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios";
import config from "../../config.json";
import Mapa from '../../js/Mapa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../../assets/Posts.css";

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPuestos, setSelectedPuestos] = useState();
  const [selectedDate, setSelectedDate] = useState(null); // Estado para la fecha seleccionada
  const [selectedParkingSpot, setSelectedParkingSpot] = useState(null); // Estado para el puesto de estacionamiento seleccionado
  const [avail, setAvail] = useState(true)
  const [parkingSpotStates, setParkingSpotStates] = useState([]);


  const fetchPosts = async () => {
    const userId = '...';

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

  const handleState = (index) => {
    const updatedStates = [...parkingSpotStates];
    updatedStates[index] = !updatedStates[index];
    setParkingSpotStates(updatedStates);
  };

  const handleReservaClick = async (post) => {
    setSelectedPost(post);
    setSelectedPuestos(post.puestos); // Establece el número de puestos para el parqueadero seleccionado
    toggleModal();
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleParkingSpotClick = (index) => {
    setSelectedParkingSpot(index); // Establece el puesto de estacionamiento seleccionado
  };

  const handleDateChange = (date) => { // Función para manejar el cambio de fecha
    setSelectedDate(date);
  };

  const handleReservation = () => {
    
    const updatedPosts = posts.map((post, index) => {
      if (index === selectedPostIndex) {
        const updatedPuestos = post.puestos.map((puesto, i) => {
          if (i === selectedParkingSpot) {
            return 'ocupado';
          } else {
            return puesto;
          }
        });
        return { ...post, puestos: updatedPuestos };
      } else {
        return post;
      }
    });
    setPosts(updatedPosts);
    toggleModal();
  };

  return (
    <div className="posts">
      <Mapa posts={posts} />
      <div className="container">
        <h2>Crear Parqueaderos</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Latitud</th>
              <th>Longitud</th>
              <th>Puestos</th>
              <th>Actualizacion</th>
              <th>Eliminacion</th>
              <th>Reserva</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td> {post.title} </td>
                <td> {post.content} </td>
                <td> {post.latitud} </td>
                <td> {post.longitud} </td>
                <td> {post.puestos} </td> {/* Muestra directamente el número de puestos */}
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
                <td>
                  <Button onClick={() => handleReservaClick(post)}>Puestos</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/Dashboard">
          <Button color="primary">Regresar</Button>
        </Link>
        <button onClick={() => navigate("/post/new")} className="btn btn-primary mb-4">
          Nuevo parqueadero
        </button>
      </div>

      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Puestos del Parqueadero</ModalHeader>
        <ModalBody>
          <h2>Estado de los Puestos:</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {selectedPuestos && Array.from({ length: selectedPuestos }).map((_, index) => (
              <div key={index} style={{ marginRight: '20px', marginBottom: '20px' }}>
                
                <img
                  src="https://png.pngtree.com/png-clipart/20190116/ourlarge/pngtree-blue-car-high-end-car-beautiful-car-imported-car-png-image_405751.jpg" // URL de la imagen externa
                  alt={`Puesto ${index + 1}`}
                  style={{ width: '100px', height: '100px', marginBottom: '5px', cursor: 'pointer' }} // Estilos opcionales
                  onClick={() => handleParkingSpotClick(index)} // Manejar el clic en el puesto de estacionamiento
                />


                <button onClick={handleState}>
                  {avail ? 'Disponible' : 'Ocupado'}
                </button>
              </div>
            ))}
          </div>
          <div>
            <h3>Selecciona una fecha y hora:</h3>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
            <button>seleccionar fecha y hora</button>
          </div>
          <Link to="/Reservas">
                  <Button >Reserva</Button>
              </Link>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Posts;
