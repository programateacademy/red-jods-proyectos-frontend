import React from 'react'
import Box from '@mui/material/Box';
import Decoración from '/src/assets/img//Decoración.png'
import TodoList from './FormAddTasks/TodoList/TodoList';
import './FormAddTasks/FormAddTask.css'
import './CreateNewProject.css'
import { useForm } from 'react-hook-form'
import Grid from '@mui/material/Grid';


// //Conectar con el backend
// import { AuthContext } from '../../AuthContext/AuthContext'; //Guardar las variables que los componentes vana usar
// import { useContext } from 'react'; //hook que usa el contexto
// //importar la direccion del backend
// import users from "../../../apis/index";


export default function NewProject() {

    //Using AuthContext information
    // const { authData }=useContext(AuthContext);
    // const { token, role, email }=authData; //desestructura para guardar en variables

    //  //This interacts with API and Create one Project
    //  const addProject=async (user) => { //user es el arr donde se alamacena la información del proyecto
    //     const { data }=await users.post("/Api/v1/project", { //envio token 
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     }, user); 
    //     //users api import users from "../../../apis/index"; dirección del backend (newproject)

    //     setUsersList((oldList) => [...oldList, data]);
    // };

    const { register, handleSubmit, formState: { errors } } = useForm({});

    //Donde se esta almacenando la data
    const onSubmit = (data) => {
        console.log(data);
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
                                <label id='title-form' htmlFor="">ODS</label>
                                <select id='input-form' {...register('ods', { required: true })}>
                                    <option placeholder='Selecciona una de las opciones' />
                                    <option value="Pobreza">Fin de la Pobreza</option>
                                    <option value="Hambre">Hambre Cero</option>
                                    <option value="Salud">Salud y Bienestar</option>
                                    <option value="Educación">Educación de Calidad</option>
                                    <option value="Igualdad">Igualdad de Género</option>
                                    <option value="Agua">Agua Limpia y Saneamiento</option>
                                    <option value="Energia">Energía Asequible y no Contaminante</option>
                                    <option value="Trabajo">Trabajo Decenter y Crecimiento Económico</option>
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
                        <TodoList />
                    </div>

                    <div className="BtnBox">
                        <input id='Btn-form' type="submit" value="Enviar" />
                    </div>
                </div>
                </div>

            </form>
    )
}


