<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React, { useState, useMemo } from 'react';
import TodoList from './TodoList';
import Counter from './Counter';
import MemoInput from './MemoInput';
import { ReactMemo } from './ReactMemo';

function App() {
  const [todos, setTodos] = useState(['New todo']);
  const [counter, setCounter] = useState(0);
  const [taskInput, setTaskInput] = useState('');

  const addTodo = () => {
    if (taskInput.length > 5) {
      setTodos([...todos, taskInput]);
      setTaskInput('');
    } else {
      alert('Task input must be more than 5 characters');
    }
  };

  const totalTasks = useMemo(() => todos.length, [todos]);

  return (
    <div>
      <h1>Todo App with Counter</h1>
      <Counter counter={counter} setCounter={setCounter} />
      <TodoList todos={todos} />
      <MemoInput
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        addTodo={addTodo}
        data-testid="memo-input"
      />
      <button onClick={addTodo} data-testid="add-todo-button">Add Todo</button>
      <ReactMemo totalTasks={totalTasks} />
    </div>
  );
}

export default App;


