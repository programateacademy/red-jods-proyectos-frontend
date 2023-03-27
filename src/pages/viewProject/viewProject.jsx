import React from 'react'
import './ViewProject.css'
import imagenCard from '../../assets/img/Imagen-card.png'
import Tabs from './Tabs/Tabs'
import Decoracion from '../../assets/img/Decoración.png'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Percentage from '../../components/Percentage/Percentage'

function viewProject() {
  //Donde se esta almacenando la data
  const { authData }=useContext(AuthContext);
  const { token, email, id }=authData;

  return (
    <div className="InfoProject">
      <div className="title">
        <h1>{id.title}</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img id='imgProject' src={id.ods[0].url} alt="" style={{ maxHeight: "200px", maxWidth: "200px" }} />
          <div style={{ margin: "40px" }}>
            <Percentage task={id.task} />
          </div>
        </div>
      </div>
      <div className="sub-title">
        <h2 style={{ marginTop: "30px" }}>Información </h2>
        <img id='decoration'src={Decoracion} alt=""/>
      </div>
      <div className="Tabs">
        <Tabs/>
      </div>
    </div>
  )
}
export default viewProject