import React from "react";
import ReactDOM from "react-dom";
import paypal from "react-paypal-checkout";
import { mixin, orderBy } from "lodash";

const PaypalCheckoutButton = ({ order }) => {
 const paypalConf = {
    corrency: 'MXN',
    env: 'sandbox',
    client: {
        sandbox: 'AadxB9CbhmPw_owgVkVkkyCTHhKAYeifHBXEnN1YEIFru1d1SA3VEDlijbnXMlFYGkCu4e0_N5rks9uj',
        production: '-- id--',
    },
    style: {
    label:'pay',
    size:'medium',
    shape:'react',
    color:'gold'
    }
 };
 const PaypalButton = paypal.Button.driver('react', {React, ReactDOM});

 const payment = (data, actions) => {
    const payment = {
      transactions:[
        {
            amount:{
                total: orderBy.total,
                currency: paypalConf.currency,
            },
            description:'Compra en Test App',
            custom: order.customer || '',
            item_list:{
                items: order.items
            }
        }
      ],
     note_to_payer: 'contáctanos para cualquier aclaración',
    };
    return actions.payment.create({ payment });
  };
  const onAuthorize = (data, actions) => {
    return actions.payment.execute()
    .then(response => {
        console.log(response);
       alert(`El Pago fue procesado correctamente, ID: ${response.id}`);
  })
  .catch(error => {
    console.log(error);
    alert('Ocurrió un error al procesar el pago con Paypal');

  });

  };
  const onError = (error) => {
console.log(error);
alert('El pago no fue realizado, vuelva a intentarlo')
  };
const onCancel = (data, actions) => {
  alert('Pago no realizado, el usuario canceló el proceso');
};
return(<PaypalButton
env={paypalConf.env}
client={paypalConf.client}
payment={(data, actions) => payment(data, actions)}
onAuthorize={(data, actions) => onAuthorize(data, actions)}
onCancel={(data, actions) => onCancel(data, actions)}
onError={(error) => onError(error)}
style={paypalConf.style}
commit
locale="es_MX"
/>
);

};
export default PaypalCheckoutButton;