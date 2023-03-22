import React from 'react'
import Box from '@mui/material/Box';
import Decoración from '/src/assets/img//Decoración.png'
import TodoList from './FormAddTasks/TodoList/TodoList';
import FormPart1 from './FormPart1/FormPart1';
import './FormAddTasks/FormAddTask.css'
import { Button } from "@mui/material";
import './CreateNewProject.css' 
import Doc from './attachDoc/attachDoc'


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
    


    const handleClick = () => {

    };

    return (
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
                    <img id='decoration' src={Decoración} alt="" style={{ padding: "0 0 10px 0"}} />
                    <p> Diligencia los campos principales para agregar un nuevo proyecto</p>
                </Box>
                <FormPart1 />
            </div>

            <div className="secondPartForm">
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <h2 >Adjuntar documentos</h2>
                    <img src={Decoración} alt="" />
                    <p>Adjunta el URL de los documentos e imágenes necesarias del proyecto</p>
                </Box>
                {/* This elements are displayed when screen is small */}
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <h2>Adjuntar documentos</h2>
                    <img id='decoration' src={Decoración} alt="" style={{ padding: "0 0 10px 0"}} />
                    <p>Adjunta las URL de los documentos e imágenes necesarias del proyecto</p>
                </Box>
                <Doc/>

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
                        <img id='decoration' src={Decoración} alt="" style={{ padding: "0 0 10px 0"}} />
                        <p>Escribe las tareas respectivas del plan de trabajo dentro del recuadro, puedes eliminarlas o editarlas</p>
                    </Box>
                </div>
                <div className="to-do">
                    <TodoList />
                </div>
                <div className="BtnBox">
                    <Button id='Btn' variant="contained" color="primary" onClick={handleClick}>Enviar</Button>
                </div>
            </div>


        </div>
    )
}


