export default function TarefasItem({tarefa}) {
    return (
        <li>{tarefa.titulo}: {tarefa.desc}</li>
    )
}