
import React from 'react'
import { Layout } from '../components/layout/Layout'
import './MisEstudios.css'
import { useParams } from 'react-router'
import {ArrowLeftIcon} from '@primer/octicons-react';
import { IonButton, IonModal } from '@ionic/react';
import { useEffect, useState } from 'react';
import { ListaEstudios } from '../components/modals/ListaEstudios';


export const MisEstudios = () => {
    const params: any = useParams();
    const pacienteId  = params.pacienteId
    const[showModal,setShowModal]=useState(false)
    
    return (
        <Layout>
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
					<ListaEstudios 
            setShowModal={setShowModal}
          />
				</IonModal>
        <h1>Mis Estudios</h1>
        <button onClick={ ()=> setShowModal(true) }>+</button>
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Estudio</th>
                            
                        </tr>
                    </thead>
                </table>
        </div>

        </Layout>
    )
}