
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
        <button> + </button>
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Tratamiento</th>
                            
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
