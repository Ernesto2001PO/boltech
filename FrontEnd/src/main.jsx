import React from 'react';
import HomePage from './pages/HomePage';
import {RouterProvider, createHashRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './styles/main.css';
import AuthProvider from './providers/AuthProvider';
const router= createHashRouter([
  {path: "/", element: <HomePage/>}
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>
);
