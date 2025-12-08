import React, { useState, useEffect } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import { getAllTodos, createTodo, updateTodo, deleteTodo } from './services/todoService';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await getAllTodos();
      setTodos(data);
      setError('');
    } catch (err) {
      setError('Failed to fetch todos. Make sure the backend is running.');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    try {
      const newTodo = await createTodo(inputValue);
      setTodos([newTodo, ...todos]);
      setInputValue('');
      setError('');
    } catch (err) {
      setError('Failed to add todo');
      console.error('Error adding todo:', err);
    }
  };

  const handleToggleTodo = async (id, completed) => {
    try {
      const updatedTodo = await updateTodo(id, { completed: !completed });
      setTodos(todos.map(todo => todo._id === id ? updatedTodo : todo));
    } catch (err) {
      setError('Failed to update todo');
      console.error('Error updating todo:', err);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      setError('Failed to delete todo');
      console.error('Error deleting todo:', err);
    }
  };

  const activeTodos = todos.filter(todo => !todo.completed).length;

  return (
    <div className="App">
      <div className="todo-container">
        <h1>My Todo List</h1>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleAddTodo} className="todo-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo..."
            className="todo-input"
          />
          <button type="submit" className="add-button">Add</button>
        </form>

        <div className="todo-stats">
          {activeTodos} active {activeTodos === 1 ? 'task' : 'tasks'}
        </div>

        {loading ? (
          <div className="loading">Loading todos...</div>
        ) : (
          <div className="todo-list">
            {todos.length === 0 ? (
              <p className="empty-message">No todos yet. Add one above!</p>
            ) : (
              todos.map(todo => (
                <TodoItem
                  key={todo._id}
                  todo={todo}
                  onToggle={handleToggleTodo}
                  onDelete={handleDeleteTodo}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
