
import logo from './logo.svg';
import './App.css';
import React,{ useState,useEffect } from 'react';

function App() {
  // maintain the name and state of the task (completed or incomplete)
  const [tasks,setTasks] = useState([])
  const [taskInput,setTaskInput] = useState('')

  useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (value) =>{
    setTasks([...tasks,{text:{value},isComplete: false}])
    alert(tasks)
  }
  const handleInput = (event)=>{
    setTaskInput(event.target.value);
  }
  return (
    <div className="App">
        Let's Create the todo application!
        <br/><input type='text' placeholder='Enter task!' onChange={handleInput}/>
        <button onClick={handleAddTask}>Add Task</button>
        <h2>Task List</h2>
            {tasks.length > 0 ? (
                tasks.map(task => (
                    <div>{task.text}</div>
                ))
            ) : (
                <p>No tasks available</p>
            )}
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import TodoForm from './TodoForm';
// import TodoList from './TodoList';

// function App() {
//     const [tasks, setTasks] = useState(() => {
//         const savedTasks = localStorage.getItem('tasks');
//         return savedTasks ? JSON.parse(savedTasks) : [];
//     });

//     useEffect(() => {
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//     }, [tasks]);

//     const addTask = (task) => {
//         setTasks([...tasks, { text: task, isCompleted: false }]);
//     };

//     const toggleTask = (index) => {
//         const updatedTasks = tasks.map((task, i) =>
//             i === index ? { ...task, isCompleted: !task.isCompleted } : task
//         );
//         setTasks(updatedTasks);
//     };

//     const deleteTask = (index) => {
//         const updatedTasks = tasks.filter((_, i) => i !== index);
//         setTasks(updatedTasks);
//     };

//     return (
//         <div className="app">
//             <h1>To-Do List</h1>
//             <TodoForm addTask={addTask} />
//             <TodoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
//         </div>
//     );
// }
// export default App;