import React from 'react'

export default function Todo({ todo, toggleTodo , setUpdate}) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
        {todo.name}
      </label>
      <button onClick={()=>setUpdate(todo)}>edit</button>
    </div>
  )
}