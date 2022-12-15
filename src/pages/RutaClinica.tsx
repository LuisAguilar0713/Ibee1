
import React from 'react'
import './rutaClinica.css'

import './rutaClinica.css';
import { IonButton, IonCard, IonCardContent, IonContent, IonPage } from '@ionic/react';
import { IonModal } from '@ionic/react';
import { useEffect, useState } from 'react';
import { ArrowLeftIcon } from '@primer/octicons-react';
import { ListaTratamientos } from '../components/modals/ListaTratamientos';
import { useParams } from 'react-router';
import axios from 'axios';
import { Layout } from '../components/layout/Layout';

export const RutaClinica = () => {
   const params: any = useParams()
    let pacienteInicio: any = null
   const [paciente, setPaciente] = useState(pacienteInicio)
    const pacienteId  = params.pacienteId
    const[showModal,setShowModal]=useState(false)
    const [tratamientos, setTratamientos]= useState([])
const loadData = () => {
   axios.get('http://localhost:4000/tratamientos')
   .then(result => {
      setTratamientos(result.data)
   })
}

useEffect(loadData, [])
    
    return (
      
      <IonPage >
      <IonContent className='pageConten'  >
      <IonModal isOpen={showModal}cssClass="my-custom-class"swipeToClose={true}
      animated onDidDismiss={() => {
   setShowModal(false)
       }}
        >
     <ListaTratamientos setShowModal={setShowModal}
     paciente={ paciente }
       />
     </IonModal>      
         
         <h1> Ruta clinica</h1>
        
         <div className=''>
         <IonButton className='masbtn' size="small"  onClick={ ()=>setShowModal(true) }>+</IonButton>
         </div>
         
                   
     <div className='contenCar'>
   {tratamientos.map( (c: any )=>  (
   <IonCard className='ionCard'>
     
           <IonCardContent className='ionCont'>Fecha :{c.fecha}</IonCardContent>
           <IonCardContent className='ionCont'>Tratamiento : {c.descripcion}</IonCardContent>
           <IonCardContent className='ionCont'>Nombre del doctor : {c.nombre_doctor}</IonCardContent>
          
             
   </IonCard>

))}
  
 </div>
     
     </IonContent>
     </IonPage>
     
     )

  }
  export default RutaClinica
  
