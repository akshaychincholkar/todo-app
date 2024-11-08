import React from "react";
export default function MyTodoList({ tasks , toggleComplete, deleteTask }){
    const styles = {
        strikethrough: {
            textDecoration: 'line-through',
        },
        normal: {
            textDecoration: 'none',
        },
    };
    return(
        <div>
            {tasks.length > 0 ? tasks.map((task,index) => (
                <div style={task.isCompleted?styles.strikethrough : styles.normal}>
                    {index+1}. {task.name}
                    <button onClick={()=>toggleComplete((index))}>{!task.isCompleted?"Mark Complete":"Undo"}</button>
                    <button onClick={() => deleteTask(index)}>delete</button>
                </div>
            )): "No task is created yet"}
        </div>
    )
}