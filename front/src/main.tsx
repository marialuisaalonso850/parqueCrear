import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login';
import Signup from './routes/signup';
import Dashboard from './routes/dashboard';
import ProtectedRoute from './routes/protectedRaute';
import { AuthProvider } from './Autenticacion/AutProvider';
import Home from './routes/Home';
import Perfil from './routes/perfil';
import ContactUs from './routes/contactUs';
import InfoParqueadero from './routes/infoParqueadero';
import Post from './routes/Posts';
import { PostInfo } from './routes/postInfo';
import Posts from './routes/Posts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
 
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/postinfo',
    element: <PostInfo />,
  },
  {
    path: '/Postcar',
    element: <Posts />,
  },
  {
    path: '/Home',
    element: <Home />,
  },
  {
    path: '/Perfil',
    element: <Perfil />,
  },
  {
    path: '/infoParqueadero',
    element: <InfoParqueadero />,
  },
  {
    path: '/ContactUs',
    element: <ContactUs />,
  },
  {
    path: '/parqueadero',
    element: <Post />,
  },
  {
    path: '/',
    element: <Signup />,
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/Dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
