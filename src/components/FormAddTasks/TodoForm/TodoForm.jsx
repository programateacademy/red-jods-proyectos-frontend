import React, { useState, useEffect, useRef } from 'react';
import '../FormAddTask.css'
import {RxUpdate} from "react-icons/rx";
import {BsPlusCircle} from 'react-icons/bs'

function TodoForm(props) {
  //estado de solo una tarea nueva que se ingresa
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

//Funcion de call back que se llama cada vez que hay cambios en un elemento del dom,  e= el argumento del cambio; target=input en el que se están ingresando datos; value= valor actual del input; esto se asigna dentro del setInput (Hook useState)
  const handleChange = e => {
    setInput(e.target.value);
  };

//Prevenir que se recargue la página
  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({//utilizamos los props para poder pasar la propiedades y el id y la tarea (texto), es el input
      id: Math.floor(Math.random() * 10000),//Id para cada una de las tareas
      name: input, //input del useState,
      state: false
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
            name='name' 
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
            onChange={handleChange}//onChange equivale a la función que toma los cambios dentro del elemento
            name='name'
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