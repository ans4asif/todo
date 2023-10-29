import React from 'react';

const Todo = ({ toggleTask, removeTask, task, id, copyTask }: any) => {
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
                {task?.text} <span className='category'>
                    ({task.category})
                </span>
            </span>
            <div className="btn-holder">
                <button
                    onClick={() => {
                        removeTask(id);
                        console.log('first');
                    }}
                >
                    <span className='material-icons'>delete</span>
                </button>
                <button
                    onClick={() => {
                        copyTask(task?.text);
                        console.log('first');
                    }}
                >
                    <span className='material-icons'>content_copy</span>
                </button>
            </div>
        </div>
    );
};

export default Todo;
