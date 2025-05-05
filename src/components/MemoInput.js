import React from 'react';

function MemoInput({ taskInput, setTaskInput, addTodo }) {
  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter custom task (min 6 chars)"
      />
      <button onClick={addTodo}>Submit Task</button>
    </div>
  );
}

export default MemoInput;
