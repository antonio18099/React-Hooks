// src/layouts/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 p-4">
            <nav className="flex space-x-4">
                <Link to="/saludo">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                        useState - Saludo
                    </button>
                </Link>
                <Link to="/calculadora">
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                        useState - Calculadora
                    </button>
                </Link>
                <Link to="/color-aleatorio">
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                        useState - Fondo Aleatorio
                    </button>
                </Link>
                <Link to="/registro">
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                        useState - Registro
                    </button>
                </Link>
                <Link to="/lista-tareas">
                    <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition">
                        useState - Lista Tareas
                    </button>
                </Link>
            </nav>
        </header>
    );
};

export default Header;