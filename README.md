# Task Manager

A simple **full-stack task management application** built with **React** (frontend) and **Spring Boot** (backend).
The project demonstrates a clean and minimal full-stack integration: a Java REST API consumed by a React interface using Axios.

Users can create and list tasks, and **mark them as completed**. In this project, **completing a task removes it from the list** by triggering a `DELETE` request to the backend and then updating the React state locally.

The project comes with initial data via Flyway. 

---

# Tech Stack

### Backend

* Java 17
* Spring Boot
* Spring Web MVC
* Spring Data JPA
* Flyway (database migrations)
* H2 Database
* Maven
* Lombok
* Jakarta Validation

### Frontend

* React
* Vite
* Axios
* ESLint

---

# Features

* Create tasks
* List tasks
* **Complete tasks (implemented as delete)**

  * When a user completes a task, the frontend calls the backend `DELETE` endpoint
  * The task is then removed from the UI state (`setTarefas(filter...)`)
* Task validation on backend (Jakarta Validation)
* REST API integration with React (Axios)
* Database schema migration with Flyway

---

# Architecture

The project follows a simple layered architecture:

```text
React Frontend
      │
      │ HTTP (Axios)
      ▼
Spring Boot REST API
      │
      │ JPA
      ▼
H2 Database
```

---

# Project Structure

```text
task-manager
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── hooks
│   │   └── pages
│   │
│   └── public
│
└── todo (backend)
    ├── src/main/java/br/com/garcia/todo
    │   ├── controller
    │   ├── model
    │   └── repository
    │
    └── src/main/resources
        ├── db/migration
        ├── static
        └── templates
```

---

# API Endpoints

Base URL:

```text
/api/v1/tarefas
```

### Get all tasks

```text
GET /api/v1/tarefas
```

Response:

```json
[
  {
    "id": 1,
    "tarefa": "Study Spring Boot",
    "descricao": "Build REST APIs",
    "concluido": false
  }
]
```

---

### Create task

```text
POST /api/v1/tarefas
```

Body:

```json
{
  "tarefa": "Learn React",
  "descricao": "Build a simple UI",
  "concluido": false
}
```

---

### Complete task (delete)

```text
DELETE /api/v1/tarefas/{id}
```

**Frontend behavior:** completing a task triggers this delete call and then removes the task from the UI state:

```js
async function concludeTask(id) {
  await api.delete(`/api/v1/tarefas/${id}`);
  setTarefas(prev => prev.filter(tarefa => tarefa.id !== id));
}
```

---

# Running the Project

## Backend

Requirements:

* Java 17
* Maven

Run:

```bash
cd todo
mvn spring-boot:run
```

Backend runs at:

```text
http://localhost:8080
```

---

## Frontend

Requirements:

* Node.js
* npm

Run:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

# Database

The project uses an **H2 in-memory database** for simplicity.
Flyway manages database schema migrations.

---

# Future Improvements

Possible next steps:

* Update tasks
* Mark tasks as completed without deleting (persist `concluido = true`)
* Pagination
* Authentication (Spring Security + JWT)
* Deploy frontend (Vercel)
* Deploy backend (Docker / Cloud VM)

---

# Author

Lucas Garcia

Software Engineering Student

Backend • Data Systems • AI Applications
