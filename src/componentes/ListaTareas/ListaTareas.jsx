// src/components/ListaTareas.jsx
import { useState } from 'react';

function ListaTareas() {
    const [nombreTarea, setNombreTarea] = useState('');
    const [descripcionTarea, setDescripcionTarea] = useState('');
    const [tareas, setTareas] = useState([]);

    const agregarTarea = () => {
        if (!nombreTarea || !descripcionTarea) {
            alert('Por favor, completa ambos campos.');
            return;
        }

        const nuevaTarea = {
            nombre: nombreTarea,
            descripcion: descripcionTarea
        };

        setTareas([...tareas, nuevaTarea]);
        setNombreTarea('');
        setDescripcionTarea('');
    };

    return (
        <div className="space-y-4">
            <input
                type="text"
                placeholder="Nombre de la tarea"
                className="border p-2 rounded w-full"
                value={nombreTarea}
                onChange={(e) => setNombreTarea(e.target.value)}
            />
            <input
                type="text"
                placeholder="Descripción de la tarea"
                className="border p-2 rounded w-full"
                value={descripcionTarea}
                onChange={(e) => setDescripcionTarea(e.target.value)}
            />
            <button className="bg-yellow-500 text-white py-2 px-4 rounded" onClick={agregarTarea}>
                Agregar Tarea
            </button>
            <ul className="list-disc pl-6 space-y-2">
                {tareas.map((t, index) => (
                    <li key={index} className="text-lg">
                        <strong>{t.nombre}</strong>: {t.descripcion}
                    </li>
                ))}
            </ul>
        </div>
    );
}






export default ListaTareas;