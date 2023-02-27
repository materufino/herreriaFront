import { useState } from "react";
import styled from "styled-components";
import ListaPedidos from '../ArrayPedidos'


const Contenedor = styled.div`
text-align: center;
background-color: #f9f6e8;
color: #3a1603;
border: 1px solid #847f56;
min-height: 470px;
border-radius: 5px;
margin: auto;
margin-top: 10px;
h3 {
    font-family: 'Rakkas', cursive;
    font-size: 24px;
    margin: 20px 0px;
};

label{
    margin: 10px;
}
`





const Trabajos = styled.div`
    display: flex;
    flex-wrap: wrap;
    h4{
        width: 100%;
        text-align: center;
        font-family: 'Rakkas', cursive;
        font-size:1.2rem;
    }
    div{
        width: 100%;
        margin:10px;
    }
    p{
        width: 100%;
        margin: 10px;
        display: inline-block;
        
    }
`
const ContenedorTextArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    h4{
        width: 100%;
        text-align: center;
        font-family: 'Rakkas', cursive;
        margin: 10px;
        
    }
    textarea{
    width: 90%;
    justify-content: center;
    margin: 10px;
    resize: none; 
    }
    button{
        margin: 10px;
    }
    

`




const CardTareas = ({ idTarea, objeto, especialidad, tipo_artefacto, categoriaObjeto, realizar, herrero, tiempoEstimado, estado, observaciones, textoBoton, readOnly, index }) => {



    const [pedidos, setPedidos] = useState(ListaPedidos);

    // Cambiar estado global del pedido PENDIENTE O FINALIZADO
    const onCambiarEstado = (id) => {
        const pedidosActualizados = [...pedidos];
        const pedidoActualizado = pedidosActualizados.find(pedido => pedido.idTarea === id);
        if (pedidoActualizado.estado === 'pendiente') {
            pedidoActualizado.estado = 'finalizado'
        } else {
            pedidoActualizado.estado = 'pendiente'
        }
        setPedidos(pedidosActualizados);
    }

    //FALTA QUE SE VUELVA A RENDERIZAR LUEGO DE CAMBIAR LOS ESTADOS, YA QUE SE MODIFICA PERO NO SE VUELVE A RENDERIZAR


    const [estadoActual, setEstadoActual] = useState(realizar)

    // Cambiar estado de la tarea  con el select En espera - En proceso - Finalizado
    const handleEstado = (event, index) => {
        console.log(estadoActual)
        const estadoActualizado = [...estadoActual]
        estadoActualizado[index].estado = event.target.value
        setEstadoActual(estadoActualizado)
        console.log(estadoActual)
    }
    //El select no se puede volver a utilizar dice "estadoActual is not iterable"



    //TextArea

    const [observacion, setObservacion] = useState(observaciones);
    const handleObservationChange = (event) => {
        console.log(observacion)
        const obsActualizada = event.target.value
        setObservacion(obsActualizada)
    }
    //No guarda la ultima letra y se ejecuta muchas veces



    return (
        <Contenedor>

            <h3>{objeto}</h3>
            <Trabajos>
                <h4>Trabajos a realizar: </h4>
                {realizar.map((pendiente, index) => (
                    <div key={index}>
                        <p>{pendiente.trabajo}</p>
                        <label htmlFor="estado">Estado:</label>
                        <select name="estado" id="estado" value={realizar[index].estado} disabled={readOnly} onChange={(event) => handleEstado(event, index)}>
                            <option value="En espera">En espera</option>
                            <option value="En proceso">En proceso</option>
                            <option value="Finalizado">Finalizado</option>
                        </select>
                    </div>
                ))}
            </Trabajos>
            <ContenedorTextArea>
                <h4>Observaciones</h4>
                <textarea defaultValue={observaciones} cols="30" rows="10" disabled={readOnly} onChange={handleObservationChange} ></textarea>
                <button type="submit" onClick={() => onCambiarEstado(idTarea)}>{textoBoton}</button>
            </ContenedorTextArea>
        </Contenedor>

    )

}


export default CardTareas;

