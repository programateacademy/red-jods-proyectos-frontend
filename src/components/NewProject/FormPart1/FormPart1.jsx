import React from "react";
import "./FormPart1.css";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";


export default function FormPart1() {
  const [formState, setFormState] = useState({
    tituloProyecto: "",
    responsable: "",
    selectedItems: [],
    description: "",
    indicadores: "",
    objetivos: "",
    answer: "",
    opciones: [],
    selectOption: "", // nueva propiedad para almacenar la opción seleccionada
  });

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSelectChange = (event) => {
    setFormState({ ...formState, selectOption: event.target.value });
  };



  return (
   
      <form className="Form" >

        
        <div id='input' className="TitleProject">
          {/* Títilo de proyecto */}
          <TextField
            name="tituloProyecto"
            value={formState.tituloProyecto}
            onChange={handleChange}
            label="Título del Proyecto"
            sx={{
              width: '300px',
              '@media (min-width: 768px)': {
                width: '600px',
              },
              '@media (min-width: 992px)': {
                width: '700px',
              },
              '@media (min-width: 1200px)': {
                width: '800px',
              },
              '@media (min-width: 1440px)': {
                width: '1200px',
              },
            }}
            
          />
        </div>

        <div className="Responsable">
          {/* Responsable del proyecto */}
          <TextField
            name="responsable"
            value={formState.responsable}
            onChange={handleChange}
            label="Responsable"
            sx={{
              width: '300px',
              '@media (min-width: 768px)': {
                width: '600px',
              },
              '@media (min-width: 992px)': {
                width: '700px',
              },
              '@media (min-width: 1200px)': {
                width: '800px',
              },
              '@media (min-width: 1440px)': {
                width: '1200px',
              },
            }}
          />
        </div>

        <div className="Description">
          {/* Descrioción del Proyecto */}
          <TextField
            variant="outlined"
            name="description"
            value={formState.description}
            onChange={handleChange}
            label="Descripcion del proyecto"
            sx={{
              width: '300px',
              '@media (min-width: 768px)': {
                width: '600px',
              },
              '@media (min-width: 992px)': {
                width: '700px',
              },
              '@media (min-width: 1200px)': {
                width: '800px',
              },
              '@media (min-width: 1440px)': {
                width: '1200px',
              },
            }}
            multiline
            rows={3}
          />
        </div>

        <div className="Indicators">
          {/* Indicadores */}
          <TextField
            variant="outlined"
            name="indicadores"
            value={formState.indicadores}
            onChange={handleChange}
            label="Indicadores"
            sx={{
              width: '300px',
              '@media (min-width: 768px)': {
                width: '600px',
              },
              '@media (min-width: 992px)': {
                width: '700px',
              },
              '@media (min-width: 1200px)': {
                width: '800px',
              },
              '@media (min-width: 1440px)': {
                width: '1200px',
              },
            }}
            multiline
            rows={3}
          />
        </div> 

        <div className="Goals">
          {/* Objetivos */}
          <TextField
            variant="outlined"
            name="objetivos"
            value={formState.objetivos}
            onChange={handleChange}
            label="Objetivos del proyecto"
            sx={{
              width: '300px',
              '@media (min-width: 768px)': {
                width: '600px',
              },
              '@media (min-width: 992px)': {
                width: '700px',
              },
              '@media (min-width: 1200px)': {
                width: '800px',
              },
              '@media (min-width: 1440px)': {
                width: '1200px',
              },
            }}
            multiline
            rows={3}
          />
        </div>

        
        <div className="multipleOptions">
          {/* Ejes */}
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              Ejes
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="selectedItems"
              multiple
              value={formState.selectedItems}
              onChange={handleSelectChange}
              label="selectedItems"
              sx={{
                width: '300px',
                '@media (min-width: 768px)': {
                  width: '600px',
                },
                '@media (min-width: 992px)': {
                  width: '700px',
                },
                '@media (min-width: 1200px)': {
                  width: '800px',
                },
                '@media (min-width: 1440px)': {
                  width: '1200px',
                },
              }}
            >
              <MenuItem value="personas">Personas</MenuItem>
              <MenuItem value="prosperidad">Prosperidad</MenuItem>
              <MenuItem value="planeta">Planeta</MenuItem>
              <MenuItem value="paz">Paz</MenuItem>
              <MenuItem value="alianzas">Alianzas</MenuItem>
            </Select>
          </FormControl>


          {/* ODS */}
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              ODS
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="opciones"
              multiple
              value={formState.opciones}
              onChange={handleSelectChange}
              label="opciones"
              sx={{
                width: '300px',
                '@media (min-width: 768px)': {
                  width: '600px',
                },
                '@media (min-width: 992px)': {
                  width: '700px',
                },
                '@media (min-width: 1200px)': {
                  width: '800px',
                },
                '@media (min-width: 1440px)': {
                  width: '1200px',
                },
              }}

            >
              <MenuItem value="finDeLaPobreza">Fin de la Pobreza</MenuItem>
              <MenuItem value="hambreCero">Hambre Cero</MenuItem>
              <MenuItem value="saludyBienestar">Salud y Bienestar</MenuItem>
              <MenuItem value="educacionDeCalidad">
                Educación de Calidad
              </MenuItem>
              <MenuItem value="igualdadDeGenero">Igualdad de Genero</MenuItem>
              <MenuItem value="aguaLimpiaySaneamiento">
                Agua Limpia y Saneamiento
              </MenuItem>
              <MenuItem value="energiaAsequibleyNoContaminante">
                Energia Asequible y no Contaminante
              </MenuItem>
              <MenuItem value="trabajo DecenteyCrecimientoEconomico">
                Trabajo Decente y Crecimiento Economico
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </form>
  );
}
