
import React from 'react'
import { useForm } from 'react-hook-form'

function attachDoc() {
    const { register, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
            url: 'https://'
        }
    });

    const onSubmit = (data) => {
        console.log(data);
      }

  return (
      <div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="PartnerUrl">Agregar via url</label>
                    <input name='PartnerUrl'
                        type="url"{...register("url", 
                            { required:{
                                value: true

                            },
                                pattern: {
                                    value: /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/,
                                    message: 'Ingrese una URL válida',
                                }
                            })}
                    />
                    {errors.url?.type === 'required' && <p id='error-msg'>El campo es requerido</p>}
             <input type="submit" value="Agregar" />
          </form>
      </div>
  )
}

export default attachDoc
