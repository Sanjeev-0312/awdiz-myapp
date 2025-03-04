 import React, { memo } from 'react'

 const Todos = ({todos, addTodo})=> {
  console.log("Inside todos even the prompts not changed.");
  return (
    <div>
      {todos.map((todo, i) => (
        <h1>{i + 1}.{todo}</h1>
      ))}
      <button onClick={addTodo} className="btn">Add Todo</button>
    </div>
  );
};
export default memo(Todos);

// todos = [] 
// addTodo => function recreate