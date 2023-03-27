import React, { useState, useEffect, useContext } from 'react';
import BaseURL from '../../services/api/index';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';
import swal from 'sweetalert';
import './EditTasks.css'
import Decoracion from '../../assets/img/Decoración.png'
import DeleteButton from '/src/assets/img/DeleteButton.svg'



function EditTasks() {

    //Donde se esta almacenando la data
    const { authData, setAuthData }=useContext(AuthContext);
    const { token, role, email, id }=authData;
    // Hook de react router dom para navegar al darle submit
    const navigate=useNavigate();

    const [tasks, setTasks]=useState(id.task);

    const handleToggle=(index) => {
        const newTasks=[...tasks];
        newTasks[index].state=!newTasks[index].state;
        setTasks(newTasks);
    };

    const handleAddTask=() => {
        setTasks([...tasks, { name: '', state: false }]);
    };

    const handleRemoveTask=(index) => {
        const newTasks=[...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const handleSave=async () => {
        const dataToSend={
            ...id,
            "task": tasks,
        }
        console.log(dataToSend);

        try {
            const res=await BaseURL.put(`/Api/v1/project/${id._id}`, dataToSend, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setAuthData({ ...authData, id: res.data });
            navigate("/viewproject");
            swal({
                title: "Edición de Tareas",
                text: `Has editado las tareas del proyecto ${res.data.title} correctamente!`,
                icon: "success",
                button: "Aceptar"
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
        <div className="InfoProject">
        <div className="title">
            <h1>{id.title}</h1>
            <div style={{ display: "flex", flexDirection: "row" }}>
            <img id='imgProject' src={id.ods[0].url} alt="" style={{ maxHeight: "200px", maxWidth: "200px" }} />
            <div style={{ margin: "40px" }}>
            </div>
            </div>
        </div>
        <div className="sub-title">
            <h2 style={{ marginTop: "30px" }}>Información </h2>
            <img id='decoration'src={Decoracion} alt=""/>
        </div>
    </div>
            <div>
                {tasks.map((task, index) => (
                    <div key={index} className="tasks">
                        <input
                            type="checkbox"
                            checked={task.state}
                            onChange={() => handleToggle(index)}
                            className="styled-checkbox"
                        />
                        <input
                            type="text"
                            value={task.name}
                            onChange={(e) => {
                                const newTasks=[...tasks];
                                newTasks[index].name=e.target.value;
                                setTasks(newTasks);
                            }}
                            className="styled-input"
                        />
                        <button onClick={() => handleRemoveTask(index)} className="styled-delete-button"><img src={DeleteButton} alt="" /></button>
                    </div>
                ))}
                <div className='buttons'>
                    <button onClick={handleAddTask} className="styled-button">Agregar tarea</button>
                    <button onClick={handleSave} className="styled-button">Guardar</button>
                </div>
                
            </div>
        </>
        
    );
}

export default EditTasks