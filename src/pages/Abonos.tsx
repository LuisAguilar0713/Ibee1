import React, { useEffect, useState } from 'react'
import { Layout } from '../components/layout/Layout'
//import foto from './../assets/img/woman-gfec6923be_640.jpg'
import './Pagos.css'
import lupita from './../assets/img/Lupa.svg'
import { config } from '../env'
import { useParams } from 'react-router'
import { HistorialPagos } from '../components/pagos/HistorialAbonos'
import axios from 'axios'
import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonItemDivider, IonList, IonModal, IonRow } from '@ionic/react'
import {ArrowLeftIcon} from '@primer/octicons-react';
export const Abonos = () => {

    const [paciente, setPaciente] = useState<any>({
        nombre: '',
        ap_materno: '',
        ap_paterno: '',
        edad: '',
        rfc: '',
        url: '',
        estatus: '',
        calle: '',
        ciudad: '',
        colonia: '',
        estado: '',
        numero: '',
        telefono: '',
        Whatsapp:'',
        tutor: ''
    })
    const [historialPagos, setHistorialPagos] = useState<any>([]);
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('')
    const params: any = useParams();

    useEffect(() => {
        getPaciente()
        getHistorialPagos()
    }, [])
    const pacienteId  = params.pacienteId
    const getPaciente = async () => {
        try {
            const res = await fetch(`${config.baseUrl}/api/pacienteParaPago/${params.pacienteId}`)
            const data = await res.json()
            setPaciente({ ...data.paciente, ...data.telefono, tutor: data.tutor });
        } catch (error) {
            console.log(error);
        }
    }

    const getHistorialPagos = async () => {
        try {
            const res = await fetch(`${config.baseUrl}/api/historialPagos/${params.pacienteId}`)
            const data = await res.json()
            console.log(data.historialPagos)
            setHistorialPagos(data.historialPagos);
        } catch (error) {
            console.log(error);
        }
    }

    const postHistorialPagos = async () => {
        try {
            await axios.post(`${config.baseUrl}/api/historialPagos/${params.pacienteId}`, {
                titulo: 'nuevo',
                fecha_inicio: new Date().toISOString().split('T')[0]
            });
            getHistorialPagos()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Layout>
            <a href={`/Paciente/${pacienteId}`} className= "arrow"><ArrowLeftIcon size={40} /></a>
            <div className="contenedorPagos">

                <div className="infoEconomica">
                    <div className="menu">
                        <button onClick={postHistorialPagos}>+</button>
                        <input className='buscar' type="text" />
                        <button><img src={lupita} alt="paciente" /></button>
                    </div>
                    {
                        historialPagos.map((historial: any) => (
                            <HistorialPagos
                                key={historial.id_historial_pagos_rehabilitacion}
                                historial={historial}
                                setShowModal={setShowModal}
                                getHistorialPagos={getHistorialPagos}
                            />
                        ))
                    }
                </div>

                <IonModal isOpen={showModal} cssClass='my-custom-class'>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="12">ion-col</IonCol>
                            <IonCol size="6">
                                <IonButton onClick={() => {
                                    console.log('aceptar')
                                    setShowModal(false)
                                }}>Aceptar</IonButton>
                            </IonCol>
                            <IonCol size="6">
                                <IonButton onClick={() => setShowModal(false)}>Cancelar</IonButton>
                            </IonCol>
                            <IonList>
                                <IonItemDivider>Default Input with Placeholder</IonItemDivider>
                                <IonItem>
                                    <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                                </IonItem>
                            </IonList>
                        </IonRow>
                    </IonGrid>
                </IonModal>
            </div>
        </Layout>
    )
}