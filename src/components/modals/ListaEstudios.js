import './estudios.css'


export const ListaEstudios=({setShowModal})=>{
    return(
        <>
        <button className="boton-x1" onClick={() => setShowModal(false)}>x</button>
        
        <div className='contenLIst'>
            
            <h1>Agregar nuevo tratamiento</h1>
                     <div className='containerLis'>
                            <input
                            type="date">

                            </input>
                       
                            <input 
                            type="text"
                            placeholder='Nombre del tratamiento'>
                            </input>
                        
                            <input 
                            type="text"
                            placeholder='Nombre del doctor'>
                            </input>
                            <div className='btn'><button >Guardar</button></div>
                     </div>
        </div>
        </>
    )
}
