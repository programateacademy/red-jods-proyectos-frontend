import React from 'react'
import './ViewProject.css'
import imagenCard from '../../assets/img/Imagen-card.png'
import Tabs from './Tabs/Tabs'
import Decoracion from '../../assets/img/Decoración.png'

function viewProject() {
  return (
    <div className="InfoProject">
      <div className="title">
        <h1>Nombre del proyecto</h1>
        <img id='imgProject' src={imagenCard} alt="" />
      </div>
      <div className="sub-title">
        <h2>Información </h2>
        <img id='decoration'src={Decoracion} alt=""/>
      </div>

      <div className="Tabs">
        <Tabs/>
      </div>
    </div>
  )
}

export default viewProject