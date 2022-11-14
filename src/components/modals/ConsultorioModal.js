import { IonButton } from '@ionic/react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { config, input } from '../../env'
import { Camera, CameraResultType } from '@capacitor/camera'
import axios from 'axios'
import userImage from '../../assets/img/vistaborrosa.png'

const proveedores = [
	'Proveedor',
	'San Anton',
	'Villa Cortez',
    ]

export const ConsultorioModal = ({ setShowModal }) => {
	
	const [values, setValues] = useState({
		
		producto: '',
		descripcion:'',
		precio:'',
		cantidad:'',
		proveedor: '',
		
	})

	const [imagenPreview, setImagenPreview] = useState(userImage)

	const handleChanges = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		})
	}

	const CrearNuevoProducto = async () => {
		console.log(values)
		try {
			const {} = await axios.post(
				`${config.baseUrl}/api/productos`,
				values)
			setShowModal(false)
			toast.success('producto creado  correctamente')
		} catch (error) {
			console.log(error)
			toast.error('error al agregar producto')
		}
		
	}
    const takePicture = async () => {
		try {
			const image = await Camera.
            getPhoto({
				quality: 90,
				allowEditing: true,
				resultType: CameraResultType.Uri,
			})
			var imageUrl = image.webPath
			setImagenPreview(imageUrl)
		} catch (error) {
			console.log(error)
           }
	}

	return (
		<>
			<button className="boton-x" onClick={() => setShowModal(false)}>x</button>
			<h1 className='CrearNuevoProducto'>Agregar producto</h1>
			<div className="imagen-preview-container">
				<img
					className="imagen-preview"
					src={imagenPreview}
					alt="imagen del producto"
				/>
				<button className="take-image-button" onClick={takePicture}>
					Subir Foto
				</button>
			</div>
            <div>
            </div>
			
            <form className="form-container">
				<div className='datos'><label>DATOS DEL PRODUCTO</label></div>
                    <div className='b'>
					<input 
					name='producto'
					value={values.producto}
					onChange={handleChanges}
					placeholder="Nombre del producto" />
					</div>
					<div className='b'>
                    <input 
					name='descripcion'
					value={values.descripcion}
					onChange={handleChanges}
					placeholder="Descripcion del Producto" />
                    </div>
					<div className='b'>
                    <input 
					type="number"
					name='precio'
					value={values.precio}
					onChange={handleChanges}
					placeholder="Precio" />
					</div>
					<div className='b'>
                    <input 
					type="number"
					name='cantidad'
					value={values.cantidad}
					onChange={handleChanges}
					placeholder="Cantidad" />
					</div>
                    <div>
                    </div>
					<div className='a'>
                    <select
							name="proveedor"
							value={values.proveedor}
							onChange={handleChanges}
						>
							{proveedores.map((proveedor) => (
								<option value={proveedor}>{proveedor}</option>
							))}
						</select>
			    </div>
				<IonButton onClick={CrearNuevoProducto}>Crear</IonButton>
				</form>
            <div>
            </div>
				
		</>
	)
}
