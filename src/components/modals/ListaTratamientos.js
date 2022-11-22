import './lisTratamiento.css'


export const ListaTratamientos=({setShowModal})=>{
    return(
        <>
        <button className="boton-x1" onClick={() => setShowModal(false)}>x</button>
        
        <div className='contenLIst'>
            
            <h1>Agregar nuevo tratamiento</h1>
                     
                            <input className='t' 
                            type="date">

                            </input>
                       
                            <input className='t' 
                            type="text"
                            placeholder='Nombre del tratamiento'>
                            </input>
                        
                            <input className='t'
                            type="text"
                            placeholder='Nombre del doctor'>
                            </input>
                            <div className='buttonT'><button >Guardar</button></div>
  
        </div>
        </>
    )
}
