import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import FilterButtons from "./FilterButtons";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Eat healthy", completed: false },
    { id: 2, text: "Go to the gym", completed: true },
    { id: 3, text: "Study every day", completed: false },
    { id: 4, text: "Meeting with Boss", completed: true },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  return (
    <div className="todo-list">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <div className="Input">
        <input
          className="Search-input"
          type="text"
          placeholder="Search Tasks..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <FilterButtons
        handleFilterChange={handleFilterChange}
        filterType={filterType}
      />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        searchTerm={searchTerm}
        filterType={filterType}
      />
    </div>
  );
};

export default TodoApp;
