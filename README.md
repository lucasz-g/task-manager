# Task Manager

A simple **full-stack task management application** built with **React** on the frontend and **Spring Boot** on the backend.
The project demonstrates how to build and integrate a modern Java REST API with a React interface using a clean and minimal architecture.

The application allows users to create, list and delete tasks through a RESTful API consumed by a React frontend.

This project was developed as a portfolio example to demonstrate practical skills in:

* REST API development with Spring Boot
* Database persistence with JPA
* Frontend integration with React
* HTTP communication using Axios

Modern applications commonly combine a Java backend (Spring) with a JavaScript frontend like React to create modular full-stack systems. ([InfoWorld][1])

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
* Delete tasks
* Task validation on backend
* REST API integration with React
* Database schema migration with Flyway

---

# Architecture

The project follows a simple layered architecture:

```
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

The backend exposes REST endpoints which are consumed by the React application.

---

# Project Structure

```
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

```
/api/v1/tarefas
```

### Get all tasks

```
GET /api/v1/tarefas
```

Response

```
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

```
POST /api/v1/tarefas
```

Body

```
{
  "tarefa": "Learn React",
  "descricao": "Build a simple UI",
  "concluido": false
}
```

---

### Delete task

```
DELETE /api/v1/tarefas/{id}
```

---

# Running the Project

## Backend

Requirements

* Java 17
* Maven

Run:

```
cd todo
mvn spring-boot:run
```

Backend runs at:

```
http://localhost:8080
```

---

## Frontend

Requirements

* Node.js
* npm

Run:

```
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# Database

The project uses an **H2 in-memory database** for simplicity.

Flyway is used to manage database schema migrations.

---

# Future Improvements

Possible next steps for this project:

* Update tasks
* Mark tasks as completed
* Pagination
* Authentication (Spring Security + JWT)
* Deploy frontend (Vercel)
* Deploy backend (Docker / Cloud VM)

---

# Author

Lucas Garcia
Software Engineering Student
Backend • Data Systems • AI Applications
