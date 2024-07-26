import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  toggleTodo,
  deleteTodo,
  searchTerm,
  filterType,
}) => {
  const filteredTodos = todos.filter(
    (todo) =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterType === "all" ||
        (filterType === "completed" && todo.completed) ||
        (filterType === "active" && !todo.completed))
  );

  return (
    <div className="task-div">
      {filteredTodos.map((todo) => (
        <div className="item-div">
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
