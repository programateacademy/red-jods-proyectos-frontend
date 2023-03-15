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
import { useState, useEffect } from "react";


export default function FormPart2() {
  const [formState, setFormState] = useState({
    tituloProyecto: "",
    responsable: "",
    selectedItems: [],
    description: "",
    indicadores: "",
    objetivos: "",
    answer: "",
    opciones: [  ],
    selectOption:"" // nueva propiedad para almacenar la opción seleccionada
  });

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSelectChange = (event) => {
    setFormState({ ...formState, selectOption: event.target.value });
  };

  const handleClick = () => {
    console.log(formState.tituloProyecto);
    console.log(formState.responsable);
    console.log(formState.selectedItems);
    console.log(formState.description);
    console.log(formState.indicadores);
    console.log(formState.objetivos);
    console.log(formState.answer);
    console.log(formState.opciones);
  };

  useEffect(() => {
    console.log(formState.selectOption);
  }, [formState.selectOption]);

  return (
    <div>
      <div className="Form2Container">
        <form >
        
          <div className="part1">
            <div>
              <TextField
                name="tituloProyecto"
                value={formState.tituloProyecto}
                onChange={handleChange}
                label="Titulo del Proyecto"
                
              />
            </div>
            <div>
              <TextField
                name="responsable"
                value={formState.responsable}
                onChange={handleChange}
                label="Responsable"
              />
            </div>

            <FormControl >
              <InputLabel id="select-outlined-label">Ejes</InputLabel>
              <Select
                name="selectedItems"
                multiple
                value={formState.selectedItems}
                onChange={handleSelectChange}
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
                name="opciones"
                multiple
                value={formState.opciones}
                onChange={handleSelectChange}
                label="opciones"
              >
                <MenuItem value="finDeLaPobreza">Fin de la Pobreza</MenuItem>
                <MenuItem value="hambreCero">Hambre Cero</MenuItem>
                <MenuItem value="saludyBienestar">Salud y Bienestar</MenuItem>
                <MenuItem value="educacionDeCalidad">Educación de Calidad</MenuItem>
                <MenuItem value="igualdadDeGenero">Igualdad de Genero</MenuItem>
                <MenuItem value="aguaLimpiaySaneamiento">Agua Limpia y Saneamiento</MenuItem>
                <MenuItem value="energiaAsequibleyNoContaminante">Energia Asequible y no Contaminante</MenuItem>
                <MenuItem value="trabajo DecenteyCrecimientoEconomico">Trabajo Decente y Crecimiento Economico</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="part2">
            <div>
              <TextField
                name="description"
                value={formState.description}
                onChange={handleChange}
                label="Descripcion del proyecto"
              />
            </div>
            <div>
              <TextField
                name="indicadores"
                value={formState.indicadores}
                onChange={handleChange}
                label="Indicadores"
              />
            </div>
            <div>
              <TextField 
                name="objetivos"
                value={formState.objetivos}
                onChange={handleChange}
                label="Objetivos del proyecto"
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
