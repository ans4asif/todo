import React from 'react';
import Todo from './Todo';
import AddTask from './AddTask';

const TodoList = ({ addTask, toggleTask, removeTask, tasks }: any) => {
    console.log('first');
    return (
        <div>
        <div className='todo-list'>
            {tasks?.length ? tasks?.map((itm: any, index: any) => (
                <Todo
                    toggleTask={toggleTask}
                    removeTask={removeTask}
                    task={itm}
                    id={index}
                />
            )) : (
                <div className='no-record'>
                    <p>No tasks found</p>
                </div>
            )}

        </div>
            <AddTask addTask={addTask} />

        </div>
    );
};

export default TodoList;
