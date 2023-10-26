import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="wrapper">
      <main>
        <div className="container">
          <div className="heading">
            <h1> TODO LIST</h1>
          </div>
          <div className="fields">
            <div className="d">s</div>
            <div className="d">s</div>
          </div>
          <TodoList />
        </div>
      </main>
    </div>
  );
}

export default App;
