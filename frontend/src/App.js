import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomeScreen from './Components/screens/HomeScreen';
import Index from '../src/Components/screens/Index.jsx';
import LoginForm from './Components/screens/LoginForm.jsx';
import RegistroForm from './Components/screens/RegistroForm';
import Acercade from './Components/screens/Acercade';
import Servicios from './Components/screens/Servicios';

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

                </Routes>
            </Router>
        </div>
    );
}

export default App;
