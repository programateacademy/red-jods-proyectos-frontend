import React, {useState, useEffect, useRef} from 'react'


function TodoForm(props) {
   const [input, setInput] = useState('')

   //Focalizar la tarea del input
   const inputRef = useRef (null)

   useEffect(() =>{
    inputRef.current.focus () //para enfocar cualquier cosa que se coloque dentro de inputRef
   })

   const handleChange = e => {
    setInput(e.target.value)
   }
   
   const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        //Crear id con numero aleatorio
        id: Math.floor(Math.random()* 100000),
        text: input
    });

    setInput('');


   };

  return (

        <form className='todo-form' onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Add todo'
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
            ref={inputRef}
            />

            <button className='todo-button'>Add todo</button>
        </form>
   
  )
}

export default TodoForm