<<<<<<< HEAD
import { IonSlide, IonSlides } from '@ionic/react';
import React from 'react'
import { useHistory, useParams } from 'react-router';
import { Layout } from '../components/layout/Layout'
import { AntecedentesPatologicos } from './AntecedentesPatologicos';
import { AntecedentesPersonalesNoP } from './AntecedentesPersonalesNoP';
import { AntecedentesPersonalesPatologicos } from './AntecedentesPersonalesPatologicos';
import { ExploracionCabezaCuello } from './ExploracionCabezaCuello';
import { FichaIndentificacion } from './FichaIndentificacion';
import './HistoriaClinica.css'
import { InterrogatorioAparatosSistemas } from './InterrogatorioAparatosSistemas';
import { RutaClinica } from './RutaClinica';

export const Slides = () => {

    const params = useParams();
    const history = useHistory();

    console.log( params );
    const slideOpts = {
        initialSlide: params.page, // params.page,
        speed: 500
    };

    return (
        <Layout>
            <IonSlides 
                pager={true} 
                options={ slideOpts}
                >
                    
                <IonSlide>
                    <FichaIndentificacion />
                </IonSlide>
                <IonSlide>
                    <AntecedentesPersonalesPatologicos />
                </IonSlide>
                <IonSlide>
                    <AntecedentesPatologicos />
                </IonSlide>
                <IonSlide>
                    <AntecedentesPersonalesNoP />
                </IonSlide>
                <IonSlide>
                    <ExploracionCabezaCuello />
                </IonSlide>
                <IonSlide>
                    <InterrogatorioAparatosSistemas />
                </IonSlide>
                <IonSlide>
                    <RutaClinica />
                </IonSlide>
            </IonSlides>
        </Layout>
    )
}
=======
import { IonSlide, IonSlides } from '@ionic/react';
import React from 'react'
import { useHistory, useParams } from 'react-router';
import { Layout } from '../components/layout/Layout'
import { AntecedentesPatologicos } from './AntecedentesPatologicos';
import { AntecedentesPersonalesNoP } from './AntecedentesPersonalesNoP';
import { AntecedentesPersonalesPatologicos } from './AntecedentesPersonalesPatologicos';
import { ExploracionCabezaCuello } from './ExploracionCabezaCuello';
import { FichaIndentificacion } from './FichaIndentificacion';
import './HistoriaClinica.css'
import { InterrogatorioAparatosSistemas } from './InterrogatorioAparatosSistemas';

export const Slides = () => {

    const params = useParams();
    const history = useHistory();

    console.log( params );
    const slideOpts = {
        initialSlide: params.page, // params.page,
        speed: 500
    };

    return (
        <Layout>
            <IonSlides 
                pager={true} 
                options={ slideOpts}
                >
                    
                <IonSlide>
                    <FichaIndentificacion />
                </IonSlide>
                <IonSlide>
                    <AntecedentesPersonalesPatologicos />
                </IonSlide>
                <IonSlide>
                    <AntecedentesPatologicos />
                </IonSlide>
                <IonSlide>
                    <AntecedentesPersonalesNoP />
                </IonSlide>
                <IonSlide>
                    <ExploracionCabezaCuello />
                </IonSlide>
                <IonSlide>
                    <InterrogatorioAparatosSistemas />
                </IonSlide>
            </IonSlides>
        </Layout>
    )
}
>>>>>>> 8fc3667def120dc68c1402f4d13fed99f9f4e22b
