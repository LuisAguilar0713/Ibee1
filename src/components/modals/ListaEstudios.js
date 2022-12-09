import './estudios.css'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { config, input } from '../../env'
import { IonPage } from '@ionic/react'


export const ListaEstudios=({setShowModal})=>{
    const [values, setValues] = useState({
        fecha:"",
        tipo_estudio:""
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
                `${config.baseUrl}/api/estudio`,
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
       <IonPage className='ionP'>
        <div className='contenLIst'>
            
            <h1>Agregar nuevo tratamiento</h1>
                     <div className='containerLis'>
                     <input className='esim'
					type="date"
					name='fecha'
					value={values.fecha}
					onChange={handleChanges}
					placeholder="fecha" />
                       
            <input  className='esim'
					type="text"
					name='tipo_estudio'
					value={values.tipo_estudio}
					onChange={handleChanges}
					placeholder="Nombre del estuio" />
                            <div onClick={crear}><button >Guardar</button></div>
                     </div>
        </div>
        </IonPage>
        </>
    )
}
