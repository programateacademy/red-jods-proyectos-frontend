import React, {useState} from 'react'
import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/TodoForm'

function TodoList() {
  const [todos, setTodos] = useState ([]);

  //Agregar las tareas, todo es donde se alamcena la tarea
  const addTodo = todo => {
    //Arreglar el texto  en dado caso de que alguien deje espacios
    if (!todo.text || /^\s*$/.test(todo.text)){
        return
    }
    //Seguarda la lista de tareas que se van agregando
    const newTodos = [todo, ...todos]

    setTodos(newTodos)
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)){
        return
    }
    // Si el item del id es igual al nuevo id que se desea modificar, estara en true, pero si no el nuevo visualViewport, regresara al id antiguo
    setTodos (prev => prev.map(item => item.id === todoId ? newValue : item))

  }


  const completeTodo = id => {
    let updatedTodos = todos.map( todo => {
        if (todo.id === id) {
            todo.isComplete = !todo.isComplete
        }
        return todo
    })
    setTodos (updatedTodos);
  };

  const removeTodo = id =>{
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr)
  };

  return (
    <div>
        <h1>What's the Plan for Today</h1>
        <TodoForm
        onSubmit={addTodo}/>
        <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoList