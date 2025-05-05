import React from 'react';

const ReactMemo = React.memo(({ totalTasks }) => {
  return (
    <div>
      <h3>Total Tasks: {totalTasks}</h3>
    </div>
  );
});

export { ReactMemo };
