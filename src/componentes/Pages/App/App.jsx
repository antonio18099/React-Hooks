import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../../Layouts/Header/Header.jsx';
import Saludo from '../../Saludo/Saludo.jsx';
import Calculadora from '../../Calculadora/Calculadora.jsx';
import ColorAleatorio from '../../ColorAleatorio/ColorAleatorio.jsx';
import RegistroUsuario from '../../RegistroUsuario/RegistroUsuario.jsx';
import ListaTareas from '../../ListaTareas/ListaTareas.jsx';
import { useState } from 'react';

function App() {
    const [colorFondo, setColorFondo] = useState('#ffffff');

    return (
        <Router>
            <Header />
            <div className="min-h-screen p-4" style={{ backgroundColor: colorFondo }}>
                <Routes>
                    <Route path="/" element={<h1 className="text-2xl font-bold">Bienvenido a los Ejercicios</h1>} />
                    <Route path="/saludo" element={<Saludo />} />
                    <Route path="/calculadora" element={<Calculadora />} />
                    <Route path="/color-aleatorio" element={<ColorAleatorio setColorFondo={setColorFondo} />} />
                    <Route path="/registro" element={<RegistroUsuario />} />
                    <Route path="/lista-tareas" element={<ListaTareas />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;