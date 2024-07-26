import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTodo.trim()) return;
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Tasks.."
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <button className="submit-button" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
