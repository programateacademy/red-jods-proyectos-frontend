import React, { useState, useEffect, useContext } from 'react';
import BaseURL from '../../services/api/index';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';
import swal from 'sweetalert';


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
        <div>
            {tasks.map((task, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        checked={task.state}
                        onChange={() => handleToggle(index)}
                    />
                    <input
                        type="text"
                        value={task.name}
                        onChange={(e) => {
                            const newTasks=[...tasks];
                            newTasks[index].name=e.target.value;
                            setTasks(newTasks);
                        }}
                    />
                    <button onClick={() => handleRemoveTask(index)}>Eliminar</button>
                </div>
            ))}
            <button onClick={handleAddTask}>Agregar tarea</button>
            <button onClick={handleSave}>Guardar</button>
        </div>
    );
}

export default EditTasks