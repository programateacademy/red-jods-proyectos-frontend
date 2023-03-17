import React, { useState, useEffect, useRef } from 'react';
import '../FormAddTask.css'
import {RxUpdate} from "react-icons/rx";
import {BsPlusCircle} from 'react-icons/bs'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Actualiza tu tarea'
            value={input}
            onChange={handleChange}
            name='text' 
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            <RxUpdate/>
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Agregar tarea'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            <BsPlusCircle/>
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;