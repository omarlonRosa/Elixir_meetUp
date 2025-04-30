

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Agendamento from './pages/Agendamento';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import IngressoView from "./pages/IngressoView";

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="/agendamento" element={<Agendamento />}/>
        <Route path="/ingresso" element={<IngressoView />} />

      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
