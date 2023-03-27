import React, { useState } from 'react'
import './Tabs.css'
import Decoracion from '../../../assets/img/Decoración.png'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import ListApp from '../../../components/ListApp/ListApp'
import { useNavigate } from "react-router-dom";


function Tabs() {
  const URLdoc = 'https://www.figma.com'
  const [index, setIndex] = useState(0)
  //Donde se esta almacenando la data
  const { authData }=useContext(AuthContext);
  const { token, role, email, id }=authData;
  // Hook de react router dom para navegar al darle submit
  const navigate=useNavigate();

  const handleEditTask=() => {
    navigate('/edittasks');
  };

  return (
    <div className="Tabs">
      <div className="tabsList">
        <div className={`tabHead ${index === 0 ? 'active' : null}`} onClick={() => { setIndex(0) }}>
          <p id='sub-Ttl'>Datos</p>
        </div>
        <div className={`tabHead ${index === 1 ? 'active' : null}`} onClick={() => { setIndex(1) }}>
          <p id='sub-Ttl'>Descripción</p>
        </div>
        <div className={`tabHead ${index === 2 ? 'active' : null}`} onClick={() => { setIndex(2) }}>
          <p id='sub-Ttl'>Tareas</p>
        </div>
      </div>
      <div className="tabContent" hidden={index != 0}>
        <div className="work">
          <h3 id='Tl-Tab'>Línea de trabajo</h3>
          <p id='p-Tab'>{id.axis}</p>
        </div>
        <div className="objectives">
          <h3 id='Tl-Tab'>Objetivos</h3>
          <p id='p-Tab'>{id.objective}</p>
        </div>
        <div className="axis">
          <h3 id='Tl-Tab'>Indicadores</h3>
          <p id='p-Tab'>{id.indicator}</p>
        </div>
      </div>
      <div className="tabContent" hidden={index != 1}>
        <div className="axis">
          <h3 id='Tl-Tab'>Descripción</h3>
          <p id='p-Tab'>{id.description}</p>
        </div>
        <div className="doc">
          <h3 id='Tl-Tab'>URL</h3>
          <p id='URL'>{id.doc}</p>
        </div>
      </div>
      <div className="tabContent" hidden={index != 2}>
        <div className="task">
          {id.task.map((tarea) => {
            return (
              <div className="axis">
                  <h3 key={tarea._id} id='Tl-Tab'>{tarea.name} - {tarea.state? 'Completada':'Incompleta'}</h3>
              </div>
            );
          })}
          {role!=='user'&&(
            <button onClick={handleEditTask}>Editar tarea</button>
          )}
        </div>
      </div>
    </div>
  )
}
export default Tabs