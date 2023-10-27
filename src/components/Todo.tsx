import React from 'react';

const Todo = ({ toggleTask, removeTask, task, key }: any) => {
  console.log('todo');

  return (
    <div className='todo'>
      <span
        onClick={() => {
          toggleTask(key);
          console.log('first');
        }}
        className={task?.isCompleted ? 'todo-text todo-completed' : 'todo-text'}
      >
        {task?.text}
      </span>
      <button
        onClick={() => {
          removeTask(key);
          console.log('first');
        }}
      >
        <span className='material-icons'>delete</span>
      </button>
    </div>
  );
};

export default Todo;
