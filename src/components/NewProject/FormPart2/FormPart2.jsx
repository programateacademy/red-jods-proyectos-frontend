//Ximena
import React from "react";
import "./FormPart2.css";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

export default function FormPart2() {
  const [tituloProyecto, setTituloProyecto] = useState("");
  const [responsable, setResponsable] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Titulo del Proyecto: ${tituloProyecto}`);
    console.log(`Reponsable: ${responsable}`);
    console.log(`Selected items: ${selectedItems}`);
  };


  return (
    <div>
      <div className="Form2Container">
        <form  onSubmit={handleSubmit}>
          <div className="part1">
            <div>
              <TextField value={tituloProyecto} onChange={handletituloProyectoChange} label="Titulo del Proyecto" />
            </div>
            <div>
              <TextField  value={responsable}  onChange={handleResponsableChange} label="Responsable" />
            </div>

            <FormControl className="formControl" variant="outlined" multiple>
              <InputLabel id="select-outlined-label">Ejes</InputLabel>
              <Select multiple value={selectedItems} onChange={handleItemsChange}
                labelId="select-outlined-label-ejes"
                id="select-outlined"
                label="Intereses"
              >
                <MenuItem value="personas">Personas</MenuItem>
                <MenuItem value="prosperidad">Prosperidad</MenuItem>
                <MenuItem value="planeta">Planeta</MenuItem>
                <MenuItem value="paz">Paz</MenuItem>
                <MenuItem value="alianzas">Alianzas</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" multiple className="formControl">
              <InputLabel id="select-outlined-label">ODS</InputLabel>
              <Select
                labelId="select-outlined-label-ods"
                id="select-outlined"
                label="Intereses"
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
            <div><TextField id="description" label="Descripción" /></div>
            <div><TextField label="Indicadores" /></div>
            <div><TextField label="Objetivos" /></div>
          </div>
        </form>
      </div>
      <div className="part3">
        <h1>Adjuntar Documentación</h1>
      </div>
    </div>
  );
}






