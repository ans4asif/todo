import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState<any>([
    {
      text: 'Like',
      isCompleted: false,
    },
    {
      text: 'Comment',
      isCompleted: false,
    },
    {
      text: 'Subscribe',
      isCompleted: false,
    },
  ]);
  const addTask = (text: any) => setTasks([...tasks, { text }]);
  const toggleTask = (index: any) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const removeTask = (index: any) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className='wrapper'>
      <main>
        <div className='container'>
          {/* <div className='heading'><h1> TODO LIST</h1></div> */}
          <div className='fields'>
            <div className='d'>s</div>
            <div className='d'>s</div>
          </div>
          <div className='list-wrapper'>
            <TodoList
              addTask={addTask}
              toggleTask={toggleTask}
              removeTask={removeTask}
              tasks={tasks}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
