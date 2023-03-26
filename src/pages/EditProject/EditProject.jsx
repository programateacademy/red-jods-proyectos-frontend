import React, { useState, useContext} from 'react'
import Box from '@mui/material/Box';
import Decoración from '/src/assets/img//Decoración.png'
import Todo from '../../components/FormAddTasks/Todo/Todo';
import '../../components/FormAddTasks/FormAddTask.css'
import './EditProject.css'
import { useForm } from 'react-hook-form'
import Grid from '@mui/material/Grid';
import TodoForm from '../../components/FormAddTasks/TodoForm/TodoForm'
import baseURL from '../../services/api/index'
import odsOptions from '../CreateProject/ods'
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';

export default function EditProject() {

    //Donde se esta almacenando la data
    const { authData }=useContext(AuthContext);
    const { token, email, id } = authData;

    const [proyectoData, setProyectoData]=useState(id);

    //Almecenando todas las tareas que se estan creando desde el input 
    const [todos, setTodos] = useState([]);

    //Agregar las tareas, todo es donde se alamcena la tarea
    const addTodo = todo => {
        //Arreglar el texto  en dado caso de que alguien deje espacios
        if (!todo.name || /^\s*$/.test(todo.name)) {
            return
        }
        //Se guardan cada una de la lista de tareas que se estan almacenando
        setTodos([todo, ...todos])
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.name || /^\s*$/.test(newValue.name)) {
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

    const { register, watch, handleSubmit, formState: { errors } } = useForm({});

        // Hook de react router dom para navegar al darle submit
    const navigate=useNavigate();

    const onSubmit = async (data) => {
        const tareas=todos.map(({ name, state }) => ({ name, state }));
        const selectedValues=data.ods; // Array de valores seleccionados en el campo "ods"
        const filteredOptions=odsOptions.filter(option => selectedValues.includes(option.value)); // Filtrar opciones que coinciden con los valores seleccionados
        const selectedOptions=filteredOptions.map(option => ({ nameOds: option.nameOds, url: option.url })); // Crear nuevo arreglo solo con los valores de "nameOds" y "url" de las opciones seleccionadas
        const newProject = {
        ...proyectoData,
        "ods": selectedOptions,
        }        
        let res=await baseURL.put(`/Api/v1/project/${id._id}`, newProject, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        swal({
            title: "Edición de Proyecto",
            text: `Has editado el proyecto ${res.data.title} correctamente!`,
            icon: "success",
            button: "Aceptar"
        });
        if (res.data._id) {
            navigate("/myprojects");
        }
    }

    return (
    <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='Container'>
                    <div className='firstParForm'>
                        {/* This elements are displayed when screen is medium or large */}
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <h1>Editar Información Proyecto </h1>
                            <img src={Decoración} alt="" />
                            <p> Diligencia todos los campos principales <b>(SIN TILDES)</b> y con una url válida para agregar un nuevo proyecto. Puedes agregar varias tareas específicas para el proyecto antes de darle enviar o puedes agregarlas más adelante.</p>
                        </Box>
                        {/* This elements are displayed when screen is small */}
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <h1>Editar Información del Proyecto </h1>
                            <img id='decoration' src={Decoración} alt="" style={{ padding: "0 0 10px 0" }} />
                            <p> Diligencia todos los campos principales <b>(SIN TILDES)</b> y con una url válida para agregar un nuevo proyecto. Puedes agregar varias tareas específicas para el proyecto antes de darle enviar o puedes agregarlas más adelante.</p>
                        </Box>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <div id='inputs'>
                                    <label id='title-form' htmlFor="">Título del Proyecto</label>
                                    <input placeholder='Diligencia tu respuesta' id='input-form' type="text" {...register('title', {
                                        required: true,
                                    })} 
                                    value={proyectoData.title}
                                    onChange={e => setProyectoData({ ...proyectoData, title: e.target.value })}
                                    />
                                    {errors.title?.type==='required'&&<p id='error-msg'>El campo es requerido</p>}
                                </div>
                                <div id='inputs'>
                                    <label id='title-form' htmlFor="">Eje Principal</label>
                                    <select id='input-form' {...register('axis', { required: true, })}
                                        value={proyectoData.axis}
                                        onChange={e => setProyectoData({ ...proyectoData, axis: e.target.value })}>
                                        <option placeholder='Selecciona una de las opciones' />
                                        <option value="Personas">Personas</option>
                                        <option value="Prosperidad">Prosperidad</option>
                                        <option value="Planeta">Planeta</option>
                                        <option value="Paz">Paz</option>
                                        <option value="Alianzas">Alianzas</option>
                                    </select>
                                    {errors.axis?.type==='required'&&<p id='error-msg'>El campo es requerido</p>}
                                </div>
                                <div id='inputs'>
                                    <label id='title-form' htmlFor="">ODS (Utiliza ctrl / cmd para seleccionar varios)</label>
                                    <select className='ods' id='input-form' {...register('ods', { required: true })} multiple>
                                        <option value="Pobreza">Fin de la Pobreza</option>
                                        <option value="Hambre">Hambre Cero</option>
                                        <option value="Salud">Salud y Bienestar</option>
                                        <option value="Educación">Educación de Calidad</option>
                                        <option value="Igualdad">Igualdad de Género</option>
                                        <option value="Agua">Agua Limpia y Saneamiento</option>
                                        <option value="Energia">Energía Asequible y no Contaminante</option>
                                        <option value="Trabajo">Trabajo Decente y Crecimiento Económico</option>
                                        <option value="Industria">Industria, Innovación e Infreestructura</option>
                                        <option value="Desigualdades">Reducción de las desigualdades</option>
                                        <option value="Comunidades">Ciudades y Comunidades Sostenibles</option>
                                        <option value="Produccion">Producción y Consumo Responsables</option>
                                        <option value="Clima">Acción por el Clima</option>
                                        <option value="Submarina">Vida Submarina</option>
                                        <option value="Ecosistemas">Vida de Ecosistemas Terrestres</option>
                                        <option value="Paz">Paz, Justicia e Instituciones Sólidas</option>
                                        <option value="Alianzas">Alianzas para Lograr los Objetivos</option>
                                    </select>
                                    {errors.ods?.type==='required'&&<p id='error-msg'>El campo es reqequerido</p>}
                                </div>
                                <div id='inputs'>
                                    <label id='title-form' htmlFor="PartnerUrl"> Documento (URL) </label>
                                    <input id='input-form' name='PartnerUrl'
                                        value={proyectoData.doc}
                                        onChange={e => setProyectoData({ ...proyectoData, doc: e.target.value })}
                                        type="url"{...register("doc",
                                            {
                                                required: {
                                                    value: true
                                                },
                                                pattern: {
                                                    value: /^(http(s)?:\/\/)?[\w.-]+\.[a-zA-Z]{2,}(\/\S*)?$/,
                                                    message: 'Ingrese una URL válida',
                                                }
                                            })}
                                    />
                                    {errors.doc?.type==='required'&&<p id='error-msg'>El campo es requerido</p>}
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div id='inputs'>
                                    <label id='title-form' htmlFor="">Descripción</label>
                                    <textarea id='input-form-des' placeholder='Diligencia tu respuesta' type="text" {...register('description', { required: true, })} 
                                        value={proyectoData.description}
                                        onChange={e => setProyectoData({ ...proyectoData, description: e.target.value })}
                                    />
                                    {errors.description?.type==='required'&&<p id='error-msg'>El campo es requerido</p>}
                                </div>
                                <div id='inputs'>
                                    <label id='title-form' htmlFor="">Indicadores</label>
                                    <textarea id='input-form-des' placeholder='Diligencia tu respuesta' type="textarea" {...register('indicator', { required: true, })} 
                                        value={proyectoData.indicator}
                                        onChange={e => setProyectoData({ ...proyectoData, indicator: e.target.value })}
                                    />
                                    {errors.indicator?.type==='required'&&<p id='error-msg'>El campo es requerido</p>}
                                </div>
                                <div id='inputs'>
                                    <label id='title-form' htmlFor="">Objetivos</label>
                                    <textarea id='input-form-des' placeholder='Diligencia tu respuesta' type="text" {...register('objective', { required: true })} 
                                        value={proyectoData.objective}
                                        onChange={e => setProyectoData({ ...proyectoData, objective: e.target.value })}/>
                                    {errors.objective?.type==='required'&&<p id='error-msg'>El campo es requerido</p>}
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="BtnBox">
                        <input id='Btn-form' type="submit" value="Enviar" />
                    </div>
                </div>
            </form>
            
    </>
    )
}