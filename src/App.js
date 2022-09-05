import React, {useState, useEffect} from 'react'
import Form from './component/Form/Form'
import './App.css';

function App() {
  const [todos,setTodos]=useState([])
  const [allTodos,setAllTodos]=useState(0)
  const [allCompleat,setAllCompleat]=useState(0)

   useEffect(()=>{
    setAllCompleat(todos.filter(todo=>todo.done ===true).length)
  },[todos])
 
  const putTodo=(value)=>{
    if(value){
      setTodos([...todos,{id:Date.now(),text:value,done:false}])
      setAllTodos(allTodos+1)
    }else{
      alert('Please enter text in input')
    }
  }

const toggleTodo =(id)=>{
  setTodos(todos.map(todo=>{
    if(todo.id !== id) return todo
    return{
      ...todo,
      done:!todo.done
    }
  }))
}
const removeTodo=(id)=>{
  setTodos(todos.filter(todo=>todo.id!== id))
  setAllTodos(allTodos-1)
}
const clearAllTodos=()=>{
  setTodos([]);
  setAllTodos(0)
}

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="title">Todo list</h1>
        <Form putTodo={putTodo}/>
        <ul className="todos">
        {
           todos.map(todo=>{
             return(
               <li className={todo.done ?"todo done":"todo"} key={todo.id} onClick={e=>toggleTodo(todo.id)}>
                 {todo.text}
                 <button className="delet" onClick={e=>{
                   e.stopPropagation();
                   removeTodo(todo.id)
                 }}>Delet</button>
               </li>
             )
           })
         }

         <div className="info">
           <span>All todos:{allTodos}</span>
           <span>Compleat:{allCompleat}</span>
         </div>
         <button className="btn" onClick={clearAllTodos}>Delet All todo</button>
        </ul>
      </div>
    </div>
  );
}

export default App;
