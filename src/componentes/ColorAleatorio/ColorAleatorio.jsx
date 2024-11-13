// src/components/ColorAleatorio.jsx

function ColorAleatorio({ setColorFondo }) {
    const cambiarColor = () => {
        const nuevoColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setColorFondo(nuevoColor);
    };

    return (
        <div className="space-y-4">
            <button className="bg-purple-500 text-white py-2 px-4 rounded" onClick={cambiarColor}>
                Cambiar Color
            </button>
            <p className="text-xl font-semibold">El color ha cambiado.</p>
        </div>
    );
}

export default ColorAleatorio;