import React from 'react'
import { Layout } from '../components/layout/Layout'
import './rutaClinica.css'
import { useParams } from 'react-router'
import {ArrowLeftIcon} from '@primer/octicons-react';
import { IonButton, IonModal } from '@ionic/react';
import { useEffect, useState } from 'react';
import { ListaTratamientos } from '../components/modals/ListaTratamientos';


export const RutaClinica = () => {
    const params: any = useParams();
    const pacienteId  = params.pacienteId
    const[showModal,setShowModal]=useState(false)
    
    return (
        <>
             <a href={`/HistoriaClinica/${pacienteId}`} className="arrows"><ArrowLeftIcon size={40} /></a>
        <div className='conRuta'>
        <IonModal
					isOpen={showModal}
					cssClass="my-custom-class"
					swipeToClose={true}
					animated
					onDidDismiss={() => {
						setShowModal(false)
					}}
				>
					<ListaTratamientos 
            setShowModal={setShowModal}
          />
				</IonModal>
        <h1>Ruta Clinica</h1>
        <button onClick={ ()=> setShowModal(true) }>+</button>
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Tratamiento</th>
                            <th>Doctor</th>
                            
                        </tr>
                    </thead>
                </table>
        </div>

        </>
    )
}
