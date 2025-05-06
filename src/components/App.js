<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React, { useState, useMemo } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

const App = () => {
  const [tasks, setTasks] = useState(["New todo"]);
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  // Function to add new todo with validation
  const addTodo = () => {
    if (input.length > 5) {
      setTasks([...tasks, input]);
      setInput("");
    } else {
      alert("Task must be more than 5 characters");
    }
  };

  // Memoizing the task list to optimize rendering
  const taskCount = useMemo(() => tasks.length, [tasks]);

  return (
    <div className="App">
      <h1>Task Management App</h1>

      {/* Task List */}
      <div>
        <h2>Tasks ({taskCount})</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>

      {/* Task Input */}
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a custom task"
        />
        <button onClick={addTodo}>Submit Task</button>
      </div>

      {/* Increment Counter */}
      <div>
        <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
        <p>Counter: {counter}</p>
      </div>

      {/* UseMemo and ReactMemo Example */}
      <UseMemo tasks={tasks} />
      <ReactMemo tasks={tasks} />
    </div>
  );
};

export default App;
