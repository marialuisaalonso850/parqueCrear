
import React, { useState } from 'react';
import '../assets/puestos.css'; 

const Puestos = () => {

  const [asientosOcupados, setAsientosOcupados] = useState(Array(10).fill(false));

  const handleClick = (index) => {
    const nuevosAsientosOcupados = [...asientosOcupados];
    nuevosAsientosOcupados[index] = !nuevosAsientosOcupados[index];
    setAsientosOcupados(nuevosAsientosOcupados);
  };

  return (
    <div className="container">
      <div className="element-container">
        <div className="bus">
          <div className="bus-container">
            {/* Primer grupo de tarjetas */}
            <div className="card-bus">
              {asientosOcupados.slice(0, 4).map((ocupado, index) => (
                <div
                  key={index}
                  className={`card ${ocupado ? 'ocupado' : ''}`}
                  onClick={() => handleClick(index)}
                >
                  {ocupado ? 'Ocupado' : '0'}
                </div>
              ))}
            </div>

            {/* Segundo grupo de tarjetas */}
            <div className="card-bus">
              {asientosOcupados.slice(4).map((ocupado, index) => (
                <div
                  key={index + 4}
                  className={`card ${ocupado ? 'ocupado' : ''}`}
                  onClick={() => handleClick(index + 4)}
                >
                  {ocupado ? 'Ocupado' : '0'}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button className="button">Reservar Asiento</button>
    </div>
  );
};

export default Puestos;
