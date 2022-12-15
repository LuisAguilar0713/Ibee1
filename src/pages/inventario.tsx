import React from 'react'
import { IonContent, IonPage } from '@ionic/react';
import { Layout } from '../components/layout/Layout';
import './inventario.css'
import iconArrow from './../assets/img/arrow-derecha.png'
import './inventario.css'
export const inventario = () => {
    
    return (
        <IonPage>
            <IonContent>
                <Layout>
                
                    <div className="Inventario">
                    <h1>Categorias</h1>
                    </div>
                       
                       <div className='contenedorBloque1'>
                       <div className="bloque1">
                       <a href="/Consultorio" className="contenidoBloque1">
                       <p>Consultorio</p>
                       <img src={iconArrow} alt="" />
                       </a>
                </div>
                </div>
    
                     <div className='contenedorBloque1'>
                     <div className="bloque1">
                       <a href="/Esterelizado" className="contenidoBloque2">
                       <p>Esterelizado</p>
                       <img src={iconArrow} alt="" />
                       </a>
                    
                     </div>
                     </div>

                <div className='contenedorBloque1'>
                <div className="bloque1">
                <a href="/Bodega" className="contenidoBloque3">
                <p>Bodega</p>
                <img src={iconArrow} alt="" />
                </a>

                <div>
                </div>
                    
                <div className='contenedorBloque1'>
                <div className="bloque1">
                <a href="/Sistemas" className="contenidoBloque4">
                <p>Sistemas</p>
                <img src={iconArrow} alt="" />
                </a>

                 </div>
                 </div>
                 </div>
                 </div>
                 
                </Layout>
            </IonContent>
        </IonPage>
        
        )
}

 
   

