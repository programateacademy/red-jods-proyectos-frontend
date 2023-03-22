import React from 'react'
import { useForm } from 'react-hook-form'
import './FormPart1.css'
import Grid from '@mui/material/Grid';

function FormPart1() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <div id='inputs'>
                  <label id='title-form' htmlFor="">Título del Proyecto</label>
                  <input placeholder='Diligencia tu respuesta' id='input-form' type="text" {...register('title', {
                    required: true,
                  })} />
                  {errors.title?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}
                </div>

                <div id='inputs'>
                  <label id='title-form' htmlFor="">Responsable</label>
                  <input id='input-form' placeholder='Diligencia tu respuesta' type="text" {...register('userName', {
                    required: true,
                  })} />
                  {errors.userName?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}
                </div>

                <div id='inputs'>
                  <label id='title-form' htmlFor="">Ejes</label>
                  <select id='input-form' {...register('axis', { required: true, })}>
                    <option placeholder='Selecciona una de las opciones' />
                    <option value="Personas">Personas</option>
                    <option value="Prosperidad">Prosperidad</option>
                    <option value="Planeta">Planeta</option>
                    <option value="Paz">Paz</option>
                    <option value="Alianzas">Alianzas</option>
                  </select>
                  {errors.axis?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}
                </div>

                <div id='inputs'>
                  <label id='title-form' htmlFor="">ODS</label>
                  <select id='input-form' {...register('ods', { required: true })}>
                    <option placeholder='Selecciona una de las opciones' />
                    <option value="Pobreza">Fin de la Pobreza</option>
                    <option value="Hambre">Hambre Cero</option>
                    <option value="Salud">Salud y Bienestar</option>
                    <option value="Educación">Educación de Calidad</option>
                    <option value="Igualdad">Igualdad de Género</option>
                    <option value="Agua">Agua Limpia y Saneamiento</option>
                    <option value="Energia">Energía Asequible y no Contaminante</option>
                    <option value="Trabajo">Trabajo Decenter y Crecimiento Económico</option>
                    <option value="Industria">Industria, Innovación e Infreestructura</option>
                    <option value="Desigualdades">Reducción de las desigualdades</option>
                    <option value="Comunidades">Ciudades y Comunidades Sostenibles</option>
                    <option value="Produccion">Producción y Consumo Responsables</option>
                    <option value="Clima">Acción por el Clima</option>
                    <option value="Submarina">Vida Submarina</option>
                    <option value="Ecosistemas">Vida de Ecosistemas Terrestres</option>
                    <option value="Paz">Paz, Justicia e Instituciones Sólidas</option>
                    <option value="Alianzas">Alianzas para Lograr los Objetivos</option>
                  </select>
                  {errors.ods?.type === 'required' && <p id='error-msg'>El campo es reqequerido</p>}
                </div>
            
            </Grid>
            <Grid item xs={12} md={6}>
              
                <div id='inputs'>
                <label id='title-form' htmlFor="">Descripción</label>
                <textarea id='input-form-des' placeholder='Diligencia tu respuesta' type="text" {...register('description', { required: true, })} />
                {errors.description?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}
              </div>

                <div id='inputs'>
                  <label id='title-form' htmlFor="">Indicadores</label>
                  <textarea id='input-form-des' placeholder='Diligencia tu respuesta' type="textarea" {...register('indicator', { required: true, })} />
                  {errors.indicator?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}

                </div>

                <div id='inputs'>
                  <label id='title-form' htmlFor="">Objetivos</label>
                  <textarea id='input-form-des' placeholder='Diligencia tu respuesta' type="text" {...register('objective', { required: true })} />
                  {errors.objective?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}
                </div>
            </Grid>
          </Grid>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default FormPart1
