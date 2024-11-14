import { useState } from 'react';

function Saludo() {
    const [nombre, setNombre] = useState('');
    const [saludo, setSaludo] = useState('');

    const manejarSaludo = () => setSaludo(`¡Hola, ${nombre}!`);

    return (
    <div className="space-y-4">
        <input
        type="text"
        placeholder="Ingresa tu nombre"
        className="border p-2 rounded w-full"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        />
        <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={manejarSaludo}>
        Saludar
        </button>
        {saludo && <p className="text-xl font-semibold">{saludo}</p>}
    </div>
    );
}

export default Saludo;
