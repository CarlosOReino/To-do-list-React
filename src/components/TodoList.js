const { useState } = require("react")


const TodoList = () =>{
    const [tarea, setTarea] = useState([])
    const [nuevaTarea, setNuevaTarea] = useState("");

const handleAgregar = () => {
    setTarea([...tarea, nuevaTarea]);
    setNuevaTarea("");
}

const handleEliminar = () => {
    setTarea([...tarea.slice(0, -1)])
}


const handleBoton = (index) => {
    setTarea(tarea.filter((tareaActual, indice) => indice !== index));
}
    return(
        <div className="card bg-light mb-3">
            <label className="mt-2 mb-4 p-4">
                <input className="form-control form-control-lg p-4" type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} placeholder="Ingresa una tarea"/>
            </label>
            <div className="btn-group p-4 mt-2 mb-4" role="group" aria-label="First group" >
                <button type="button" className="btn btn-warning " onClick={handleAgregar}>Agregar tarea</button>
                <button type="button" className="btn btn-danger " onClick={handleEliminar}>Eliminar última tarea</button>
            </div>
            <div>
                
                <ul className="list-group list-group-numbered p-4">

                    {tarea.map((item, index) => (<li className="list-group-item" key={item}>{item} 
                    <buton type="button" className="btn btn-xs btn-outline-danger" onClick={() => handleBoton(index)}>Eliminar</buton></li> ))}

                </ul>
                
            </div>  
        </div> 
        
    )
}


export default TodoList;