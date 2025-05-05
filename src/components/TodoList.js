import React from 'react';

const TodoList = React.memo(({ todos }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
});

export default TodoList;
