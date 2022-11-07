<<<<<<< HEAD
import { IonButton } from '@ionic/react'
import React from 'react'
import { Layout } from '../components/layout/Layout'
import iconArrow from './../assets/img/arrow-derecha.png'
import iconAbonos from './../assets/img/moneyEC.png'
import iconInventario from './../assets/img/inventario.png'
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
            
            </div>

            <div className='contenedorBloque2'>
            <div className="bloque2">
            
                <a href="/Inventario" className="contenidoBloque2">
                <img src={iconInventario} alt="" />
                <p>Inventario</p>
                <img src={iconArrow} alt="" />
                </a>
                
            </div>
            
            </div>
        </Layout>


    )
    
   
}
=======
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
>>>>>>> cc3cfbef91c02a01e43a55749bd092a9339e18b1
