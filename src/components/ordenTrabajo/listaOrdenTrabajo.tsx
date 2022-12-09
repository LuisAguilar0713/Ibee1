import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import flecha from './../../assets/img/arrow-derecha.png'
import userImage from '../../assets/img/woman-gfec6923be_640.jpg';
import './listaOT.css'
import { config } from '../../env';

export const ListaOrdenTrabajo = ({
  orden = [],
  handleOrdenClick = (pacienteId: any) => {}
}, props: any) => {
  return (
    <div className="listaPT">

      {
        orden.map((orden: any) => (
          <IonCard>
          <IonCardHeader>
            <IonCardTitle>{orden.doctor}</IonCardTitle>
            <IonCardSubtitle>{orden.fecha}</IonCardSubtitle>
          </IonCardHeader>
    
          <IonCardContent>
           {orden.paciente}
          </IonCardContent>
        </IonCard>
    
        ))
      }
    </div>
  )
}

