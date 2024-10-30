import React from 'react';

function TodoList({ tasks, toggleTask, deleteTask }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                    {task.text}
                    <button onClick={() => toggleTask(index)}>
                        {task.isCompleted ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
