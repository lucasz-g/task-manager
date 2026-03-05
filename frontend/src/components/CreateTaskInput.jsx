import './CreateTaskInput.css'
import { useState } from "react";

export default function CreateTaskInput({onCreateTask}) {
    const [tarefa, setTarefa] = useState("");
    const [descricao, setDescricao] = useState("");

    const handleCreate = () => {
        if (!tarefa.trim()) return;
        // Descrição é opcional
        
        onCreateTask({
          tarefa,
          descricao,
        }); 
        
        // limpa os inputs
        setTarefa("");
        setDescricao("");
    };

    // Empty State = quando algo ainda não existe, mas o layout já mostra como será quando existir e convida à ação
    return (
    <div className="create-input">
      <div className="create-input-fields">
        <input
          type="text"
          placeholder="Nova tarefa..."
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição da tarefa..."
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
      </div>
      <button className="add-btn" onClick={handleCreate}>
        Adicionar
      </button>
    </div>
  );
}
