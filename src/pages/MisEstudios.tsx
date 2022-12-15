
import './MisEstudios.css';
import { IonButton, IonCard, IonCardContent, IonContent, IonPage } from '@ionic/react';
import { IonModal } from '@ionic/react';
import { useEffect, useState } from 'react';
import { ArrowLeftIcon } from '@primer/octicons-react';
import { ListaTratamientos } from '../components/modals/ListaTratamientos';
import { useParams } from 'react-router';
import axios from 'axios';
import { Layout } from '../components/layout/Layout';
import { ListaEstudios } from '../components/modals/ListaEstudios';

export const MisEstudios = () => {
    const params: any = useParams();
    const pacienteId  = params.pacienteId
    const[showModal,setShowModal]=useState(false)
    const [estudios, setEstudios]= useState([])
const loadData = () => {
   axios.get('http://localhost:4000/estudios')
   .then(result => {
      setEstudios(result.data)
   })
}

useEffect(loadData, [])






    
    return (
      
      <IonPage  >
         <Layout>
      <IonContent className='pageConten'>
      <IonModal isOpen={showModal}cssClass="my-custom-class"swipeToClose={true}
      animated onDidDismiss={() => {
   setShowModal(false)
       }}
        >
     <ListaEstudios setShowModal={setShowModal}
       />
     </IonModal>
  
             
         
         <h1> Mis Estudios</h1>
        
        
         <div className=''>
         <IonButton className='masbtn' size="small"  onClick={ ()=>setShowModal(true) }>+</IonButton>
         </div>
         
                   
     <div className='contenCar'>
   {estudios.map( (c: any )=>  (
   <IonCard className='ionCard'>
     
           <IonCardContent className='ionCont'>Fecha :{c.fecha}</IonCardContent>
           <IonCardContent className='ionCont'>Estudio realizado : {c.tipo_estudio}</IonCardContent>

          
             
   </IonCard>

))}
  
 </div>
     
    
        
     </IonContent>
     </Layout>
     </IonPage>
     
     )

  }
  export default MisEstudios
  
