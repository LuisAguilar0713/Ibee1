import { IonContent, IonPage} from '@ionic/react';
import { useEffect, useState } from 'react';
import { Layout } from '../components/layout/Layout';
import './Orden.css';
import { useParams } from 'react-router';
import iconYeso from '../assets/img/yesos.png'
import logoDTD from '../assets/img/Logodtd.jpeg'
import iconAdministracion from '../assets/img/administracion.png'
import iconDiseño from '../assets/img/diseño.png'
import iconArrow from './../assets/img/arrow-derecha.png'
import iconFresado from './../assets/img/fresado.png'
import iconSinterizado from './../assets/img/Sinterizado.png'
import iconCeramica from './../assets/img/ceramica.png'
import iconEnvio from './../assets/img/caja.png'
import { config } from '../env'
import toast from 'react-hot-toast';
import axios from 'axios';
import {ArrowLeftIcon, CheckCircleIcon} from '@primer/octicons-react';


const Orden: React.FC = () => {

    const params: any = useParams()
    let pacienteInicio: any = null
    let dfInicio: any = null
    const [orden, setOrden] = useState(pacienteInicio)

    useEffect(() => {
        buscarOrden()
    }, [params])

    const buscarOrden = async () => {
        try {
            const { data } = await axios.get(`${config.baseUrl}/api/orden/${params.id}`)
            console.log(data);
            setOrden(data.orden)
        } catch (error) {
            console.log({ error });
            toast.error('error obteniendo paciente')
        }
    }
    const [style, setStyle] = useState("cont-orden")
    const changeStyle = () => {
		setStyle("cont-orden2")
	}
    
    const [style2, setStyle2] = useState("cont-orden")
    const changeStyle2 = () => {
		setStyle2("cont-orden2")
	}

    const [style3, setStyle3] = useState("cont-orden")
    const changeStyle3 = () => {
		setStyle3("cont-orden2")
	}

    const [style4, setStyle4] = useState("cont-orden")
    const changeStyle4 = () => {
		setStyle4("cont-orden2")
	}

    const [style5, setStyle5] = useState("cont-orden")
    const changeStyle5 = () => {
		setStyle5("cont-orden2")
	}

    const [style6, setStyle6] = useState("cont-orden")
    const changeStyle6 = () => {
		setStyle6("cont-orden2")
	}

    const [style7, setStyle7] = useState("cont-orden")
    const changeStyle7 = () => {
		setStyle7("cont-orden2")
	}

    return (
        <IonPage>
            <IonContent fullscreen>
                <Layout>
                <a href={`/Laboratorio`} className="arrows" ><ArrowLeftIcon size={40} /></a>
                    
                    {
                        orden && (
                            <div className="contedorOrden">

                                
                            <div className= 'logoFolio-O'>
                            <div><img className='logoDTD-O' src={logoDTD} alt="" /></div>
                            <div className='folioidfolio-O'>
                            <div className='folio-O'>Folio: </div>
                            <div className='idFolio-O'>{orden.id_orden}</div>
                            </div>
                            </div>
                            <div className='a-O'><p><b>Doctor:</b>{orden.doctor}</p><p><b>Fecha:</b>{orden.fecha}</p></div>
                            <div className='a-O'><p><b>Paciente:</b>{orden.paciente}</p><p><b>Edad:</b>{orden.edad}</p></div>
                            <p><b>Tipo de Trabajo: </b>{orden.tipo_trabajo}</p>
                            <div className='a-O'><p><b>Vita:</b>{orden.vita}</p><p><b>Chromascop:</b>{orden.chromascop}</p><p><b>Otros:</b>{orden.otros}</p></div>
                            <p><b>Indicador de unidades:</b></p>
                            <div className='bloqueCuatro-O'>
                            <div className='margen-O'>
                                    <label htmlFor=''>17<input className='btnRadio' type='checkbox' name='u17' checked={orden.u17}></input></label>
                                    <label htmlFor=''>16<input className='btnRadio' type='checkbox' name='u16' checked={orden.u16}></input></label>
                                    <label htmlFor=''>15<input className='btnRadio' type='checkbox' name='u15' checked={orden.u15}></input></label>
                                    <label htmlFor=''>14<input className='btnRadio' type='checkbox' name='u14' checked={orden.u14}></input></label>
                                    <label htmlFor=''>13<input className='btnRadio' type='checkbox' name='u13' checked={orden.u13}></input></label>
                                    <label htmlFor=''>12<input className='btnRadio' type='checkbox' name='u12' checked={orden.u21}></input></label>
                                    <label htmlFor=''>11<input className='btnRadio' type='checkbox' name='u11' checked={orden.u11}></input></label>
                                </div>
                                <div className='margen2-O'>
                                    <label htmlFor=''>21<input className='btnRadio' type='checkbox' name='u21' checked={orden.u21}></input></label>
                                    <label htmlFor=''>22<input className='btnRadio' type='checkbox' name='u22' checked={orden.u22}></input></label>
                                    <label htmlFor=''>23<input className='btnRadio' type='checkbox' name='u23' checked={orden.u23}></input></label>
                                    <label htmlFor=''>24<input className='btnRadio' type='checkbox' name='u24' checked={orden.u24}></input></label>
                                    <label htmlFor=''>25<input className='btnRadio' type='checkbox' name='u25' checked={orden.u25}></input></label>
                                    <label htmlFor=''>26<input className='btnRadio' type='checkbox' name='u26' checked={orden.u26}></input></label>
                                    <label htmlFor=''>27<input className='btnRadio' type='checkbox' name='u27' checked={orden.u27}></input></label>
                                </div>
                                <div className='margen-O'>
                                    <label className='label' htmlFor=''>47<input className='btnRadio' type='checkbox' name='u47' checked={orden.u47}></input></label>
                                    <label className='label' htmlFor=''>46<input className='btnRadio' type='checkbox' name='u46' checked={orden.u46}></input></label>
                                    <label className='label' htmlFor=''>45<input className='btnRadio' type='checkbox' name='u45' checked={orden.u45}></input></label>
                                    <label className='label' htmlFor=''>44<input className='btnRadio' type='checkbox' name='u44' checked={orden.u44}></input></label>
                                    <label className='label' htmlFor=''>43<input className='btnRadio' type='checkbox' name='u43' checked={orden.u43}></input></label>
                                    <label className='label' htmlFor=''>42<input className='btnRadio' type='checkbox' name='u42' checked={orden.u42}></input></label>
                                    <label className='label' htmlFor=''>41<input className='btnRadio' type='checkbox' name='u41' checked={orden.u41}></input></label>
                                </div>
                                <div className='margen2-O'>
                                    <label className='label' htmlFor=''>31<input className='btnRadio' type='checkbox' name='u31' checked={orden.u31}></input></label>
                                    <label className='label' htmlFor=''>32<input className='btnRadio' type='checkbox' name='u32' checked={orden.u32}></input></label>
                                    <label className='label' htmlFor=''>33<input className='btnRadio' type='checkbox' name='u33' checked={orden.u33}></input></label>
                                    <label className='label' htmlFor=''>34<input className='btnRadio' type='checkbox' name='u34' checked={orden.u34}></input></label>
                                    <label className='label' htmlFor=''>35<input className='btnRadio' type='checkbox' name='u35' checked={orden.u35}></input></label>
                                    <label className='label' htmlFor=''>36<input className='btnRadio' type='checkbox' name='u36' checked={orden.u36}></input></label>
                                    <label className='label' htmlFor=''>37<input className='btnRadio' type='checkbox' name='u37' checked={orden.u37}></input></label>
                                </div>
                                </div>
                                
						<div className='a-O'>
						<label className='mamelones-O'><b>MAMELONES: </b></label>
                        <div className='amb-O'>
						<label>{orden.mamelones}</label>
						</div>
					</div>
                    <div className='label-O'>
					<div className='a-O'><label className='naranja-O'><b>TRANSLUCIDEZ: </b>
                    <div className='amb-O'>
                    <label >{orden.translucidez}</label>
                    </div>
					</label>
					<label className='naranja-O'><b>TEXTURA: </b>
					<div className='amb-O'>
						<label>{orden.textura}</label>
					</div>	
					</label> 
					<label className='naranja-O'><b>BRILLO: </b>
					<div className='amb-O'>
						<label>{orden.brillo}</label>
					</div>
						</label></div>
						</div>
                        <div className='a-O'>
					<p><label className='p'>MODELO YESO: </label> <input className='btnRadio' type='checkbox' checked={orden.yeso} name='yeso'  ></input></p>
					<p><label className='p'>REGISTRO OCLUSAL: </label><input className='btnRadio' type='checkbox' checked={orden.oclusal} name='oclusal' ></input></p>
					<p><label className='p'>ANTAGONISTA: </label><input className='btnRadio' type='checkbox' checked={orden.antagonista} name='antagonista' ></input></p>
					<p><label className='p'>FOTOGRAFÍAS: </label><input className='btnRadio' type='checkbox' checked={orden.foto} name='foto' ></input></p>
					</div>

					<div className='a-O'>
					<p><label className='p'>ARTICULADOR: </label> <input className='btnRadio' type='checkbox' checked={orden.articulador} name='articulador'></input></p>
					<p><label className='p'>CORONAS: </label><input className='btnRadio' type='checkbox' checked={orden.coronas} name='coronas'></input></p>
					<p><label className='p'>ADITAMIENTO DE IMPLANTE: </label><input className='btnRadio' type='checkbox' checked={orden.implante} name='implante' ></input></p>
					<p><label className='p'>CUCHARILLAS: </label><input className='btnRadio' type='checkbox' checked={orden.cucharillas} name='cucharillas'></input></p>
					</div>
                    
                    <div className='a-O'>
                        <label><b>Notas: </b>{orden.notas} </label>
                    </div>

                    <div className='check'>
                    <a className={style} href={`/MisTratamientos/${params.id}`}>
                                    <div><img src={iconAdministracion} alt="" />
                                        <p>Administración</p></div>
                                    <img className="flecha" src={iconArrow} alt="" />
                                </a> <button  onClick={changeStyle}><CheckCircleIcon size={30} /></button></div>

                                <div className='check'><a className={style2} href="">
                                    <div><img src={iconYeso} alt="" />
                                        <p>Área de yesos</p></div>
                                    <img className="flecha" src={iconArrow} alt="" />
                                </a><button onClick={changeStyle2} ><CheckCircleIcon size={30} /></button></div>

                                <div className='check'><a className={style3} href={`/pagos/${params.id}`}>
                                    <div><img src={iconDiseño} alt="estados de cuenta" />
                                        <p>Diseño</p></div>
                                    <img className="flecha" src={iconArrow} alt="" />
                                </a><button onClick={changeStyle3}><CheckCircleIcon size={30} /></button></div>

                                <div className='check'><a className={style4} href="/MisEstudios">
                                    <div><img src={iconFresado} alt="" />
                                        <p>Fresado</p></div>
                                    <img className="flecha" src={iconArrow} alt="" />
                                </a><button onClick={changeStyle4}><CheckCircleIcon size={30} /></button></div>

                                <div className='check'><a className={style5} href={`/historiaclinica/${params.id}`}>
                                    <div><img src={iconSinterizado} alt="" />
                                        <p>Sinterizado</p></div>
                                    <img className="flecha" src={iconArrow} alt="" />
                                </a><button onClick={changeStyle5}><CheckCircleIcon size={30} /></button></div>

                                <div className='check'><a className={style6} href={`/historiaclinica/${params.id}`}>
                                    <div><img src={iconCeramica} alt="" />
                                        <p>Área de cerámica</p></div>
                                    <img className="flecha" src={iconArrow} alt="" />
                                </a><button onClick={changeStyle6}><CheckCircleIcon size={30} /></button></div>

                                <div className='check'><a className={style7} href={`/historiaclinica/${params.id}`}>
                                    <div><img src={iconEnvio} alt="" />
                                        <p>Envio</p></div>
                                    <img className="flecha" src={iconArrow} alt="" />
                                </a><button onClick={changeStyle7}><CheckCircleIcon size={30} /></button></div>
                            </div>
                        )
                    }
                </Layout>
            </IonContent>
        </IonPage>
    );
};

export default Orden;
