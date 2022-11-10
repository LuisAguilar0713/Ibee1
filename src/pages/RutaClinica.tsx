import React from 'react'
import { Layout } from '../components/layout/Layout'
import './rutaClinica.css'
import { useParams } from 'react-router'
import {ArrowLeftIcon} from '@primer/octicons-react';
import { IonButton } from '@ionic/react';


export const RutaClinica = () => {
    const params: any = useParams();
    const pacienteId  = params.pacienteId
    return (
        <>
             <a href={`/HistoriaClinica/${pacienteId}`} className="arrows"><ArrowLeftIcon size={40} /></a>
        <div className='conRuta'>
        <h1>Ruta Clinica</h1>
        <button>+</button>
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Tratamiento</th>
                            <th>Doctor</th>
                            
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
                        <td>
                            <input type="text">

                            </input>
                        </td>
                    </tr>
                </table>
        </div>

        </>
    )
}
