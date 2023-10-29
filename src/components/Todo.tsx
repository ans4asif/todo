import React from 'react';

const Todo = ({ toggleTask, removeTask, task, id }: any) => {
    console.log({ id });

    return (
        <div className='todo'>
            <span
                onClick={() => {
                    console.log({ id })
                    toggleTask(id);
                    console.log('first');
                }}
                className={task?.isCompleted ? 'todo-text todo-completed' : 'todo-text'}
            >
                {task?.text}
            </span>
            <button
                onClick={() => {
                    removeTask(id);
                    console.log('first');
                }}
            >
                <span className='material-icons'>delete</span>
            </button>
        </div>
    );
};

export default Todo;
