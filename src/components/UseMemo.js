import React, { useMemo } from 'react';

const UseMemo = ({ tasks }) => {
  const taskCount = useMemo(() => {
    console.log('Calculating task count...');
    return tasks.length;
  }, [tasks]);

  return (
    <div>
      <h3>Task Count (Memoized): {taskCount}</h3>
    </div>
  );
};

export default UseMemo;
