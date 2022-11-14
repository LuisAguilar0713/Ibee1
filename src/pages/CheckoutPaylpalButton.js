import React, {useState} from "react";
import ReactDOM from "react-dom"
import './Checkout.css'
import { HistorialPagos } from '../components/pagos/HistorialPagos'

import { Layout } from "../components/layout/Layout";


const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function CheckoutPaylpalButton  () {
  const [HistorialPagos, setHistorialPagos] = useState(0);

  const createOrder = (data, actions) => {
    
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: HistorialPagos
              }
            }
          ]

          
        });
      };
     const onApprove = (data, actions) => {
        return actions.order.capture();
      };
function handleChange(e){
  setHistorialPagos(e.target.value);
  
}

  return (
     <div className="contenedorcheckpaypal">
       <Layout>

      <div className="contenidobtn">
       <h3 className="pagar">Su total a pagar es</h3>
       <div className="cantidad">
        <p className="Cantidadcliente">Abonar ${HistorialPagos}</p>
       </div>
       </div>

       <div className="contenedorcheckout">
        <div className="preguntaabono"><p className="cantidad_abono">¿Cuanto desea abonar? <input className="abonocliente" type="text" onChange={handleChange} value= {HistorialPagos}></input></p>
        </div>
        </div>


  <div className="CheckoutPaylpalButton">
  
      <PayPalButton 
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      /> 

    </div>;
    </Layout>

    </div> 
  );

}