import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="Todo-item">
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span
        className="text"
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button className="delete-button" onClick={handleDelete}>
        X
      </button>
    </div>
  );
};

export default TodoItem;
