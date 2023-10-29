import React from 'react';
import { Task } from '../types';
interface TodoProps {
    toggleTask: (id: number) => void;
    removeTask: (id: number) => void;
    copyTask: (text: string) => void;
    task: Task;
    id: number;
  }

const Todo:  React.FC<TodoProps>= ({ toggleTask, removeTask, task, id, copyTask }) => {

    return (
        <div className='todo'>
            <span
                onClick={() => {
                    toggleTask(id);
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
                    }}
                >
                    <span className='material-icons'>delete</span>
                </button>
                <button
                    onClick={() => {
                        copyTask(task?.text);
                    }}
                >
                    <span className='material-icons'>content_copy</span>
                </button>
            </div>
        </div>
    );
};

export default Todo;
