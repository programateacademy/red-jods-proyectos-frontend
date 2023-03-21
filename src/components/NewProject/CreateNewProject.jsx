import React from 'react'
import Box from '@mui/material/Box';
import Decoración from '/src/assets/img//Decoración.png'
import TodoList from './FormAddTasks/TodoList/TodoList';
import FormPart1 from './FormPart1/FormPart1';
import './FormAddTasks/FormAddTask.css'
import { Button } from "@mui/material";


export default function NewProject() {

    const handleClick = () => {

    };

    return (
        <div>

            <div className='firstParForm'>
                {/* This elements are displayed when screen is medium or large */}
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <h1 style={{ padding: "40px 40px 0px 40px" }}>Crear Proyecto</h1>
                    <img src={Decoración} alt="" style={{ padding: "0 0 15px 40px" }} />
                    <p style={{ padding: "5px 0px 10px 40px" }}> Diligencia los campos principales para agregar un nuevo proyecto</p>
                </Box>
                {/* This elements are displayed when screen is small */}
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <h1 style={{ padding: "10px 10px 0px 10px" }}>Crear Proyecto</h1>
                    <img src={Decoración} alt="" style={{ padding: "0 0 10px 10px", maxWidth: "280px" }} />
                    <p id='p-task'> Diligencia los campos principales para agregar un nuevo proyecto</p>
                </Box>
                <FormPart1 />
            </div>

            <div className="secondPartForm">
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <h2 style={{ padding: "40px 40px 0px 40px" }}>Adjuntar documentos</h2>
                    <img src={Decoración} alt="" style={{ padding: "0 0 15px 40px" }} />
                    <p style={{ padding: "5px 0px 10px 40px" }}>Adjunta el URL de los documentos e imágenes necesarias del proyecto</p>
                </Box>
                {/* This elements are displayed when screen is small */}
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <h2 style={{ padding: "10px 0px 0px 10px" }}>Adjuntar documentos</h2>
                    <img src={Decoración} alt="" style={{ padding: "0 0 10px 10px", maxWidth: "280px" }} />
                    <p id='p-task'>Adjunta las URL de los documentos e imágenes necesarias del proyecto</p>
                </Box>

            </div>

            <div className="thirdPartForm">
                <div className="Task-title">
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <h2 style={{ padding: "40px 40px 0px 40px" }}>Tareas</h2>
                        <img src={Decoración} alt="" style={{ padding: "0 0 15px 40px" }} />
                        <p style={{ padding: "5px 0px 10px 40px" }}> Escribe las tareas respectivas del plan de trabajo dentro del recuadro, puedes eliminarlas o editarlas</p>
                    </Box>
                    {/* This elements are displayed when screen is small */}
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                        <h2 style={{ padding: "10px 0px 0px 10px" }}>Tareas</h2>
                        <img src={Decoración} alt="" style={{ padding: "0 0 10px 10px", maxWidth: "280px" }} />
                        <p id='p-task'>Escribe las tareas respectivas del plan de trabajo dentro del recuadro, puedes eliminarlas o editarlas</p>
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


