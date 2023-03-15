//Ximena
import React from "react";
import "./FormPart2.css";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";

/**debo mejorar esta parte */
export default function FormPart2() {
  const [tituloProyecto, setTituloProyecto] = useState(" ");
  const [responsable, setResponsable] = useState(" ");
  const [selectedItems, setSelectedItems] = useState([""]);
  const [description, setDescripcion] = useState(" ");
  const [indicadores, setIndicadores] = useState(" ");
  const [objetivos, setObjetivos] = useState(" ");
  const [answer, setAnswer] = useState('');   
  const [opciones, setOpciones] = useState(['finDeLaPobreza', 'hambreCero', 'saludYBienestar', 'educacionDeCalidad', 'igualdadDeGenero', 'aguaLImpiaySaneamiento', 'energiaAsequible', 'trabajoDecente', 'industriaInnovacion', 'reduccionDeLasDesigualdades', 'ciudadesyComunidades', 'producionyConsumo', 'accionPorElAgua', 'vidaSubmarina', 'vidaDeEcosistemasTerrestres', 'pazJusticia', 'alianzasParaLograrObjetivos']);
  
 
  const handletituloProyectoChange = (event) => {
    setTituloProyecto(event.target.value);
  };

  const handleResponsableChange = (event) => {
    setResponsable(event.target.value);
  };

  const handleItemsChange = (event) => {
    const { value } = event.target;
    setSelectedItems(value);
  };

  const handleOpcionesChange = (event) =>{
    const {value} = event.target;
    setOpciones(value);
  };

  const handDescripcion = (event) => {
    setDescripcion(event.target.value);
  };

  const handIndicadores = (event) => {
    setIndicadores(event.target.value);
  };

  const handObjetivos = (event) => {
    setObjetivos(event.target.value);
  };

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleClick = () => {
    console.log(answer);
  };

  return (
    <div>
      <div className="Form2Container">
        <form type="text" value={answer} onChange={handleChange}>
        
          <div className="part1">
            <div>
              <TextField
                onClick={handleClick}
                value={tituloProyecto}
                onChange={handletituloProyectoChange}
                label="Titulo del Proyecto"
                
              />
            </div>
            <div>
              <TextField
                onClick={handleClick}
                value={responsable}
                onChange={handleResponsableChange}
                label="Responsable"
              />
            </div>

            <FormControl >
              <InputLabel id="select-outlined-label">Ejes</InputLabel>
              <Select
                
                multiple
                value={selectedItems}
                onClick={handleClick}
                onChange={handleItemsChange}
                label="selectedItems"
              >
                <MenuItem value="personas">Personas</MenuItem>
                <MenuItem value="prosperidad">Prosperidad</MenuItem>
                <MenuItem value="planeta">Planeta</MenuItem>
                <MenuItem value="paz">Paz</MenuItem>
                <MenuItem value="alianzas">Alianzas</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="select-outlined-label">ODS</InputLabel>
              <Select
                multiple
                value={opciones}
                onClick={handleClick}
                onChange={handleOpcionesChange}
                label="selectedItems"
              >
                <MenuItem value="finDeLaPobreza">Fin de la Pobreza</MenuItem>
                <MenuItem value="hambreCero">Hambre Cero</MenuItem>
                <MenuItem value="saludYBienestar">Salud y Bienestar</MenuItem>
                <MenuItem value="educacionDeCalidad">
                  Educacion de Calidad
                </MenuItem>
                <MenuItem value="igualdadDeGenero">Igualdad de Genero</MenuItem>
                <MenuItem value="aguaLImpiaySaneamiento">
                  Agua Limpia y Saneamiento
                </MenuItem>
                <MenuItem value="energiaAsequible">
                  Energia Asequible y No Contaminante{" "}
                </MenuItem>
                <MenuItem value="trabajoDecente">
                  Trabajo Decente y Crecimiento Economico
                </MenuItem>
                <MenuItem value="industriaInnovacion">
                  Industria Innovacion e Infraestructura
                </MenuItem>
                <MenuItem value="reduccionDeLasDesigualdades">
                  Reducción de las Desigualdades
                </MenuItem>
                <MenuItem value="ciudadesyComunidades">
                  Ciudades y Comunidades Sostenibles
                </MenuItem>
                <MenuItem value="producionyConsumo">
                  Producción y Consumo Responsables
                </MenuItem>
                <MenuItem value="accionPorElAgua">Acción por el Agua</MenuItem>
                <MenuItem value="vidaSubmarina">Vida Submarina</MenuItem>
                <MenuItem value="vidaDeEcosistemasTerrestres">
                  Vida de Ecosistemas Terrestres
                </MenuItem>
                <MenuItem value="pazJusticia">
                  Paz, Justicia e Instituciones Solidas
                </MenuItem>
                <MenuItem value="alianzasParaLograrObjetivos">
                  Alianzas para lograr los Objetivos
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="part2">
            <div>
              <TextField
                onClick={handleClick}
                value={description}
                onChange={handDescripcion}
                id="descripcion"
                label="Descripción"
              />
            </div>
            <div>
              <TextField
                onClick={handleClick}
                value={indicadores}
                onChange={handIndicadores}
                label="Indicadores"
              />
            </div>
            <div>
              <TextField 
                onClick={handleClick}
                value={objetivos}
                onChange={handObjetivos}
                label="Objetivos"
              />
            </div>
          </div>
         
          <Button variant="contained" color="primary" onClick={handleClick}>Enviar</Button>
        </form>
      </div>
      <div className="part3">
        <h1>Adjuntar Documentación</h1>
      </div>
    </div>
  );
}
