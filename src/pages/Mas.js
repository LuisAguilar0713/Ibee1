import { IonButton } from '@ionic/react'
import React from 'react'
import { Layout } from '../components/layout/Layout'
import iconArrow from './../assets/img/arrow-derecha.png'
import iconAbonos from './../assets/img/moneyEC.png'
import laboratorio from './../assets/img/laboratorio_30.png'
import './Mas.css'
export const Mas = () => {

    const logout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        window.location.reload()
    }

    return (
        <Layout>
            <div className='contenedorBloque1'>
            <div className="bloque1">
                <a href="/EstadoCuenta" className="contenidoBloque1">
                <img src={iconAbonos} alt="" />
                <p>Estado de cuenta</p>
                <img src={iconArrow} alt="" />
                </a>
            </div>
            <div className="bloque1">
                <a href="/laboratorio" className="contenidoBloque2">
                <img src={laboratorio} alt="" />
                <p>Laboratorio</p>
                <img src={iconArrow} alt="" />
                </a>
            </div>
            </div>
        </Layout>
    )
}
