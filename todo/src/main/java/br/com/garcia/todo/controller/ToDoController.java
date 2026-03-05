package br.com.garcia.todo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.garcia.todo.model.ToDoModel;
import br.com.garcia.todo.repository.ToDoRepository;
import jakarta.validation.Valid;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/v1/tarefas")
public class ToDoController {
    
    private final ToDoRepository toDoRepository;
    
    public ToDoController(ToDoRepository toDoRepository) {
        this.toDoRepository = toDoRepository;
    }

    @GetMapping
    public List<ToDoModel> getTarefas() {
        return toDoRepository.findAll(); 
    }

    @PostMapping
    public ToDoModel createTarefa(@Valid @RequestBody ToDoModel entity) {
        ToDoModel savedEntity = toDoRepository.save(entity);
        return savedEntity;
    }

    @DeleteMapping("/{id}")
    public void deleteTarefa(@PathVariable Long id) {
        toDoRepository.deleteById(id);
    }
    
}