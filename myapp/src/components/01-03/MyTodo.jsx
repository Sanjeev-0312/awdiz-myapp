import React, { useState } from "react";
const MyTodo = () =>{
    const [todos, setTodos] = useState(["react"]);
    const [newTodo, setNewTodo] = useState("");
    function handleChange(event){
        setNewTodo(event.target.value);
        console.log(event.target.value);
    }
    function addTodo() {
        setTodos([...todos, newTodo]);// ... it means spread data .
        setNewTodo("");
        function removeTodo(){
          
        }
    }
    return(
         <div>
            { 
                <h1>{newTodo}</h1>
            }

            <input className="input" type="text" value={newTodo} onChange={handleChange} />
            <button className="btn" onClick={addTodo}>Add Todo</button>
            <h1 className="h2">My Day :- </h1>
            {todos.map((todo, i) => (
                <h5 key={todo}>{i + 1}.{todo}</h5>
           )) }
         </div>
    );

};

export default MyTodo;