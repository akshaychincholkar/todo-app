import React, { useState } from "react";
function MyTodoForm({ mytask }){
    const [text,setText] = useState('');
    const handleSubmit =(e) =>{
        e.preventDefault();
        mytask(text);
        // alert("task added:"+text);
        setText('');
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} placeholder="Enter task to add" onChange={(e)=>{
                    setText(e.target.value);
                }}></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
export default MyTodoForm;