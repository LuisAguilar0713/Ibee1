
import React from 'react'
import { Layout } from '../components/layout/Layout'
import './MisEstudios.css'
import { useParams } from 'react-router'
import {ArrowLeftIcon} from '@primer/octicons-react';

export const MisEstudios = () => {
    const params: any = useParams();
    const pacienteId  = params.pacienteId
    return (
        <Layout>
             <a href={`/Paciente/${pacienteId}`} className= "arrow"><ArrowLeftIcon size={40} /></a> 
        <div className='conEstudios'>
        <h1>Mis Estudios</h1>
        <button> + </button>
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Estudio</th>
                            
                        </tr>
                    </thead>
                    <tr>
                        <td>
                            <input type="date">

                            </input>
                        </td>
                        <td>
                            <input type="text">

                            </input>
                        </td>
                    </tr>
                </table>
        </div>
        </Layout>
    )
}