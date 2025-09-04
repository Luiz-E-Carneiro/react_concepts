import { useState } from "react";
import TarefasForm from "./components/Tarefas/TarefasForm";
import TarefasLista from "./components/Tarefas/TarefasLista";

export default function AppTarefas() {
    const [tarefas, setTarefas] = useState([]);

    const handleAddTarefa = (tarefa) => {
        const novTarefa = {
            id: Date.now(),
            titulo: tarefa.titulo,
            desc: tarefa.desc,
        }

        setTarefas([...tarefas, novTarefa])
    }

    const editTarefa = (id, titulo, desc) => {
        setTarefas(tarefas.map(tarefa => tarefa.id === id ? {...tarefa, titulo: titulo, desc: desc} : tarefa));
    }

    const deleteTarefa = (id) => {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
    }
    
    
    return (
        <div>
            <h1>Keepinho React (BRUH)</h1>

            <TarefasForm  onAddTarefa={handleAddTarefa} />

            <TarefasLista
                tarefas={tarefas}
                onEditTarefa={editTarefa} 
                onDeleteTarefa={deleteTarefa} 
            />

        </div>
    );
}