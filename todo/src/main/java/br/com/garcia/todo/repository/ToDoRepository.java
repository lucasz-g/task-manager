package br.com.garcia.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.garcia.todo.model.ToDoModel;

public interface ToDoRepository extends JpaRepository<ToDoModel, Long> {
    
}
