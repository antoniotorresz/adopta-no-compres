import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Layout from './components/Layout';
import Grid from './components/Grid';
import Contact from './components/Contact';
import About from './components/About';
import Privacy from './components/Privacy';
import reportWebVitals from './reportWebVitals';
import PetDetail from './components/PetDetail';
import BringAPet from './components/BringAPet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Grid />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/pet/:id" element={<PetDetail />} />
          <Route path="/new" element={<BringAPet />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
