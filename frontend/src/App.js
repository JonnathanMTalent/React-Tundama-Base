import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomeScreen from './Components/screens/HomeScreen';
import Index from '../src/Components/screens/Index.jsx';
import LoginForm from './Components/screens/LoginForm.jsx';
import RegistroForm from './Components/screens/RegistroForm';
import Acercade from './Components/screens/Acercade';
import Servicios from './Components/screens/Servicios';
import ContactForm from './Components/crud/ContactForm';
import CrudApi from './Components/crud/CrudApi';
import AgendaCitas from './Components/screens/AgendaCitas';
import CuentaUsuario from './Components/screens/CuentaUsuario';
import Inicio from './Components/screens/inicio';
import EditarCitas from './Components/screens/EditarCitas';

function App() {
    return (
        <div className="App">
            <Router>
                {/* <Ensayo></Ensayo> */}
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/registro" element={<RegistroForm />} />
                    <Route path="/acercade" element={<Acercade />} />
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/contactForm" element={<ContactForm />} />
                    <Route path="/crudApi" element={<CrudApi />} />
                    <Route path="/agendaCitas" element={<AgendaCitas />} />
                    <Route path="/cuentaUsuario" element={<CuentaUsuario />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/editarCitas" element={<EditarCitas />} />

                </Routes>
            </Router>
        </div>
    );
}

export default App;
