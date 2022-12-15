import React, { useEffect, useState } from 'react'
import { Layout } from '../components/layout/Layout'
import busca from './../assets/img/Lupa.svg'
import { config } from '../env'
import plus from './../assets/img/plus-circle.svg'
import { useHistory } from 'react-router'
import './Laboratorio.css'
import { IonButton, IonModal } from '@ionic/react'
import { RegistroOrdenTrabajo } from '../components/modals/RegistroOrdenTrabajo'	
import { ListaOrdenTrabajo } from '../components/ordenTrabajo/listaOrdenTrabajo'

export const Laboratorio = () => {
	// gets pacientes from localstorage
	const LaboratorioStorage = localStorage.getItem('Laboratorio')
	const LaboratorioHistorial = LaboratorioStorage
		? JSON.parse(LaboratorioStorage)
		: []
	const [orden, setOrden] = useState(LaboratorioHistorial)
	const [showModal, setShowModal] = useState(false)
	const history = useHistory()

	useEffect(() => {
		buscarOrden()
	}, [])

	const buscarOrden = () => {
		fetch(`${config.baseUrl}/api/ordenes`, {
			method: 'GET',
			redirect: 'follow',
		})
			.then((response) => response.json())
			.then(({ results }) => {
				console.log(results)
				setOrden(results)
			})
			.catch((error) => console.log('error', error))
	}

	const handleOrdenClick = (orden: any): void => {
		//agregarPacienteAlHistorial( paciente )
		history.push(`/orden/${orden.id_orden}`)
	}

	return (
		<Layout>
			<div className="contenedorLaboratorio">
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
					<div >
						<ListaOrdenTrabajo
							orden={orden}
							handleOrdenClick={handleOrdenClick}
						/>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Laboratorio
