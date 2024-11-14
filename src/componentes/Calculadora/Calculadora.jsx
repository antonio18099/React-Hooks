import { useState } from 'react';

function Calculadora() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(null);
    const [operacion, setOperacion] = useState('');

    const calcular = () => {
        let res;
        switch (operacion) {
            case 'suma':
                res = parseFloat(num1) + parseFloat(num2);
                break;
            case 'resta':
                res = parseFloat(num1) - parseFloat(num2);
                break;
            case 'multiplicacion':
                res = parseFloat(num1) * parseFloat(num2);
                break;
            case 'division':
                if (parseFloat(num2) === 0) {
                    res = 'Error: División por cero';
                } else {
                    res = parseFloat(num1) / parseFloat(num2);
                }
                break;
            default:
                res = null;
        }
        setResultado(res);
    };

    const reiniciar = () => {
        setNum1(0);
        setNum2(0);
        setResultado(null);
        setOperacion('');
    };

    return (
        <div className="space-y-4">
            <input
                type="number"
                placeholder="Número 1"
                className="border p-2 rounded w-full"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Número 2"
                className="border p-2 rounded w-full"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <div className="flex space-x-2">
                <button 
                    className="bg-blue-500 text-white py-2 px-4 rounded" 
                    onClick={() => { setOperacion('suma'); calcular(); }}>
                    Sumar
                </button>
                <button 
                    className="bg-green-500 text-white py-2 px-4 rounded" 
                    onClick={() => { setOperacion('resta'); calcular(); }}>
                    Restar
                </button>
                <button 
                    className="bg-yellow-500 text-white py-2 px-4 rounded" 
                    onClick={() => { setOperacion('multiplicacion'); calcular(); }}>
                    Multiplicar
                </button>
                <button 
                    className="bg-red-500 text-white py-2 px-4 rounded" 
                    onClick={() => { setOperacion('division'); calcular(); }}>
                    Dividir
                </button>
            </div>
            {resultado !== null && <p className="text-xl font-semibold">Resultado: {resultado}</p>}
            <button 
                className="bg-gray-500 text-white py-2 px-4 rounded mt-4" 
                onClick={reiniciar}>
                Reiniciar
            </button>
        </div>
    );
}

export default Calculadora;