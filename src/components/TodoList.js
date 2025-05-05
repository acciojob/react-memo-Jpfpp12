import React from 'react';

function TodoList({ todos }) {
  return (
    <ul data-testid="todo-list">
      {todos.map((todo, index) => (
        <li key={index} data-testid="todo-item">
          {todo}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
