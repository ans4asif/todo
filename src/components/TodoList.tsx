import React from 'react';
import Todo from './Todo';
import AddTask from './AddTask';
import { Task } from '../types';


interface TodoListProps {
    addTask: (text: string, category: string) => void;
    toggleTask: (id: number) => void;
    removeTask: (id: number) => void;
    copyTask: (text: string) => void;
    tasks: Task[];
}

const TodoList: React.FC<TodoListProps> = ({ addTask, toggleTask, removeTask, tasks, copyTask }) => {
    return (
        <div>
            <div className='todo-list'>
                {tasks?.length ? tasks?.map((itm: any, index: any) => (
                    <Todo
                        toggleTask={toggleTask}
                        removeTask={removeTask}
                        copyTask={copyTask}
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
