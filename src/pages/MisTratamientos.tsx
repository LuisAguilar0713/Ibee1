import React, { useEffect, useState } from 'react'
import { Layout } from '../components/layout/Layout'
import './MisTratamientos.css'
import { useParams } from 'react-router'
import {ArrowLeftIcon} from '@primer/octicons-react';
import { config } from '../env';
import axios from 'axios';

export const MisTratamientos = () => {
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
        <a href={`/Paciente/${pacienteId}`} className="arrows" ><ArrowLeftIcon size={40} /></a>
        <div className='conTratamientos'>
        <h1>Mis tratamientos</h1>
        </div>
        </Layout>
    )
}
