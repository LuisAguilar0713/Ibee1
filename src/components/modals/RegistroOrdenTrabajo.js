import { IonButton, IonFabButton } from '@ionic/react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { config, input } from '../../env'
import './RegistroOrdenTrabajo.css'

export const RegistroOrdenTrabajo = ({setShowModal }) => {
	const [values, setValues] = useState({
		folio:"",
		doctor:"",
		fecha:"",
		paciente:"",
		edad:"",
		tipo_trabajo:"",
		vita:"",
		chromascop:"",
		otros:"",
		u11:false,u12:false,u13:false,u14:false,u15:false,u16:false,u17:false,
		u21:false,u22:false,u23:false,u24:false,u25:false,u26:false,u27:false,
		u31:false,u32:false,u33:false,u34:false,u35:false,u36:false,u37:false, 
		u41:false,u42:false,u43:false,u44:false,u45:false,u46:false,u47:false,
		mamelones:"",
		translucidez:"",
		textura:"",
		brillo:"",
		yeso: false,
		oclusal: false,
		antagonista: false,
		foto: false,
		articulador: false,
		coronas: false,
		implante: false,
		cucharillas: false,
		notas:""
	})

    const handleChanges = (e) => {
		const target = e.target
		const name = target.name
		const value = target.type == "checkbox" ? target.checked : target.value
		setValues({
			...values,
			[name]: value
		})
	}

	const crear = async () => {
		console.log(values)
		try {
			const {} = await axios.post(
				`${config.baseUrl}/api/orden`,
				values)
			setShowModal(false)
			toast.success('producto creado  correctamente')
		} catch (error) {
			console.log(error)
			toast.error('error al agregar producto')
		}
		
	}
	

    return (
		<>

		<button className="boton-x" onClick={() => setShowModal(false)}>x</button>
			<h1>Orden de trabajo</h1>
            <div className= 'logoFolio'>
			<div className="logoDTD"></div>
            <div className='folioidfolio'>
            <div className='folio'>Folio: </div>
            <div className='idFolio'>1</div>
            </div>
            </div>
			<form className="form-container">
				<div className='a'>
					<input 
					type="text"
					name='doctor'
					value={values.doctor}
					onChange={handleChanges}
					placeholder="Doctor" />
                    <input 
					type="date"
					value={values.fecha}
					onChange={handleChanges}
					name='fecha'
					placeholder="fecha" />
                    </div>

					<div className='a'>
                    <input 
					type="text"
					value={values.paciente}
					onChange={handleChanges}
					name='paciente'
					placeholder="Paciente" />
					<input
						type="number"
						value={values.edad}
						placeholder='Edad'
						name='edad'
						onChange={handleChanges}/>
                    </div>

                    <div className='a'>
					<input
						type="text"
						placeholder='Tipo de trabajo'
						value={values.tipo_trabajo}
						name='tipo_trabajo'
						onChange={handleChanges}
					/>
					</div>
                    <div className='a'>
					<input 
					type="text"
					placeholder="Vita" 
					value={values.vita}
					name='vita'
					onChange={handleChanges}/>
                    <input 
					type="text"
					placeholder="Chromascop" 
					value={values.chromascop}
					onChange={handleChanges}
					name='chromascop'/>
					<input 
					type="text"
					placeholder="Otros" 
					value={values.otros}
					name='otros'
					onChange={handleChanges}/>
                    </div>
					<div className='a'>
						<div className='dientes'></div>
						<div className='diente'></div>
					</div>
					<label htmlFor='' className='text'>Indicador de unidades:</label>
					<div className='bloqueCuatro'>
						<div className='margen'>
						<label htmlFor=''>17<input className='btnRadio' type='checkbox' name='u17' checked={values.u17} onChange={handleChanges}></input></label>
						<label htmlFor=''>16<input className='btnRadio' type='checkbox' name='u16' checked={values.u16} onChange={handleChanges}></input></label>
						<label htmlFor=''>15<input className='btnRadio' type='checkbox' name='u15' checked={values.u15} onChange={handleChanges}></input></label>
						<label htmlFor=''>14<input className='btnRadio' type='checkbox' name='u14' checked={values.u14} onChange={handleChanges}></input></label>
						<label htmlFor=''>13<input className='btnRadio' type='checkbox' name='u13' checked={values.u13} onChange={handleChanges}></input></label>
						<label htmlFor=''>12<input className='btnRadio' type='checkbox' name='u12' checked={values.u12} onChange={handleChanges}></input></label>
						<label htmlFor=''>11<input className='btnRadio' type='checkbox' name='u11' checked={values.u11} onChange={handleChanges}></input></label>
						</div>
						<div className='margen2'>
						<label htmlFor=''>21<input className='btnRadio' type='checkbox' name='u21' checked={values.u21} onChange={handleChanges}></input></label>
						<label htmlFor=''>22<input className='btnRadio' type='checkbox' name='u22' checked={values.u22} onChange={handleChanges}></input></label>
						<label htmlFor=''>23<input className='btnRadio' type='checkbox' name='u23' checked={values.u23} onChange={handleChanges}></input></label>
						<label htmlFor=''>24<input className='btnRadio' type='checkbox' name='u24' checked={values.u24} onChange={handleChanges}></input></label>
						<label htmlFor=''>25<input className='btnRadio' type='checkbox' name='u25' checked={values.u25} onChange={handleChanges}></input></label>
						<label htmlFor=''>26<input className='btnRadio' type='checkbox' name='u26' checked={values.u26} onChange={handleChanges}></input></label>
						<label htmlFor=''>27<input className='btnRadio' type='checkbox' name='u27' checked={values.u27} onChange={handleChanges}></input></label>
						</div>
						<div className='margen'>
						<label className='label' htmlFor=''>47<input className='btnRadio' type='checkbox' name='u47' checked={values.u47} onChange={handleChanges}></input></label>
						<label className='label' htmlFor=''>46<input className='btnRadio' type='checkbox' name='u46' checked={values.u46} onChange={handleChanges}></input></label>
						<label className='label' htmlFor=''>45<input className='btnRadio' type='checkbox' name='u45' checked={values.u45} onChange={handleChanges}></input></label>
						<label className='label' htmlFor=''>44<input className='btnRadio' type='checkbox' name='u44' checked={values.u44} onChange={handleChanges}></input></label>
						<label className='label' htmlFor=''>43<input className='btnRadio' type='checkbox' name='u43' checked={values.u43} onChange={handleChanges}></input></label>
						<label className='label' htmlFor=''>42<input className='btnRadio' type='checkbox' name='u42' checked={values.u42} onChange={handleChanges}></input></label>
						<label className='label' htmlFor=''>41<input className='btnRadio' type='checkbox' name='u41' checked={values.u41} onChange={handleChanges}></input></label>
						</div>
						<div className='margen2'>
						<label className='label' htmlFor=''>31<input className='btnRadio' type='checkbox' name='u31' checked={values.u31} onChange={handleChanges}></input></label>
						<label className='label' htmlFor=''>32<input className='btnRadio' type='checkbox' name='u32' checked={values.u32} onChange={handleChanges}></input></label>
						<label className='label' htmlFor=''>33<input className='btnRadio' type='checkbox' name='u33' checked={values.u33} onChange={handleChanges}></input></label>
						<label className='label' htmlFor=''>34<input className='btnRadio' type='checkbox' name='u34' checked={values.u34} onChange={handleChanges}></input></label>
						<label className='label' htmlFor=''>35<input className='btnRadio' type='checkbox' name='u35' checked={values.u35} onChange={handleChanges}></input></label>
						<label className='label' htmlFor=''>36<input className='btnRadio' type='checkbox' name='u36' checked={values.u36} onChange={handleChanges}></input></label>
						<label className='label' htmlFor=''>37<input className='btnRadio' type='checkbox' name='u37' checked={values.u37} onChange={handleChanges}></input></label>
						</div>
					</div>
					<div className='bloqueCuatro'>
						<div className='a'>
						<label className='mamelones'>MAMELONES: </label>
						<button type='button' onClick={()=> setValues({...values, mamelones:'si'})} >SI</button>
						<button type='button' onClick={()=> setValues({...values, mamelones:'no'})} >NO</button>
						</div>
					</div>
					<div className='label'>
					<div className='a'><label className='naranja'>TRANSLUCIDEZ: 
						<div className='a'>
							<input className='btnRadio' type='radio' value="alta" name='translucidez'onChange={handleChanges}></input>
							<input className='btnRadio' type='radio' value="media" name='translucidez' onChange={handleChanges}></input>
							<input className='btnRadio' type='radio' value="baja" name='translucidez' onChange={handleChanges}></input>
					</div>
					
					<div className='amb'>
						<label>ALTA</label>
						<label>MEDIA</label>
						<label>BAJA</label>
					</div>

					</label>
					<label className='naranja'>TEXTURA: 
						<div className='a'>
						<input className='btnRadio' type='radio' name='textura' value="alta" onChange={handleChanges}></input>
						<input className='btnRadio' type='radio' name='textura' value="media" onChange={handleChanges}></input>
						<input className='btnRadio' type='radio' name='textura' value="baja" onChange={handleChanges}></input>
							</div>
					<div className='amb'>
						<label>ALTA</label>
						<label>MEDIA</label>
						<label>BAJA</label>
					</div>	
					</label> 
					<label className='naranja'>BRILLO: 
						<div className='a'>
						<input className='btnRadio' type='radio' name='brillo' value="alta" onChange={handleChanges}></input>
						<input className='btnRadio' type='radio' name='brillo' value="media" onChange={handleChanges}></input>
						<input className='btnRadio' type='radio' name='brillo' value="baja" onChange={handleChanges}></input>
						</div>
					<div className='amb'>
						<label>ALTA</label>
						<label>MEDIA</label>
						<label>BAJA</label>
					</div>
						</label></div>
						</div>

					<div className='a'>
						<label>MODELO YESO: </label> <input className='btnRadio' type='checkbox' name='yeso' checked={values.yeso} onChange = {handleChanges}></input>
						<label>REGISTRO OCLUSAL: </label><input className='btnRadio' type='checkbox' name='oclusal' checked={values.oclusal} onChange = {handleChanges}></input>
						<label>ANTAGONISTA: </label><input className='btnRadio' type='checkbox' name='antagonista' checked={values.antagonista} onChange={handleChanges}></input>
						<label>FOTOGRAFÍAS: </label><input className='btnRadio' type='checkbox' name='foto' checked={values.foto} onChange={handleChanges}></input>
					</div>

					<div className='a'>
					<label>ARTICULADOR: </label> <input className='btnRadio' type='checkbox' name='articulador' checked={values.articulador} onChange={handleChanges}></input>
						<label>CORONAS: </label><input className='btnRadio' type='checkbox' name='coronas' checked={values.coronas} onChange={handleChanges}></input>
						<label>ADITAMIENTO DE IMPLANTE: </label><input className='btnRadio' type='checkbox' name='implante' checked={values.implante} onChange={handleChanges}></input>
						<label>CUCHARILLAS: </label><input className='btnRadio' type='checkbox' name='cucharillas' checked={values.cucharillas} onChange={handleChanges}></input>
					</div>

					<div className="limpiar">
                        <label>NOTAS: </label>
                        <input
                            type="text"
							name='notas'
							value={values.notas}
							onChange={handleChanges}
                        />
                    </div>
				<IonButton onClick={crear}>Crear</IonButton>
			</form>

		</>
	)
}
