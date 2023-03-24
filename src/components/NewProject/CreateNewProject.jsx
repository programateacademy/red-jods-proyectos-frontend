import React, { useState, useContext } from 'react'
import Box from '@mui/material/Box';
import Decoración from '/src/assets/img//Decoración.png'
import Todo from './FormAddTasks/Todo/Todo';
import './FormAddTasks/FormAddTask.css'
import './CreateNewProject.css'
import { useForm } from 'react-hook-form'
import Grid from '@mui/material/Grid';
import TodoForm from '../NewProject/FormAddTasks/TodoForm/TodoForm'
import '../NewProject/FormAddTasks/FormAddTask.css'
import { AuthContext } from '../AuthContext/AuthContext';
import baseURL from '../../apis/index'

//Imágenes del formulario opciones ODS
const options = [
    { imageURL: "https://raw.githubusercontent.com/programateacademy/red-jods-proyectos-frontend/main/src/assets/ODS/pobreza.png", value: "Fin de la Pobreza" },
    {imageURL: "https://raw.githubusercontent.com/programateacademy/red-jods-proyectos-frontend/main/src/assets/ODS/hambre.png", value: "Hambre Cero"},
    { value: "Salud", imageURL: "https://raw.githubusercontent.com/programateacademy/red-jods-proyectos-frontend/main/src/assets/ODS/hambre.png", value: "Salud y Bienestar"},
    {imageURL: "https://raw.githubusercontent.com/programateacademy/red-jods-proyectos-frontend/main/src/assets/ODS/educacion.png", value: "Educación de Calidad" },
    {imageURL: "https://raw.githubusercontent.com/programateacademy/red-jods-proyectos-frontend/main/src/assets/ODS/igualdad.png", value: "Igualdad de Género"},
    {imageURL: "https://raw.githubusercontent.com/programateacademy/red-jods-proyectos-frontend/main/src/assets/ODS/agua.png", value:  "Agua Limpia y Saneamiento" },
    {imageURL: "https://raw.githubusercontent.com/programateacademy/red-jods-proyectos-frontend/main/src/assets/ODS/energia.png", value:  "Energía Asequible y no Contaminante" },
    {imageURL: "https://raw.githubusercontent.com/programateacademy/red-jods-proyectos-frontend/main/src/assets/ODS/trabajo.png", value:  "Trabajo Decente y Crecimiento Económico"  },
    {imageURL: "https://raw.githubusercontent.com/programateacademy/red-jods-proyectos-frontend/main/src/assets/ODS/industria.png", value:  "Industria, Innovación e Infreestructura"},
    {imageURL: "https://raw.githubusercontent.com/programateacademy/red-jods-proyectos-frontend/main/src/assets/ODS/reduccion.png", value:  "Reducción de las desigualdades" },
    {imageURL: "https://raw.githubusercontent.com/programateacademy/red-jods-proyectos-frontend/main/src/assets/ODS/ciudad.png", value:  "Ciudades y Comunidades Sostenibles" },
    {imageURL: "https://raw.githubusercontent.com/programateacademy/red-jods-proyectos-frontend/main/src/assets/ODS/produccion.png", value:  "Producción y Consumo Responsables" },
    {imageURL: "https://raw.githubusercontent.com/programateacademy/red-jods-proyectos-frontend/main/src/assets/ODS/accion.png", value:  "Acción por el Clima"},
    {imageURL: "https://raw.githubusercontent.com/programateacademy/red-jods-proyectos-frontend/main/src/assets/ODS/submarina.png", value:  "Vida Submarina" },
    {imageURL: "https://raw.githubusercontent.com/programateacademy/red-jods-proyectos-frontend/main/src/assets/ODS/vida.png", value:  "Vida de Ecosistemas Terrestres" },
    {imageURL: "https://raw.githubusercontent.com/programateacademy/red-jods-proyectos-frontend/main/src/assets/ODS/paz.png", value:  "Paz, Justicia e Instituciones Sólidas"},
    {imageURL: "https://raw.githubusercontent.com/programateacademy/red-jods-proyectos-frontend/main/src/assets/ODS/alianza.png", value: "Alianzas para Lograr los Objetivos"}
]

export default function NewProject() {

    //Almecenando todas las tareas que se estan creando desde el input 
    const [todos, setTodos] = useState([]);

    //Agregar las tareas, todo es donde se alamcena la tarea
    const addTodo = todo => {
        //Arreglar el texto  en dado caso de que alguien deje espacios
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        //Se guardan cada una de la lista de tareas que se estan almacenando
        setTodos([todo, ...todos])

    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        // Si el item del id es igual al nuevo id que se desea modificar, estara en true, pero si no el nuevo visualViewport, regresara al id antiguo
        setTodos(prev => prev.map(item => item.id === todoId ? newValue : item))

    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    };


    const { register, handleSubmit, formState: { errors } } = useForm({});

    //onSubmit se debe consumir la api

     //Donde se esta almacenando la data
     const { authData } = useContext(AuthContext);
     const { token, email } = authData;
 
     
     const onSubmit = async (data) => {
        //  const newProject = {
        //  ...data,
        //   "task": todos,
        //   "emailUser": email,
        //     ods: [{
        //     url: "ejemplo",
        //     nameOds: "Agua limpia"   
        //  }]

        //  }

        const newProject = {
            "emailUser": "camicardenasp@gmail.com",
            "title": "Proyecto de Camilo",
            "axis": "Paz",
            "ods": [
             {
              "url": "https://sproutsocial.com/es/glossary/profile-picture/",
              "nameOds": "Agua limpia y saneamiento"
             }
            ],
            "description": "un nuevo proyecto",
            "indicator": "Un indicador descriptivo",
            "objective": "mision del proyecto",
            "doc": "https://sproutsocial.com/es/glossary/profile-picture/",
            "task": [
             {
              "name": "Tarea Uno",
              "state": true
             },
             {
              "name": "Tarea Dos",
              "state": false
             }
            ],
            "state": true
           }
         
         
         console.log(newProject)
         console.log(token)
         
         let res = await baseURL.post("/Api/v1/project/", newProject, {
             headers: {
                 Authorization: `Bearer ${token}`
             }
         });
         console.log(res.data)
     }

    //Almacenar las opciones de las ODS
    const [selectedOptions, setSelectedOptions] = useState([])

    //Se ejecuta cuando se selecciona una opción en el select. 
    const handleOptionChange = (e) => {
        const selectedValue = e.target.value;
        const selectedOption = options.find((option) => option.value === selectedValue);
        setSelectedOptions((prevSelectedOptions) => [...prevSelectedOptions, selectedOption]);
        console.log(selectedOptions)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='Container'>
                <div className='firstParForm'>
                    {/* This elements are displayed when screen is medium or large */}
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <h1>Crear Proyecto</h1>
                        <img src={Decoración} alt="" />
                        <p> Diligencia los campos principales para agregar un nuevo proyecto</p>
                    </Box>
                    {/* This elements are displayed when screen is small */}
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                        <h1>Crear Proyecto</h1>
                        <img id='decoration' src={Decoración} alt="" style={{ padding: "0 0 10px 0" }} />
                        <p> Diligencia los campos principales para agregar un nuevo proyecto</p>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <div id='inputs'>
                                <label id='title-form' htmlFor="">Título del Proyecto</label>
                                <input placeholder='Diligencia tu respuesta' id='input-form' type="text" {...register('title', {
                                    required: true,
                                })} />
                                {errors.title?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}
                            </div>

                            <div id='inputs'>
                                <label id='title-form' htmlFor="">Responsable</label>
                                <input id='input-form' placeholder='Diligencia tu respuesta' type="text" {...register('userName', {
                                    required: true,
                                })} />
                                {errors.userName?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}
                            </div>

                            <div id='inputs'>
                                <label id='title-form' htmlFor="">Ejes</label>
                                <select id='input-form' {...register('axis', { required: true, })}>
                                    <option placeholder='Selecciona una de las opciones' />
                                    <option value="Personas">Personas</option>
                                    <option value="Prosperidad">Prosperidad</option>
                                    <option value="Planeta">Planeta</option>
                                    <option value="Paz">Paz</option>
                                    <option value="Alianzas">Alianzas</option>
                                </select>
                                {errors.axis?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}
                            </div>

                            <div id='inputs'>
                                <label id='title-form'>ODS</label>
                                <select onChange={handleOptionChange} id='input-form' {...register('ods', { required: true })}>
                                    <option placeholder='Selecciona una de las opciones' />
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.value}
                                        </option>
                                    ))}
                                    {selectedOptions.map((selectedOption, index) => (
                                    <div key={index}>
                                        <p>{selectedOption.value}</p>
                                        <img src={selectedOption.imageUrl} alt={selectedOption.value} />
                                    </div>
                                ))}
                                </select>
                                
                                {errors.ods?.type === 'required' && <p id='error-msg'>El campo es reqequerido</p>}
                            </div>
                            <div id='inputs'>
                                <label id='title-form' htmlFor="PartnerUrl"> Documento (URL) </label>
                                <input id='input-form' name='PartnerUrl'
                                    type="url"{...register("doc",
                                        {
                                            required: {
                                                value: true

                                            },
                                            pattern: {
                                                value: /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/,
                                                message: 'Ingrese una URL válida',
                                            }
                                        })}
                                />
                                {errors.doc?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}
                            </div>

                        </Grid>
                        <Grid item xs={12} md={6}>

                            <div id='inputs'>
                                <label id='title-form' htmlFor="">Descripción</label>
                                <textarea id='input-form-des' placeholder='Diligencia tu respuesta' type="text" {...register('description', { required: true, })} />
                                {errors.description?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}
                            </div>

                            <div id='inputs'>
                                <label id='title-form' htmlFor="">Indicadores</label>
                                <textarea id='input-form-des' placeholder='Diligencia tu respuesta' type="textarea" {...register('indicator', { required: true, })} />
                                {errors.indicator?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}

                            </div>

                            <div id='inputs'>
                                <label id='title-form' htmlFor="">Objetivos</label>
                                <textarea id='input-form-des' placeholder='Diligencia tu respuesta' type="text" {...register('objective', { required: true })} />
                                {errors.objective?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}
                            </div>

                        </Grid>
                    </Grid>
                </div>


                <div className="thirdPartForm">
                    <div className="Task-title">
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <h2>Tareas</h2>
                            <img id='decoration' src={Decoración} alt="" />
                            <p> Escribe las tareas respectivas del plan de trabajo dentro del recuadro, puedes eliminarlas o editarlas</p>
                        </Box>
                        {/* This elements are displayed when screen is small */}
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <h2>Tareas</h2>
                            <img id='decoration' src={Decoración} alt="" style={{ padding: "0 0 10px 0" }} />
                            <p>Escribe las tareas respectivas del plan de trabajo dentro del recuadro, puedes eliminarlas o editarlas</p>
                        </Box>
                    </div>
                    <div className="to-do">
                        <TodoForm
                            onSubmit={addTodo} />
                        <Todo
                            todos={todos}
                            completeTodo={completeTodo}
                            removeTodo={removeTodo}
                            updateTodo={updateTodo} />
                    </div>

                    <div className="BtnBox">
                        <input id='Btn-form' type="submit" value="Enviar" />
                    </div>
                </div>
            </div>

        </form>
    )
}


