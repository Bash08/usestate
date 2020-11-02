import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return <div className="todo" style={{textDecoration: todo.inCompleted && 'line-through' }}> 
  {todo.text} 
  <div>
    <button onClick={() => completeTodo(index)}>complete</button>
    <button onClick={() => removeTodo(index)}>X</button>
  </div>
  </div>
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value)
    setValue('')
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
    </form>
  )

}


function App() {
  const [todos, setTodos ] = useState([
    {
      text: 'learn about react',
      inCompleted: false
    },
    {
      text: 'learn swedish',
      inCompleted: false
    },
    {
      text: 'learn spanish',
      inCompleted: false
    }
  ])

  const addTodo = text => {
    const newTodos = [...todos, {text}]
    setTodos(newTodos);
  }
  const completeTodo = index => {
    const newTodos = [...todos]
    console.log(newTodos)
    newTodos[index].inCompleted = true;
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)

  }
  return (
    <div className="app">
      <div className="todo-list">
          {todos.map((todo, index) => {
           return <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>
          })}
          
      </div>
      <TodoForm  addTodo={addTodo}/>
    </div>
  );
}

export default App;
