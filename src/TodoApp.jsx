import React, { useState } from 'react';
import './styles/Todo.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setIsEditing(true);
    setCurrentIndex(index);
    setInputValue(todos[index]);
  };

  const updateTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodos = todos.map((todo, index) => (
        index === currentIndex ? inputValue : todo
      ));
      setTodos(newTodos);
      setIsEditing(false);
      setInputValue('');
      setCurrentIndex(null);
    }
  };

  return (
    <div className="App">
      <h1 className='title'>Todo List</h1>
      <div className='input'>
        <input
          type="text"
          value={inputValue}
          placeholder='add new todo'
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className='button' onClick={isEditing ? updateTodo : addTodo}>
          {isEditing ? 'Update' : 'Add'}
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li className='list' key={index}>
            {todo}
            <div className="buton">
              <button className='button' onClick={() => editTodo(index)}>Edit</button>
              <button className='button' onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;