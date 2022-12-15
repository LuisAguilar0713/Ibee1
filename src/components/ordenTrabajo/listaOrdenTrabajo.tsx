import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React, { useState } from 'react'
import './listaOT.css'

export const ListaOrdenTrabajo = ({
  orden = [],
  
  handleOrdenClick = (ordenId: any) => {}

}, props: any) => {
  const [values, setValues] = useState({
	})
  return (
    <div className="listaPT">

      {
        orden.map((orden: any) => (

          <><IonCard className="contenidoPaciente">
            <IonCardHeader className='nombre'>Folio:{orden.id_orden}
            <IonCardTitle > Doctor: {orden.doctor}</IonCardTitle>
              <IonCardSubtitle></IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent className='nombreText'>
              Paciente: {orden.paciente} <br/>Tipo de trabajo: {orden.tipo_trabajo}
            </IonCardContent>
          </IonCard>
          
            </> 
          
    
        ))
      }
    </div>
  )
}

