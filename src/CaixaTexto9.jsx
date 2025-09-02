import { useState } from "react"

const CaixaTexto = () => {
    const [texto, setTexto] = useState('');

    const gerenciaTexto = (e) => {
        setTexto(e.target.value);
    }

    return (
        <div>
            <h3>Input</h3>

            <input type="text" value={texto} onInput={gerenciaTexto} />

            <p>Você digitou: {texto}</p>
            
        </div>
    )
}

export default CaixaTexto;