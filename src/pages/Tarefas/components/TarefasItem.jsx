import { useState } from "react"

export default function TarefasItem({ tarefa, onEditTarefa, onDeleteTarefa }) {
    const [isEditing, setIsEditing] = useState(false);
    const [novoTitulo, setNovoTitulo] = useState(tarefa.novoTitulo);
    const [novoDesc, setNovoDesc] = useState(tarefa.novoDesc);

    const handleEdit = (e) => {
        if (isEditing) {
            if (novoDesc.trim() && novoTitulo.trim()) {
                onEditTarefa(tarefa.id, novoTitulo, novoDesc)
            }
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    }

    const handleDelete = (e) => {
        onDeleteTarefa(tarefa.id)
    }

    return (
        <li>
                {isEditing ? (
                    <div>
                        <input type="text" value={novoTitulo} onChange={(e) => setNovoTitulo(e.target.value)} />
                        <input type="text" value={novoDesc} onChange={(e) => setNovoDesc(e.target.value)} />
                    </div>
                ) : (
                    <div> 
                        <h5>{tarefa.titulo}</h5>
                        <p>{tarefa.desc}</p>
                    </div>
                )}
            <button onClick={handleEdit}>✏️</button>
            <button onClick={handleDelete}>🗑️</button>
        </li >

    )
}