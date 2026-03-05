import './ToDoCard.css'

export default function ToDoCard({item, onConclude}) {
    return (
        <div className="tarefa-item">
            <div className="tarefa-detalhes">
                <h2>{item.tarefa}</h2>
                <p>{item.descricao}</p>
            </div>
            <button className="concluir-btn" onClick={onConclude}>Concluir</button>
        </div>
    )
}