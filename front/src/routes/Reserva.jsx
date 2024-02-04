import puestos from "../puestos.json";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
//import './Post.css';
const Reserva = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [reserva, setReserva] = useState({
    nombre: "",
      telefono: 0,
      vehiculo: "",
      año: 0,
      fecha: "",
      hora: "",
  });
  const [gmail, setGmail] = useState("");

  useEffect(() => {
    if (!id) return;
    const fetchReserva = async () => {
      const { data } = await axios.get(`${puestos.apiUrl}/${id}`);
      setReserva(data);
    };
    fetchReserva();
  }, [id]);

  const handleChange = (e) => {
    const reservaClone = { ...reserva };
    reservaClone[e.target.name] = e.target.value;
    setReserva(reservaClone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id === "new") {
      await axios.post(puestos.apiUrl, reserva);
      return navigate("/Reservas");
    } else {
      await axios.put(`${puestos.apiUrl}/${id}`, reserva);
      return navigate("/Reservas");
    }
  };
  return (
    <div className="post__wrapper">
      <div className="container">
        <form className="post">
          <input
            type="text"
            placeholder="Nombre..."
            name="nombre"
            value={reserva.nombre}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="telefono..."
            name="telefono"
            value={reserva.telefono}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="vehiculo..."
            name="vehiculo"
            value={reserva.vehiculo}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="año..."
            name="año"
            value={reserva.año}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="fecha..."
            name="fecha"
            value={reserva.fecha}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Hora..."
            name="hora"
            value={reserva.hora}
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

export default Reserva;
