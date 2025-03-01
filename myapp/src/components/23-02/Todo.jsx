import React, { useState } from "react";
const Todo = () =>{
    const [todos, setTodos] = useState(["how to learn react", "how can improve js"]);
    const [newTodo, setNewTodo] = useState("");
    function aapChange(event){
        setNewTodo(event.target.value);
        console.log(event.target.value);
    }
    function aapJamaKaro() {
        setTodos([...todos, newTodo]);// ... it means spread data .
        setNewTodo("");
    }
    return(
         <div>
            { 
                <h1>{newTodo}</h1>
            }

            <input className="input" type="text" value={newTodo} onChange={aapChange} />
            <button className="btn" onClick={aapJamaKaro}>Add Todo</button>
            <h1 className="h2">My Day :- </h1>
            {todos.map((todo, i) => (
                <h5 key={todo}>{i + 1}.{todo}</h5>
           )) }
         </div>
    );

};

export default Todo;