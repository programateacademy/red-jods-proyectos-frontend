import React from 'react'
import Box from '@mui/material/Box';
import Decoración from '/src/assets/img//Decoración.png'
import TodoList from './FormAddTasks/TodoList/TodoList';

export default function NewProject() {
    return (
        <div>
            {/* This elements are displayed when screen is medium or large */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <h1 style={{ padding: "40px 40px 0px 40px" }}>Crear Proyecto</h1>
                <img src={Decoración} alt="" style={{ padding: "0 0 40px 40px" }} />
            </Box>

            {/* This elements are displayed when screen is small */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <h1 style={{ padding: "10px 10px 0px 10px" }}>Crear Proyecto</h1>
                <img src={Decoración} alt="" style={{ padding: "0 0 10px 10px", maxWidth: "280px" }} />
            </Box>


            

            <div className="Task-title">
            <Box  sx={{ display: { xs: 'none', md: 'block' } }}>
                <h2 style={{ padding: "20px 0px 0px 40px" }}>Tareas</h2>
                <img src={Decoración} alt="" style={{ padding: "0 0 15px 40px" }}/>
                <p style={{ padding: "5px 0px 10px 40px" }}> Escribe las tareas respectivas del plan de trabajo dentro del recuadro, puedes eliminarlas o editarlas</p>
            </Box>
            {/* This elements are displayed when screen is small */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <h2 style={{ padding: "10px 0px 0px 10px" }}>Tareas</h2>
                <img src={Decoración} alt="" style={{ padding: "0 0 10px 10px", maxWidth: "280px" }}/>
                <p id='p-task'>Escribe las tareas respectivas del plan de trabajo dentro del recuadro, puedes eliminarlas o editarlas</p>
            </Box>
            </div>
            <div className="to-do">
                <TodoList/>
            </div>
    
            
        </div>
    )
}


