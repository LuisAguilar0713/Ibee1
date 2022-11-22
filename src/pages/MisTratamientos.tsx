
import React from 'react'
import { Layout } from '../components/layout/Layout'
import './MisTratamientos.css'
import { useParams } from 'react-router'
import {ArrowLeftIcon} from '@primer/octicons-react';

export const MisTratamientos = () => {
    const params: any = useParams();
    const pacienteId  = params.pacienteId
    return (
        <Layout>
            
        <a href={`/Paciente/${pacienteId}`} className= "arrow"><ArrowLeftIcon size={40} /></a>
        <div className='conTratamientos'>
        <h1>Mis tratamientos</h1>
        
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Tratamiento</th>
                            
                        </tr>
                    </thead>
                </table>
        </div>
        </Layout>
    )
}