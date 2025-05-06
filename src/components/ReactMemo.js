import React, { memo } from 'react';

const Task = ({ taskName }) => {
  console.log('Rendering Task:', taskName);

  return <li>{taskName}</li>;
};

const MemoizedTask = memo(Task);

const ReactMemo = () => {
  const [tasks, setTasks] = React.useState(['Task 1', 'Task 2', 'Task 3']);
  const [taskInput, setTaskInput] = React.useState('');

  const addTask = () => {
    setTasks([...tasks, taskInput]);
    setTaskInput('');
  };

  return (
    <div>
      <h2>ReactMemo Example</h2>
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter task"
          data-cy="task-input"
        />
        <button onClick={addTask} data-cy="add-skill-btn">Add Skill</button>
      </div>

      <div>
        <h3>Task List:</h3>
        <ul>
          {tasks.map((task, index) => (
            <MemoizedTask key={index} taskName={task} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReactMemo;
