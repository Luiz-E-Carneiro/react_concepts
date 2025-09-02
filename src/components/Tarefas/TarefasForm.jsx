import { useState } from "react";

    export default function TarefasForm({onAddTarefa}) {

    const [titulo, setTitulo] = useState('');
    const [desc, setDesc] = useState('');

    const handleTitulo = (e) => {
        setTitulo(e.target.value);
    }

    const handleDesc = (e) => {
        setDesc(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(titulo.trim() && desc.trim()) {

            const tarefa = {titulo: titulo.trim(), desc: desc.trim()}
            onAddTarefa(tarefa);

            setTitulo('');
            setDesc('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Tarefa:</h3>
            <div>
                <label htmlFor="titulo">Título</label>
                <input type="text" name="titulo" value={titulo} onChange={handleTitulo} />
            </div> 
            <div>
                <label htmlFor="desc">Descricao</label>
                <input type="text" name="desc" value={desc} onChange={handleDesc} />
            </div>

            <button type="submit">Meter</button>
        </form>
    );
}