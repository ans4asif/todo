import React from 'react';
import Todo from './Todo';
import AddTask from './AddTask';

const TodoList = ({ addTask, toggleTask, removeTask, tasks }: any) => {
  console.log('first');
  return (
    <div className='todo-list'>
      {tasks?.map((itm: any, index: any) => (
        <Todo
          toggleTask={toggleTask}
          removeTask={removeTask}
          task={itm}
          key={index}
        />
      ))}

      <AddTask addTask={addTask} />
    </div>
  );
};

export default TodoList;
