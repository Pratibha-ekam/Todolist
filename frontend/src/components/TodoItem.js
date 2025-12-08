import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo._id, todo.completed)}
          className="todo-checkbox"
        />
        <span className="todo-title">{todo.title}</span>
      </div>
      <button
        onClick={() => onDelete(todo._id)}
        className="delete-button"
        aria-label="Delete todo"
      >
        ✕
      </button>
    </div>
  );
}

export default TodoItem;
