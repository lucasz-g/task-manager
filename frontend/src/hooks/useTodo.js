import { useEffect, useState } from "react";
import { api } from "../api/api.js";

export function useToDo() {
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function loadTasks() {
    try {
      setLoading(true);
      const response = await api.get("/v1/tarefas");
      setTarefas(response.data);
    } catch (err) {
      console.error(err);
      setError("Erro ao carregar tarefas");
    } finally {
      setLoading(false);
    }
  }

  async function createTask(task) {
    try {
      const response = await api.post("/v1/tarefas", task);
      setTarefas(prev => [...prev, response.data]);
    } catch (err) {
      console.error(err);
      setError("Erro ao criar tarefa");
    }
  }

  async function concludeTask(id) {
    try {
      await api.delete(`/v1/tarefas/${id}`);
      setTarefas(prev => prev.filter(tarefa => tarefa.id !== id));
    } catch (err) {
      console.error(err);
      setError("Erro ao concluir tarefa");
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return {
    tarefas,
    loading,
    error,
    createTask,
    concludeTask, 
  };
}
