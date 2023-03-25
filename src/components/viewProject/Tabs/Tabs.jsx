import React, { useState } from 'react'
import '../../../styles/Tabs.css'
import Decoracion from '../../../assets/img/Decoración.png'

function Tabs() {

  const URLdoc = 'https://www.figma.com'

  const [index, setIndex] = useState(0)
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
          <p id='p-Tab'>Lorem Ipsum</p>
        </div>
        <div className="objectives">
          <h3 id='Tl-Tab'>Objetivos</h3>
          <p id='p-Tab'>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="axis">
          <h3 id='Tl-Tab'>Indicadores</h3>
          <p id='p-Tab'>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>

      <div className="tabContent" hidden={index != 1}>
        <div className="axis">
          <h3 id='Tl-Tab'>Descripción</h3>
          <p id='p-Tab'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="doc">
          <h3 id='Tl-Tab'>URL</h3>
          <p id='URL'>{URLdoc}</p>
        </div>
      </div>
      <div className="tabContent" hidden={index != 2}>
        <div className="task">
          
        </div>
      </div>
    </div>
  )
}

export default Tabs