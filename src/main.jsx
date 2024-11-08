// src/main.js or src/index.js (entry file)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        path: '', 
        element: <Home />, 
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'contact', 
        element: <Contact />, 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);
