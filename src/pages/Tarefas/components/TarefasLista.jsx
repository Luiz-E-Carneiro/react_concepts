import TarefasItem from "./TarefasItem"

export default function TarefasLista({ tarefas, onEditTarefa, onDeleteTarefa }) {
    return (
        <ul>

            {
                tarefas.map((tarefa) => (
                    <TarefasItem
                        key={tarefa.id}
                        tarefa={tarefa}

                        onEditTarefa={onEditTarefa}
                        onDeleteTarefa={onDeleteTarefa}
                    />
                ))
            }

        </ul>
    )
}