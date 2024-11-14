import { useState } from 'react';

function RegistroUsuario() {
    const [nombre, setNombre] = useState('');
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [id, setId] = useState('');

    // Array para almacenar los usuarios registrados
    const [usuarios, setUsuarios] = useState([]);

    const registrar = () => {
        // Verificar si el usuario ya existe
        const usuarioExistente = usuarios.find(user => user.usuario === usuario || user.email === email);

        if (usuarioExistente) {
            alert('El usuario o correo electrónico ya está registrado.');
            return;
        }

        // Crear un nuevo objeto de usuario
        const nuevoUsuario = {
            nombre,
            usuario,
            email,
            telefono,
            id
        };

        // Agregar el nuevo usuario al array
        setUsuarios([...usuarios, nuevoUsuario]);

        // Reiniciar el formulario
        setNombre('');
        setUsuario('');
        setEmail('');
        setTelefono('');
        setId('');

        alert(`Registrado: ${nombre}, ${email}`);
    };

    return (
        <div className="space-y-4">
            <input
                type="text"
                placeholder="Nombre"
                className="border p-2 rounded w-full"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="text"
                placeholder="Usuario"
                className="border p-2 rounded w-full"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
            />
            <input
                type="email"
                placeholder="Correo Electrónico"
                className="border p-2 rounded w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="tel"
                placeholder="Teléfono"
                className="border p-2 rounded w-full"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
            />
            <input
                type="text"
                placeholder="ID"
                className="border p-2 rounded w-full"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={registrar}>
                Registrar
            </button>
        </div>
    );
}

export default RegistroUsuario;