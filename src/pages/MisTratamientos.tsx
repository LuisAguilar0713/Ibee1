import './MisTratamientos.css';
import { IonButton, IonCard, IonCardContent, IonContent, IonPage } from '@ionic/react';
import { IonModal } from '@ionic/react';
import { useEffect, useState } from 'react';
import { ArrowLeftIcon } from '@primer/octicons-react';
import { ListaTratamientos } from '../components/modals/ListaTratamientos';
import { useParams } from 'react-router';
import axios from 'axios';
import { Layout } from '../components/layout/Layout';

export const MisTratamientos = () => {
    const params: any = useParams();
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
      <IonPage>
         <Layout>
      <IonContent className='pageConten'>


         <h1> Mis Tratamientos</h1>

     <div className='contenCar'>
   {tratamientos.map( (c: any )=>  (
   <IonCard className='ionCard'>
     
           <IonCardContent className='ionCont'>Fecha :{c.fecha}</IonCardContent>
           <IonCardContent className='ionCont'>Tratamiento : {c.descripcion}</IonCardContent>
         
          
             
   </IonCard>

))}
  
 </div>
     
    
        
     </IonContent>
     </Layout>
     </IonPage>
     
     )

  }
  export default MisTratamientos
  

