<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React from 'react';
import UseMemo from './UseMemo.js';
import ReactMemo from './ReactMemo.js';

const App = () => {
  return (
    <div>
      <h1>Task Management App with React Memo</h1>
      <hr />
      <UseMemo />
      <hr />
      <ReactMemo />
    </div>
  );
};

export default App;
