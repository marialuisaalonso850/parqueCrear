import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

function InfoParqueadero() {
  const [seleccion, setSeleccion] = useState({
    hora: '',
    dia: '',
    fecha: null,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setSeleccion((prevSeleccion) => ({
      ...prevSeleccion,
      [id]: value,
    }));
  };

  const handleDateChange = (fecha) => {
    setSeleccion((prevSeleccion) => ({
      ...prevSeleccion,
      fecha,
    }));
  };

  const handleTimeChange = (hora) => {
    setSeleccion((prevSeleccion) => ({
      ...prevSeleccion,
      hora,
    }));
  };

  const confirmarSeleccion = () => {
    // Puedes realizar acciones adicionales aquí si es necesario
  };

  return (
    <div>
      <h1>Hola</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPj2PewO8FZloY1l0mNSJ3tq_GLPXjSBflg&usqp=CAU"
        alt=""
      />

      <div>
        <label htmlFor="hora">Hora:</label>
        {/* Componente TimePicker integrado */}
        <TimePicker
          id="hora"
          value={seleccion.hora}
          onChange={handleTimeChange}
          disableClock={true} // Desactiva el reloj si quieres solo el input
        />
      </div>
{/* 
      <div>
        <label htmlFor="dia">Día:</label>
        <input
          type="text"
          id="dia"
          value={seleccion.dia}
          onChange={handleInputChange}
        />
      </div> */}

      <div>
        {/* Componente DatePicker integrado */}
        <DatePicker
          selected={seleccion.fecha}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          placeholderText="Seleccionar fecha"
        />
      </div>

      <div>
        {/* Botón para confirmar la selección */}
        <button onClick={confirmarSeleccion}>Confirmar Selección</button>
      </div>

      {seleccion.hora && seleccion.dia && seleccion.fecha && (
        <div>
          {/* Muestra la hora, el día y la fecha después de la confirmación */}
          <p>Hora Seleccionada: {seleccion.hora}</p>
          <p>Día Seleccionado: {seleccion.dia}</p>
          <p>Fecha Seleccionada: {seleccion.fecha.toDateString()}</p>
        </div>
      )}
    </div>
  );
}

export default InfoParqueadero;

