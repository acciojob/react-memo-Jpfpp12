import React, { useState, useMemo } from 'react';

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3']);

  const addTask = () => {
    setTasks([...tasks, `Task ${tasks.length + 1}`]);
  };

  const expensiveCalculation = (num) => {
    console.log('Performing expensive calculation');
    return num * 2;
  };

  const memoizedResult = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>UseMemo Example</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)} data-cy="increment-btn">Increment Count</button>

      <div>
        <p>Expensive Calculation Result: {memoizedResult}</p>
      </div>

      <div>
        <h3>Tasks:</h3>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <button onClick={addTask} data-cy="add-todo-btn">Add Todo</button>
      </div>
    </div>
  );
};

export default UseMemo;
