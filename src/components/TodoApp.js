import React from "react";
import { useState } from "react";
function TodoApp(){
    const [name,SetName]=useState("")
    const [array,setArray]=useState([])
    return (
        <div id="form">
       <form method="POST" action="#" onSubmit={(e)=>{
        e.preventDefault()
        setArray(array=>([...array,name]))
        SetName("")
       }}>
        <input type='text' 
        onChange={(e)=>SetName(e.target.value)}
        value={name}
        />
        <div>
            <button type="submit">submit</button>
        </div>

       </form>
       <div>
        {
            array.map((todo,id)=>{
                return <div id="todo" key={id}>
                    {todo}
                    <button onClick={(array)=>{
                        setArray(array=>array.filter(array=>array!=todo))
                    }}>x</button>
                    <button onClick={()=>{
                        SetName(todo)
                    }}>Edit</button>
                    </div>
            })
        }
       </div>
        </div>
    )
}
export default TodoApp