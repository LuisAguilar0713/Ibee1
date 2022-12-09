import React, {useState} from "react";
import ReactDOM from "react-dom"
import './Checkout.css'
import { Layout } from "../components/layout/Layout";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function CheckoutPaylpalButton  () {
  const [price, setPrice] = useState(0);
  const createOrder = (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: price
              }
            }
          ]
        });
      };
     const onApprove = (data, actions) => {
        return actions.order.capture();
      };
function handleChange(e){
  setPrice(e.target.value);
}
  return (
     <div className="contenedorcheckout">
       <Layout>
       <h3 className="pagar">Su total a pagar es </h3>
       <div className="cantidad">
        <p className="Cantidadcliente">Abonar ${price}</p>
       </div>

       <div className="contenedorcheckout">
        <div className="preguntaabono"><p className="cantidad_abono">¿Cuanto desea abonar? <input className="abonocliente" type="text" onChange={handleChange} value= {price}></input></p>
        
        </div>
      

  <div className="CheckoutPaylpalButton">
      <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      /> 
     
    </div>;
    </div>
    </Layout>
    
    </div> 
  );
}
