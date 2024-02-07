import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Login from './routes/Login';
import Signup from './routes/Signup';
import Dashboard from './routes/dashboard';
import ProtectedRoute from './routes/protectedRaute';
import { AuthProvider } from './Autenticacion/AutProvider';
import Home from './components/Home';
import Perfil from './routes/Perfil';
import ContactUs from './routes/ContactUs';

import Post from './pages/post/Post';
import Posts from './pages/posts/Posts';
import Puestos from './routes/puestos';
import PostInfo from './pages/posts/PostsInfo';
import Reserva from './routes/Reserva';
import Reservas from './routes/Reservas';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/:id/info" element={<PostInfo />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/reserva/:id" element={<Reserva />} />
          <Route path="/puestos" element={<Puestos />} />
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
