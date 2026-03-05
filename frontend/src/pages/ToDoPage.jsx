import ToDoCard from "../components/ToDoCard";
import './ToDoPage.css'; 
import CreateTaskInput from "../components/CreateTaskInput";
import { useToDo } from "../hooks/useTodo";

export default function ToDoPage() {

    const {tarefas, createTask, concludeTask} = useToDo();

    return (
        <div className="container">
            <h1>Task Manager</h1>

            <div className="tarefas-lista">
              {tarefas.map((item) => (
                <ToDoCard
                  key={item.id}
                  item={item}
                  onConclude={() => concludeTask(item.id)}
                />
              ))}
              <CreateTaskInput onCreateTask={createTask} />
            </div>
        </div>

    )
}