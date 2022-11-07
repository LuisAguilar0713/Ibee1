
import { IonContent, IonPage } from '@ionic/react';
import { Layout } from '../components/layout/Layout';
import iconSolucion from './../assets/img/solucion.png'
import iconCampos from './../assets/img/campos.png'
import './Consultorio.css'
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/react';
import { IonModal } from '@ionic/react';
import { ConsultorioModal } from '../components/modals/ConsultorioModal'
import { useEffect, useState } from 'react';

export const Consultorio = () => {

const [showModal, setShowModal] = useState(false)
const [allUsers, setAllUsers] = useState([]);
const [users, setUsers] = useState([]);

const escribi = () =>{
      console.log('Escribiendo')
    }

    return (
         <IonPage  >
         <IonContent >
         <IonModal
		isOpen={showModal}
	    cssClass="my-custom-class"
		swipeToClose={true}
		animated
		onDidDismiss={() => {
			setShowModal(false)
					}}
				   >
		    <ConsultorioModal 
                   setShowModal={setShowModal}
                   />
			</IonModal>
            <Layout  className="Contenidototal">
                
            <div className="Consultorio1">
            <h1 >Inventario Consultorio</h1>
            </div>
            <div >
            <h1 className='Titulo' color='black'>Materiales...</h1> 
            </div>
             
            <input className='Search-box'
            placeholder='Buscar...'
            onChange={escribi}>
            </input>
              
            <div className='boton'>
            <IonButton  size="small"  onClick={ ()=>setShowModal(true) }>+</IonButton>
            </div>
                      
        <div>
        <IonCard  className='card'  >
        <IonCardHeader   className='header'>  
        <img className='image' alt="" src={iconSolucion} />
        <IonCardTitle className='card_title'>Solucion Salina</IonCardTitle>
        <IonCardContent>SOLUCION SALINA 250 ML PISA</IonCardContent>
        <IonCardSubtitle >Precio: {""} </IonCardSubtitle>
        <IonCardSubtitle >En existencia: {""}  </IonCardSubtitle>
        <IonCardSubtitle >Proveedor: {""} </IonCardSubtitle>
        </IonCardHeader>
        <IonButton size="small"  fill="outline">+</IonButton>
        <IonButton size="small"  fill="outline">-</IonButton>
        </IonCard>
        </div>
        
         <div>
         <IonCard  className='card'  >
        <IonCardHeader   className='header'>  
        <img className='image' alt="" src={iconCampos} />
        <IonCardTitle className='card_title'>Campos</IonCardTitle>
        <IonCardContent>PAQUETE DE CAMPOS 20 PZ</IonCardContent>
        <IonCardSubtitle >Precio: {""} </IonCardSubtitle>
        <IonCardSubtitle >En existencia: {""}  </IonCardSubtitle>
        <IonCardSubtitle >Proveedor: {""} </IonCardSubtitle>
        </IonCardHeader>
        <IonButton size="small"  fill="outline">+</IonButton>
        <IonButton size="small"  fill="outline">-</IonButton>
        </IonCard>
        </div>

        <div>
        <IonCard  className='card'  >
        <IonCardHeader   className='header'>  
        <img className='image' alt="" src={iconSolucion} />
        <IonCardTitle className='card_title'>Eyector</IonCardTitle>
        <IonCardContent>SOLUCION SALINA 250 ML PISA</IonCardContent>
        <IonCardSubtitle >Precio: {""} </IonCardSubtitle>
        <IonCardSubtitle >En existencia: {""}  </IonCardSubtitle>
        <IonCardSubtitle >Proveedor: {""} </IonCardSubtitle>
        </IonCardHeader>
        <IonButton size="small"  fill="outline">+</IonButton>
        <IonButton size="small"  fill="outline">-</IonButton>
        </IonCard>
        </div>

        <div>
        <IonCard  className='card'  >
        <IonCardHeader   className='header'>  
        <img className='image' alt="" src={iconSolucion} />
        <IonCardTitle className='card_title'>Guantes</IonCardTitle>
        <IonCardContent>SOLUCION SALINA 250 ML PISA</IonCardContent>
        <IonCardSubtitle >Precio: {""} </IonCardSubtitle>
        <IonCardSubtitle >En existencia: {""}  </IonCardSubtitle>
        <IonCardSubtitle >Proveedor: {""} </IonCardSubtitle>
        </IonCardHeader>
        <IonButton size="small"  fill="outline">+</IonButton>
        <IonButton size="small"  fill="outline">-</IonButton>
        </IonCard>
        </div>

        <div>
        <IonCard  className='card'  >
        <IonCardHeader   className='header'>  
        <img className='image' alt="" src={iconSolucion} />
        <IonCardTitle className='card_title'>Fresas</IonCardTitle>
        <IonCardContent>SOLUCION SALINA 250 ML PISA</IonCardContent>
        <IonCardSubtitle >Precio: {""} </IonCardSubtitle>
        <IonCardSubtitle >En existencia: {""}  </IonCardSubtitle>
        <IonCardSubtitle >Proveedor: {""} </IonCardSubtitle>
        </IonCardHeader>
        <IonButton size="small"  fill="outline">+</IonButton>
        <IonButton size="small"  fill="outline">-</IonButton>
        </IonCard>
        </div>


            </Layout>
        </IonContent>
        </IonPage>
        
        )

     }
    