// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import App from './App.jsx';
import Home from './Home.jsx';
import Cars from './Cars.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Gallery from './Gallery.jsx';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="cars" element={<Cars />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="gallery" element={<Gallery />} />
    </Route>
  ),
  {
    basename: '/Cars_Showroom', 
  }
);

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
