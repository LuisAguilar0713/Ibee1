import './registrar.css'
import { IonButton } from '@ionic/react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { config } from '../../env'
import userImage from '../../assets/img/woman-gfec6923be_640.jpg'
import { Camera, CameraResultType } from '@capacitor/camera'
import {DeviceCameraIcon} from '@primer/octicons-react';



export const Registrar=({setShowModal})=>{
const[values,setValues]=useState({
    usuario: '',
    password: ''
})
const [imagenPrevia, setImagenPrevia] = useState(userImage)

const handleChanges = (e) => {
    setValues({
        ...values,
        [e.target.name]: e.target.value,
    })
}
const takePicture = async () => {
	try {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: true,
			resultType: CameraResultType.Uri,
		})
		var imageUrl = image.webPath
		setImagenPrevia(imageUrl)
	} catch (error) {
		console.log(error)
	}
}
const limpiarCampo = (e) => {
	e.preventDefault();
	setValues({
		...values,
		[e.target.name]: ''
	})
}


	
    return (
		<>
		<button className="boton-x1" onClick={() => setShowModal(false)}>x</button>
        
		<div className='conWrap'>

			<div className='ibee'></div>
			<h3 className='CrearUsuario'>Crear usuario</h3>
		
		<div className="imagen-previa-container">
				<img
					className="imagen-previa"
					src={imagenPrevia}
					alt="imagen del paciente"
				/>
				<button className="take-button" onClick={takePicture}>
				<DeviceCameraIcon size={20} />
				</button>
			</div>

			
		
			<form className="form-container1">
                    <div className='b'>
					<input 
					type="text"
					name='nombre'
					value={values.nombre}
					onChange={handleChanges}
					placeholder="Nombre (s)" /> 
                    </div>
                    <div className='b'>
                    <input 
					type="text"
					name='ap_paterno'
					value={values.ap_paterno}
					onChange={handleChanges}
					placeholder="Apellido paterno" />
                    </div>
					<div className='b'>
					<input 
					type="text"
					name='ap_materno'
					value={values.ap_materno}
					onChange={handleChanges}
					placeholder="Apellido materno" />
                    </div>
					<div className='b'>
					<input 
					type="text"
					name='correo'
					value={values.correo}
					onChange={handleChanges}
					placeholder="Correo electronico" />
                    </div>
                    
					
                    <input 
					type="text"
					name='password'
					value={values.password}
					onChange={handleChanges}
					placeholder="Contraseña" />
                   
                    <button className='btn'>Crear</button>
			</form>
			</div>
      </>
	)
}
