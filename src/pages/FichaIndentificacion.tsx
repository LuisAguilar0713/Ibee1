import { IonLabel, IonSegment, IonSegmentButton, IonToast } from '@ionic/react';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router';
import { config } from '../env';
import "./FichaIdentificacion.css";
import {ArrowLeftIcon} from '@primer/octicons-react';

export const FichaIndentificacion = () => {

    const params: any = useParams()
    const [showToast, setShowToast] = useState(false);
    const [mostrar, setmostrar] = useState({
        medicofam: false,
        medicotel:false
    });
    const [values, setValues] = useState({
        nombre:'',
        ap_paterno:'',
        ap_materno:'', 
        edad:'',
        masculino: 'null', 
        femenino: 'null', 
        lugar_naci_estado: '',
        lugar_naci_ciudad:'', 
        f_nacimiento: '', 
        ocupacion: '', 
        escolaridad: '', 
        estado_civil: '', 
        num_inter: '', 
        delegacion: '',
        nom_med_fam: '', 
        tel_medico: '', 
        fecha_cita: '', 
        motivo: '',
        calle:'',
        numero: '',
        colonia: '',
        estado: '', 
        ciudad: ''
    });

    useEffect(()=>{
        getFichaIndentificacion()
        getpersona()
    },[])

    const location = useLocation();
    const { pathname } = location;
    const pacienteId  = params.pacienteId 
    const getpersona = async() =>{

        const res = await fetch(`${config.baseUrl}/api/fichaDeIdentificacion2/${ params.pacienteId }`,{
            method: 'GET',
            redirect: 'follow'
        })

        const data = await res.json();

        if( data.error ) return console.error('hubo un error!');
        console.log( data.results[0] );
        setValues({...data.results[0]})
    }

    const getFichaIndentificacion = async() =>{

        const res = await fetch(`${config.baseUrl}/api/fichaDeIdentificacion/${ params.pacienteId }`,{
            method: 'GET',
            redirect: 'follow'
        })

        const data = await res.json();

        if( data.error ) return console.error('hubo un error!');
        console.log( data.results[0] );
        setValues({...data.results[0]})
    }

    const handleChange = (e:any) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(values);

        fetch(`${config.baseUrl}/api/fichaDeIdentificacion/${params.pacienteId}`, {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result =>{
                setShowToast( true )
            })
            .catch(error => console.log('error', error));
    }

    const limpiarCampo = (e: any) => {
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: ''
        })
	}
    return (
        <>
        <a href={`/HistoriaClinica/${pacienteId}`} className="arrows" ><ArrowLeftIcon size={40} /></a>
            <div className="contenedorFicha">
                <h1>Ficha de identificación</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Nombre:</label>
                    <div className="limpiar">
                        <input
                            className="obligatorio" 
                            type="text" 
                            name= "nombre"
                            value={values.nombre}
                            placeholder="Nombre*" 
                            />
                        <button
                        onClick={limpiarCampo}
                        >x</button>
                    </div>
                    <div className="limpiar">
                    <input className="obligatorio" type="text" value={values.ap_paterno} placeholder="Apellido Paterno*" onChange={ handleChange }/>
                        <button type='button'>x</button>
                    </div>
                    <div className="limpiar">
                    <input className="obligatorio" type="text" value={values.ap_materno} placeholder="Apellido Materno*" onChange={ handleChange }/>
                        <button>x</button>
                    </div>
                    <div className="edadGenero">
                        <div className="edad">
                            <label htmlFor="">Edad:</label>
                            <input type="text" value={values.edad} placeholder="Años" onChange={ handleChange }/>
                        </div>
                        <div className="genero">
                            <label htmlFor="">Genero</label>
                            <div className='marcaicono'>
                                <button type='button' onClick={()=> setValues({...values, masculino:'1', femenino:'0'})} >Masculino</button>
                                <button type='button' onClick={()=> setValues({...values, femenino:'1', masculino:'0'})} >Femenino</button>
                            </div>
                        </div>
                    </div>
                    <div className="lugarFecha">
                        <label htmlFor="">Lugar y fecha de nacimiento:</label>
                        <div className="estadoCiudad">
                            <input 
                                type="text" 
                                placeholder="Estado" 
                                name="lugar_naci_estado"
                                value={ values.lugar_naci_estado }
                                onChange={ handleChange }
                                />
                            <input 
                                type="text" 
                                placeholder="Ciudad" 
                                name='lugar_naci_ciudad'
                                value={values.lugar_naci_ciudad}
                                onChange={handleChange}
                                />
                        </div>
                        <div className="limpiar">
                            <input className='centro' name='f_nacimiento' type="text" placeholder="Día/Mes/Año" value={values.f_nacimiento} onChange={handleChange}/>
                        </div>
                        <div className="estado">
                            <input type="text" name='ocupacion' placeholder="Ocupación" value={values.ocupacion} onChange={handleChange}/>
                            <input type="text" name='escolaridad' placeholder="Escolaridad" value={values.escolaridad} onChange={handleChange}/>
                        </div>
                        <div className="estado">
                            <input 
                                type="text" 
                                placeholder="Estado civil"
                                name="estado_civil"
                                value={ values.estado_civil }
                                onChange={ handleChange }
                                />
                            <input name='calle' value={values.calle} type="text" placeholder="Calle" onChange={handleChange}/>
                        </div>
                        <div className="estado">
                            <input name='numero' type="text" placeholder="Núm. exterior" value={values.numero} onChange={handleChange}/>
                            <input name='num_inter' type="text" placeholder="Núm. interno" value={values.num_inter} onChange={handleChange}/>
                        </div>
                        <div className="estado">
                            <input name='colonia' type="text" placeholder="Colonia" value={values.colonia} onChange={handleChange}/>
                            <input name='estado' type="text" placeholder="Estado" value={values.estado} onChange={handleChange}/>
                        </div>
                        <div className="estado">
                            <input name='ciudad' type="text" placeholder="Municipio" value={values.ciudad} onChange={handleChange}/>
                            <input name='delegacion' type="text" placeholder="Delegacion" value={values.delegacion} onChange={handleChange}/>
                        </div>
                        <div className="estado">
                            <input 
                                type="text" 
                                placeholder="Telefono" 
                                name="tel_medico"
                                value={ values.tel_medico }
                                onChange={ handleChange }
                                />
                            <input type="text" placeholder="Telefono Oficina" />
                        </div>
                        <div className="bloque">
                        <label htmlFor="" className="obligatorio">¿Cuenta con un medico familiar?</label>
                        <div>
                            <button type='button' onClick={
                                () => setmostrar({ ...mostrar, medicofam: true, medicotel:true })
                            }>Si</button>
                            <button type='button' onClick={
                                () => setmostrar({ ...mostrar, medicofam: false, medicotel:false })
                            }>No</button>
                        </div>
                    </div>
                    {
                        mostrar.medicofam ? (
                            <>
                                <div className="limpiar">
                                    <input 
                                        type="text" 
                                        placeholder="Nombre del medico familiar" 
                                        name="nom_med_fam"
                                        value={ values.nom_med_fam  }
                                        onChange={ handleChange }
                                        />
                                    <button>x</button>
                                </div>
                            </>
                        ) : null
                    }
                    {
                        mostrar.medicotel ? (
                            <>
                                <div className="limpiar">
                                    <input 
                                        type="text" 
                                        placeholder="telefono del medico familiar" 
                                        name="tel_medico"
                                        value={ values.tel_medico  }
                                        onChange={ handleChange }
                                        />
                                    <button>x</button>
                                </div>
                            </>
                        ) : null
                    }
                    <input className="obligatorio" name='motivo' type="text" placeholder="Fecha y motivo de la ultima consulta médica odontologíca*" value={values.motivo} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btnGuardar">Guardar
                    </button>
                    <IonToast
                        isOpen={ showToast }
                        onDidDismiss={() => setShowToast(false)}
                        message={`actualizado correctamente`}
                        cssClass='bg-black'
                        duration={3000}
                    />
                </form>
            </div>
        </>
    )
}
