<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React, { useState, useMemo, memo } from 'react';

const TaskManagementApp = () => {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [taskInput, setTaskInput] = useState('');

  const addTodo = () => {
    if (taskInput.trim().length > 5) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    } else {
      alert('Task must be more than 5 characters');
    }
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const memoizedTasks = useMemo(() => tasks, [tasks]);
  const memoizedCounter = useMemo(() => counter, [counter]);

  return (
    <div className="app">
      <header className="header">
        <h1>Task Management App</h1>
      </header>
      <main>
        <div className="task-input">
          <input
            type="text"
            placeholder="Enter a task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button onClick={addTodo}>Add Todo</button>
        </div>

        <div className="counter">
          <button onClick={incrementCounter}>Increment Counter</button>
          <h2>Counter: {memoizedCounter}</h2>
        </div>

        <div className="task-list">
          <h3>Tasks</h3>
          <ul>
            {memoizedTasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default memo(TaskManagementApp);
