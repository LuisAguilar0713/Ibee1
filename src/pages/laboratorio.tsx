import React, { useEffect, useState } from 'react'
import { Layout } from '../components/layout/Layout'
import busca from './../assets/img/Lupa.svg'
import { ListaPacientes } from '../components/pacientes/ListaPacientes'
import { config } from '../env'
import plus from './../assets/img/plus-circle.svg'
import { useHistory } from 'react-router'
import './PacientesPrincipal.css'
import { IonButton, IonModal } from '@ionic/react'
import { RegistroOrdenTrabajo } from '../components/modals/RegistroOrdenTrabajo'
import { agregarPacienteAlHistorial } from '../utils/agregarPacienteAlHistorial'

export const Laboratorio = () => {
	// gets pacientes from localstorage
	const PacientesStorage = localStorage.getItem('Pacientes')
	const pacientesHistorial = PacientesStorage
		? JSON.parse(PacientesStorage)
		: []
	const [Pacientes, setPacientes] = useState(pacientesHistorial)
	const [termino, setTermino] = useState('')
	const [mostrarBoton, setmostrarBoton] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const history = useHistory()

	useEffect(() => {
		buscarPacientes()
	}, [])

	const buscarPacientes = () => {
		fetch(`${config.baseUrl}/api/pacientes/${termino}`, {
			method: 'GET',
			redirect: 'follow',
		})
			.then((response) => response.json())
			.then(({ results }) => {
				console.log(results)
				setPacientes(results)
			})
			.catch((error) => console.log('error', error))
	}

	const buscar = (e: any) => {
		e.preventDefault()
		buscarPacientes()
	}

	const mostrar = (e: any) => {
		e.preventDefault()
		setmostrarBoton(!mostrarBoton)
	}

	const handlePacienteClick = (Paciente: any): void => {
		agregarPacienteAlHistorial( Paciente )
		history.push(`/paciente/${Paciente.id_paciente}`)
	}

	return (
		<Layout>
			<div className="contenedorPacientesPrincipal">
				<IonModal
					isOpen={showModal}
					cssClass="my-custom-class"
					swipeToClose={true}
					animated
					onDidDismiss={() => {
						setShowModal(false)
					}}
				>
					<RegistroOrdenTrabajo 
            setShowModal={setShowModal}
          />
				</IonModal>

				<div className="contenido">
					<form className="busqueda">
						<div className="textoBusqueda">
							<div id="text">
								<h3>Registro orden de trabajo</h3>
							</div>
						</div>
						<div className="contenedorBtn">
							<IonButton
                onClick={ ()=>setShowModal(true) }
              >+</IonButton>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	)
}

export default Laboratorio
