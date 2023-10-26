import React from 'react'

const Todo = () => {
    console.log("todo")
    const task: any = {
        text: 'sfsdfsd fsdf'
    }
    return (
        <div className="todo">
            <span onClick={() =>
                // toggleTask(index)
                console.log("first")
            }
                className={task?.isCompleted ? "todo-text todo-completed" : "todo-text"}>
                {task?.text}
            </span>
            <button onClick={() =>
                // removeTask(index)
                console.log("first")

            }><span className="material-icons">
                    delete
                </span></button>
        </div>
    )
}

export default Todo