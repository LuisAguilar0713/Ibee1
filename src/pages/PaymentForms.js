import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import './Checkout.css'
import 'react-credit-cards/es/styles-compiled.css'
import { Layout } from '../components/layout/Layout'

const PaymentForms  = () => {
    const [state, setState] = useState({
        number:"",
        name:"",
        expiry:"",
        cvc:"",
        focus:""
    })
    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    
    const handleFocusChange = (e) => {
        setState ({
            ...state,
            focus : e.target.name
        })
    }
   
const processPayment = () => {
    console.log("number => ", state.number)
    console.log("name => ", state.name)
    console.log("expiry => ", state.expiry)
    console.log("cvc => ", state.cvc)
    console.log(JSON.stringify(state))
}

    return (

<Layout>

<div className='totalpagar'>
<h1 className='totalcliente'>SU TOTAL A PAGAR ES DE</h1>

<div className ="card">

<div className="cardbody">
        <Cards
        number={state.number}
        name={state.name}
        expiry={state.expiry}
        cvc={state.cvc}
        focused={state.focus}
        />
<form>
    <div class Name='grupo1'>
      <label className='Numero' htmlFor="numbre">Número de Tarjeta</label>
        <input
       className='numinput' 
        type="text" 
        name="number" 
        id="number" 
        maxLength="16" 
        onChange={handleInputChange}
        onFocus={handleFocusChange}
            />
    </div>

    <div className='grupo2'>
        <label htmlFor="name">Nombre del Titular</label>
        <input type="text" name="name" 
        id="name" className='control2'
        onChange={handleInputChange}
        onFocus={handleFocusChange}/>
    </div>

     <div className='row1'>
    <div className='grupo3'>
        <label htmlFor="expiry">Fecha de Expiración</label>
        <input type="text" name="expiry" 
        maxLength="4"
        id="expiry" className='control3'
        onChange={handleInputChange}
        onFocus={handleFocusChange}/>
    </div>
    
    <div className='grupo4'>
        <label htmlFor="cvc">CVC</label>
        <input type="text"
         name="cvc" 
         maxLength="4"
        id="cvc" className='control4'
        onChange={handleInputChange}
        onFocus={handleFocusChange}/>
    </div>
    </div>
    
    <button onClick={processPayment} type="button" className="btn btn-success btn-block btn-lg">Pagar</button>
</form>
</div>
 </div>
 
</div>
</Layout>

    )
}

export default PaymentForms