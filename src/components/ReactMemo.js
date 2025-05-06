import React from 'react';

// React.memo to prevent unnecessary re-renders of task items
const TaskItem = React.memo(({ task }) => {
  console.log(`Rendering task: ${task}`);
  return <li>{task}</li>;
});

const ReactMemo = ({ tasks }) => {
  return (
    <div>
      <h3>Task List (Memoized Items)</h3>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ReactMemo;
