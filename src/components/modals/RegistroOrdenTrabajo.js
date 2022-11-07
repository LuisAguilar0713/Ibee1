import { IonButton, IonFabButton } from '@ionic/react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import './RegistroOrdenTrabajo.css'

export const RegistroOrdenTrabajo = ({setShowModal }) => {
	const [values, setValues] = useState({
		//foto: paciente.url,
		nombre: '',
	})

    const handleChanges = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		})
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
					onChange={handleChanges}
					placeholder="Doctor" />
                    <input 
					type="date"
					onChange={handleChanges}
					placeholder="fecha" />
                    </div>

					<div className='a'>
                    <input 
					type="text"
					onChange={handleChanges}
					placeholder="Paciente" />
					<input
						type="tel"
						placeholder='Edad'
						onChange={handleChanges}/>
                    </div>

                    <div className='a'>
					<input
						type="text"
						placeholder='Tipo de trabajo'
						onChange={handleChanges}
					/>
					</div>
                    <div className='a'>
					<input 
					type="text"
					placeholder="Vita" />
                    <input 
					type="text"
					placeholder="Chromascop" />
					<input 
					type="text"
					placeholder="Otros" />
                    </div>
					<div className='a'>
						<div className='dientes'></div>
						<div className='diente'></div>
					</div>
					<label htmlFor='' className='text'>Indicador de unidades:</label>
					<div className='bloqueCuatro'>
						<div className='margen'>
						<label htmlFor=''>17<input className='btnRadio' type='radio' name='17'></input></label>
						<label htmlFor=''>16<input className='btnRadio' type='radio' name='16'></input></label>
						<label htmlFor=''>15<input className='btnRadio' type='radio' name='15'></input></label>
						<label htmlFor=''>14<input className='btnRadio' type='radio' name='14'></input></label>
						<label htmlFor=''>13<input className='btnRadio' type='radio' name='13'></input></label>
						<label htmlFor=''>12<input className='btnRadio' type='radio' name='12'></input></label>
						<label htmlFor=''>11<input className='btnRadio' type='radio' name='11'></input></label>
						</div>
						<div className='margen2'>
						<label htmlFor=''>21<input className='btnRadio' type='radio' name='21'></input></label>
						<label htmlFor=''>22<input className='btnRadio' type='radio' name='22'></input></label>
						<label htmlFor=''>23<input className='btnRadio' type='radio' name='23'></input></label>
						<label htmlFor=''>24<input className='btnRadio' type='radio' name='24'></input></label>
						<label htmlFor=''>25<input className='btnRadio' type='radio' name='25'></input></label>
						<label htmlFor=''>26<input className='btnRadio' type='radio' name='26'></input></label>
						<label htmlFor=''>27<input className='btnRadio' type='radio' name='27'></input></label>
						</div>
						<div className='margen'>
						<label className='label' htmlFor=''>47<input className='btnRadio' type='radio' name='47'></input></label>
						<label className='label' htmlFor=''>46<input className='btnRadio' type='radio' name='46'></input></label>
						<label className='label' htmlFor=''>45<input className='btnRadio' type='radio' name='45'></input></label>
						<label className='label' htmlFor=''>44<input className='btnRadio' type='radio' name='44'></input></label>
						<label className='label' htmlFor=''>43<input className='btnRadio' type='radio' name='43'></input></label>
						<label className='label' htmlFor=''>42<input className='btnRadio' type='radio' name='42'></input></label>
						<label className='label' htmlFor=''>41<input className='btnRadio' type='radio' name='41'></input></label>
						</div>
						<div className='margen2'>
						<label className='label' htmlFor=''>31<input className='btnRadio' type='radio' name='31'></input></label>
						<label className='label' htmlFor=''>32<input className='btnRadio' type='radio' name='32'></input></label>
						<label className='label' htmlFor=''>33<input className='btnRadio' type='radio' name='33'></input></label>
						<label className='label' htmlFor=''>34<input className='btnRadio' type='radio' name='34'></input></label>
						<label className='label' htmlFor=''>35<input className='btnRadio' type='radio' name='35'></input></label>
						<label className='label' htmlFor=''>36<input className='btnRadio' type='radio' name='36'></input></label>
						<label className='label' htmlFor=''>37<input className='btnRadio' type='radio' name='37'></input></label>
						</div>
					</div>
					<div className='bloqueCuatro'>
						<div className='a'>
						<label className='mamelones'>MAMELONES: </label>
						<button>SI</button>
						<button>NO</button>
						</div>
					</div>
					<div className='label'>
					<div className='a'><label className='naranja'>TRANSLUCIDEZ: 
						<div className='a'>
							<input className='btnRadio' type='radio' name='trans'></input>
							<input className='btnRadio' type='radio' name='trans'></input>
							<input className='btnRadio' type='radio' name='trans'></input>
					</div>
					
					<div className='amb'>
						<label>ALTA</label>
						<label>MEDIA</label>
						<label>BAJA</label>
					</div>

					</label>
					<label className='naranja'>TEXTURA: 
						<div className='a'>
						<input className='btnRadio' type='radio' name='textura'></input>
						<input className='btnRadio' type='radio' name='textura'></input>
						<input className='btnRadio' type='radio' name='textura'></input>
							</div>
					<div className='amb'>
						<label>ALTA</label>
						<label>MEDIA</label>
						<label>BAJA</label>
					</div>	
					</label> 
					<label className='naranja'>BRILLO: 
						<div className='a'>
						<input className='btnRadio' type='radio' name='brillo' ></input>
						<input className='btnRadio' type='radio' name='brillo'></input>
						<input className='btnRadio' type='radio' name='brillo'></input>
						</div>
					<div className='amb'>
						<label>ALTA</label>
						<label>MEDIA</label>
						<label>BAJA</label>
					</div>
						</label></div>
						</div>

					<div className='a'>
						<label>MODELO YESO: </label> <input className='btnRadio' type='radio'></input>
						<label>REGISTRO OCLUSAL: </label><input className='btnRadio' type='radio'></input>
						<label>ANTAGONISTA: </label><input className='btnRadio' type='radio'></input>
						<label>FOTOGRAFÍAS: </label><input className='btnRadio' type='radio'></input>
					</div>

					<div className='a'>
					<label>ARTICULADOR: </label> <input className='btnRadio' type='radio'></input>
						<label>CORONAS: </label><input className='btnRadio' type='radio'></input>
						<label>ADITAMIENTO DE IMPLANTE: </label><input className='btnRadio' type='radio'></input>
						<label>CUCHARILLAS: </label><input className='btnRadio' type='radio'></input>
					</div>

					<div className="limpiar">
                        <label>NOTAS: </label>
                        <input
                            type="text"
                        />
                    </div>
					
				<IonButton >Crear</IonButton>
			</form>

		</>
	)
}
