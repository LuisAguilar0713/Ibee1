import './lisTratamiento.css'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { config, input } from '../../env'
import { IonPage } from '@ionic/react'


export const ListaTratamientos=({paciente, setShowModal})=>{
   
    const [values, setValues] = useState({
        fecha:"",
        descripcion:"",
        nombre_doctor:""
    })
    const handleChanges = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }
    const crear = async () => {
        console.log(values)
        try {
            const {} = await axios.post(
                `${config.baseUrl}/api/tratamiento/${paciente.pacienteId}`,
                values)
            setShowModal(false)
            toast.success(' creado  correctamente')
        } catch (error) {
            console.log(error)
            toast.error('error al agregar')
        }
        
    }
    return(
        <>
        <div className='ionwrap'>
        <IonPage className='ionP'>
       
        <div className='contenLIst'>
            
            <h1>Agregar nuevo tratamiento</h1>
                     
            <input 
					type="date"
					name='fecha'
					value={values.fecha}
					onChange={handleChanges}
					placeholder="fecha" />
                       
            <input 
					type="text"
					name='descripcion'
					value={values.descripcion}
					onChange={handleChanges}
					placeholder="Tratamiento" />

            <input 
					type="text"
					name='nombre_doctor'
					value={values.nombre_doctor}
					onChange={handleChanges}
					placeholder="Nombre del doctor" />
                            <div onClick={crear}><button >Guardar</button></div>
  
        </div>
        </IonPage>
        </div>
        </>
    )
}
