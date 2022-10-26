import React, { useState } from 'react'
import "./AntecedentesPersonalesNoP.css"
import {ArrowLeftIcon} from '@primer/octicons-react';
import { useParams } from 'react-router';

export const AntecedentesPersonalesNoP = () => {
    const params: any = useParams()
    const [mostrar, setmostrar] = useState({
        transmisionSex: false,
        golosinas: false,
        cartilla:false,
        esquema: false,
        fechahos: false,
        motivohos:false,
        padecimientos:false
    });

    const maneSubmit = (e: any) => {
        e.preventDefault()
    }
    const pacienteId  = params.pacienteId 
    return (
        <>
            <a href={`/HistoriaClinica/${pacienteId}`} className="arrows" ><ArrowLeftIcon size={40} /></a>
            <div className="contenedorAntecedentesPersonalesNoP">
                <h1>Antecedentes Personales No Patológicos</h1>
                <form onSubmit={
                    maneSubmit
                }>
                    <label htmlFor="">Habitos higienicos</label>
                    <div className="bloqueDos">
                        <input type="text"  className="obligatorio" placeholder="En el vestuario*" />
                        <input type="text" className="obligatorio" placeholder="Corporales*" />
                    </div>
                    <input type="text" placeholder="Con que frecuencia se lava los dientes" />

                    <div className="bloque">
                        <label htmlFor="">Enfermedades de tranmisión sexual</label>
                        <div>
                            <button onClick={
                                () => setmostrar({ ...mostrar, transmisionSex: true })
                            }>Si</button>
                            <button onClick={
                                () => setmostrar({ ...mostrar, transmisionSex: false })
                            }>No</button>
                        </div>
                    </div>
                    {
                        mostrar.transmisionSex ? (
                            <>
                                <div className="limpiar">
                                    <input type="text" placeholder="" />
                                    <button>x</button>
                                </div>
                            </>
                        ) : null
                    }

                    <div className="bloque">
                        <label htmlFor="" className="obligatorio">Consume golosinas u otro tipo de alimentos entre las comidas</label>
                        <div>
                            <button onClick={
                                () => setmostrar({ ...mostrar, golosinas: true })
                            }>Si</button>
                            <button onClick={
                                () => setmostrar({ ...mostrar, golosinas: false })
                            }>No</button>
                        </div>
                    </div>
                    {
                        mostrar.golosinas ? (
                            <>
                                <div className="limpiar">
                                    <input type="text" placeholder="" />
                                    <button>x</button>
                                </div>
                            </>
                        ) : null
                    }
                    <div className="bloqueDos">
                        <input type="text" placeholder="Grupo sanguineo" />
                        <input type="text" placeholder="Factor Rh" />
                    </div>

                    <div className="bloque">
                        <label htmlFor="">Cartilla de vacunación</label>
                        <div>
                            <button onClick={
                                () => setmostrar({ ...mostrar, cartilla: true })
                            }>Si</button>
                            <button onClick={
                                () => setmostrar({ ...mostrar, cartilla: false })
                            }>No</button>
                        </div>
                    </div>
                    {
                        mostrar.cartilla ? (
                            <>
                                <div className="limpiar">
                                    <input type="text" placeholder="" />
                                    <button>x</button>
                                </div>
                            </>
                        ) : null
                    }
                    <div className="bloque">
                        <label htmlFor="">Esquema completo</label>
                        <div>
                            <button onClick={
                                () => setmostrar({ ...mostrar, esquema: true })
                            }>Si</button>
                            <button onClick={
                                () => setmostrar({ ...mostrar, esquema: false })
                            }>No</button>
                        </div>
                    </div>
                    {
                        mostrar.esquema ? (
                            <>
                                <div className="limpiar">
                                    <input type="text" placeholder="" />
                                    <button>x</button>
                                </div>
                            </>
                        ) : null
                    }

                    <label htmlFor="">Adicciones</label>
                    <div className="bloqueTres">
                        <div><label htmlFor="">Tabaco</label><input className="btnRadio" type="radio" name="Adicciones" id="" /></div>
                        <div><label htmlFor="">Alcohol</label><input className="btnRadio" type="radio" name="Adicciones" id="" /></div>
                        <div><label htmlFor="">Otros</label><input className="btnRadio" type="radio" name="Adicciones" id="" /></div>
                    </div>

                    <label htmlFor="">Antecedentes alérgicos</label>
                    <div className="bloqueCuatro">
                        <div><label htmlFor="">Antibióticos</label><input className="btnRadio" type="radio" name="Antecedentes" id="" /></div>
                        <div><label htmlFor="">Analgésicos</label><input className="btnRadio" type="radio" name="Antecedentes" id="" /></div>
                        <div><label htmlFor="">Anestésicos</label><input className="btnRadio" type="radio" name="Antecedentes" id="" /></div>
                        <div><label htmlFor="">Alimentos</label><input className="btnRadio" type="radio" name="Antecedentes" id="" /></div>
                    </div>
                    <div className="limpiar">
                        <input type="text" placeholder="Especifique" />
                        <button>x</button>
                    </div>

                    <div className="bloque">
                        <label htmlFor="">Ha sido hospitalizado</label>
                        <div>
                            <button onClick={
                                () => setmostrar({ ...mostrar, fechahos: true, motivohos:true, padecimientos: true })
                            }>Si</button>
                            <button onClick={
                                () => setmostrar({ ...mostrar, fechahos: false, motivohos:false, padecimientos:false })
                            }>No</button>
                        </div>
                    </div>
                    
                    {
                        mostrar.fechahos ? (
                            <>
                                <div className="limpiar">
                                <input type="date" name="" id="" value="Fecha" />
                                    <button>x</button>
                                </div>
                            </>
                        ) : null
                    }

{
                        mostrar.motivohos ? (
                            <>
                                <div className="limpiar">
                                <input type="text" placeholder="Motivo" />
                                    <button>x</button>
                                </div>
                            </>
                        ) : null
                    }

{
                        mostrar.padecimientos ? (
                            <>
                                <div className="limpiar">
                                <input type="text" placeholder="Padecimientos" />
                                    <button>x</button>
                                </div>
                            </>
                        ) : null
                    }
                    <br />
                    <div className="btnGuardar">
                        <button type="submit">Guardar</button>
                    </div>
                    <br />
                </form>
            </div>
        </>
    )
}
