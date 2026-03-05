package br.com.garcia.todo.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Table(name = "tarefas")
@Data
public class ToDoModel {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;
    
    @Column(nullable = false)
    @NotBlank
    private String tarefa;
    
    @Column(nullable = false)
    private String descricao;
    
    @Column(nullable = false)
    @NotNull
    private Boolean concluido = false;
}