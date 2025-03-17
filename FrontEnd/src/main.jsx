import React from 'react';
import HomePage from './pages/HomePage';
import {RouterProvider, createHashRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './styles/main.css';
import AuthProvider from './providers/AuthProvider';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const router= createHashRouter([
  {path: "/", element: <HomePage/>},
  {path: "/loginPage", element: <LoginPage/>},
  {path:"/registerPage", element: <RegisterPage/>}
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>
);
