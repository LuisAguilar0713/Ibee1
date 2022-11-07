
import { IonContent, IonPage } from '@ionic/react';
import { Layout } from '../components/layout/Layout';
import iconSolucion from './../assets/img/solucion.png'
import iconCampos from './../assets/img/campos.png'
import './Esterelizado.css'
import { IonIcon,  IonFab, IonFabButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/react';
import { IonSearchbar } from '@ionic/react';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';

export const esterelizado = () => {

    return (
        <IonPage>
            <IonContent>
                <Layout>
                
                <div className="Consultorio1">
                    <h1>Inventario Esterelizado</h1>
                       </div>

                       <div className='Barrabusqueda'>
                       <>
                       <IonSearchbar placeholder="Buscar"></IonSearchbar>
                       </>
                       </div>

                       <div>
                       <div>

                        <IonFab vertical="center" horizontal="end" slot="fixed">
                        <IonFabButton>
                        <IonIcon icon={add} />
                        </IonFabButton>
                        </IonFab>
                       
                       </div>
                       </div>
                       
        <div>
        <IonCard  className='producto'>
        
        
        <IonCardHeader className='header'>
        <img alt="Silhouette of mountains" src={iconSolucion} />
        <IonCardTitle>Solucion Salina</IonCardTitle>
         <IonCardContent>SOLUCION SALINA 250 ML PISA PLASTICO RIGIDO
        </IonCardContent>
        <IonCardSubtitle>Precio: $350</IonCardSubtitle>
        <IonCardSubtitle>En existencia: 0 Unidades</IonCardSubtitle>
        </IonCardHeader>
        
        <IonButton fill="clear">Entrada</IonButton>
        <IonButton fill="clear">Salida</IonButton>
        </IonCard>

        </div>

        <div>
        <IonCard className='producto'>
        <IonCardHeader className='header'>
        <img alt="Silhouette of mountains" src={iconCampos} />
        <IonCardTitle className='producto1' >Campos</IonCardTitle>
         <IonCardContent className='producto1' >CAJA DE CAMPOS DE COLORES CON 500 PIEZAS</IonCardContent>
        <IonCardSubtitle className='producto1'>Precio: $300</IonCardSubtitle>
        <IonCardSubtitle className='producto1'>En existencia: 0 Unidades</IonCardSubtitle>
        </IonCardHeader>
        
        <IonButton fill="clear">Entrada</IonButton>
        <IonButton fill="clear">Salida</IonButton>
        </IonCard>

        </div>
       
                </Layout>
            </IonContent>
        </IonPage>
        
        )

     }