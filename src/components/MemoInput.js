import React from 'react';

function MemoInput({ taskInput, setTaskInput, addTodo }) {
  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        data-testid="task-input"
      />
      <button onClick={addTodo} data-testid="add-todo-button">Add</button>
    </div>
  );
}

export default MemoInput;
