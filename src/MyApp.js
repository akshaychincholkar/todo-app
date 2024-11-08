import React, { useState } from "react";
import MyTodoForm from "./MyTodoForm";
import MyTodoList from "./MyTodoList";

function MyApp(){
    const [tasks,setTasks] = useState([]);
    const addTask = (task) => {
        setTasks([...tasks,{name: task,isCompleted: false}]);
    }
    const toggleComplete = (index) => {
        const updatedTasks = tasks.map((task,i)=>(
            index === i ? {...task , isCompleted: !task.isCompleted }:task
        ));
        setTasks(updatedTasks)
    }
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((task,i) => (
            index !== i
        ))
        setTasks(updatedTasks);
    }
    return(
        <div>
            Todo App with modular implementation!
            <MyTodoForm mytask={addTask}/>
            <MyTodoList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask}/>
        </div>
    )
}
export default MyApp;