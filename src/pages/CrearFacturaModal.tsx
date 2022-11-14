import { config } from '../env';
import React, { useState } from 'react'
import { useParams } from 'react-router';
import { Layout } from '../components/layout/Layout'

export const CrearFacturaModal = () => {

  const [values, setValues] = useState({
    id_persona:'',
    direccion_id_direccion:'',
    datos_fiscales_id_datos_fiscales:'',
    id_correo:'',
    nombre:'',
    ap_paterno:'',
    ap_materno:'', 
});
const params:any = useParams()
const id_persona= params.id_persona


  return (
    <Layout>
    <div>Factura</div>
    <div>Cliente {id_persona}</div>
    </Layout>
  )
}
