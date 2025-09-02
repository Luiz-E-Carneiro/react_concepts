import TarefasItem from "./TarefasItem"

export default function TarefasLista({ tarefas }) {
    return (
        <ul>

            {
                tarefas.map((tarefa) => (
                    <TarefasItem key={tarefa.id} tarefa={tarefa} />
                ))
            }

        </ul>
    )
}