import React, {useState} from 'react';
import "./Form.css";

function Form(props) {
    const [value, setValue]= useState('')
  return (
    <form className='form' onSubmit={e=>{
        e.preventDefault();
        props.putTodo(value);
        setValue('');
    }}>
        <input type="text" placeholder='enter todo' className="input" value={value} 
        onChange={e=>setValue(e.target.value)}/>
    </form>
  )
}

export default Form