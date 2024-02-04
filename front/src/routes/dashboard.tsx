import { useEffect, useState } from "react";
import config from "../config.json";
import axios from "axios";
import Mapa from '../js/Mapa';
import PortalLayout from '../layout/PortalLayout';

const Dashboard = () => {
  const [parqueaderos, setParqueaderos] = useState([]);

  const fetchParqueaderos = async () => {
    const res = await axios.get(config.apiUrl);
    setParqueaderos(res.data);
  };

  useEffect(() => {
    fetchParqueaderos();
  }, []);

  return (
    <PortalLayout>
      <h1>Busquedad de parqueaderos</h1>
      <div>
        <Mapa posts={parqueaderos} />
      </div>
    </PortalLayout>
  );
};

export default Dashboard;
