
import { useEffect, useState } from "react";
import styled from "styled-components";

const Contenedor = styled.div`
text-align: center;
background-color: #ffeda4;
color: #3a1603;
border: 1px solid #847f56;
width: 400px;
position: relative;
height: 530px;
border-radius: 5px;
/* margin: auto; */
margin-top: 10px;
margin-bottom: 40px;
h3 {
    font-family: 'Rakkas', cursive;
    font-size: 24px;
    margin: 20px 0px;
};
h4{
    margin-bottom: 10px;
    font-family: 'Rakkas', cursive;
}

label{
    margin: 10px;
}
span{
    text-transform: capitalize;
}
h5{
        width:100%;
        margin-bottom: 10px;
        text-align: center;
        font-size: 1.1rem;
        text-transform:uppercase;
    }

`


const Trabajos = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    gap: 15px;
    h4{
        width: 100%;
        text-align: left;
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
    h5{
        width: 60%;
        text-align: left;
        font-size: 1.1rem;
        text-transform:capitalize;
    }
`
const ContenedorTextArea = styled.div`
    position: absolute;
    bottom: 70px;
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
    width: 75%;
    justify-content: center;
    margin: 10px;
    resize: none; 
    }
    button{
        height: 25px;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
    }
    

`
const Boton = styled.button`
    text-decoration: none;
    margin-top:75px ;
    display: flex;
    padding: 15px 10px ;
    margin-right: -7px;
    margin-left: 7px;
   
`



const CardTareas = ({ client_id, end_date, price, start_date, product_id, user_id, id, order_status, product_type, product_subtype, task, sub_task1, sub_task1_status, sub_task2, sub_task2_status, sub_task3, sub_task3_status, obs, readOnly, textoBoton, onCambiarEstado, onHandleEstado1, onHandleEstado2, onHandleEstado3, handleTextArea }) => {


    // Cambiar estado global del En proceso O FINALIZADO


    const [global, setGlobal] = useState(order_status)
    const [nuevoEstado, setNuevoEstado] = useState((global === 'En proceso') ? 'Finalizado' : 'En proceso')
    const [seccion, setSeccion] = useState((order_status === 'En proceso') ? 'finalizadas' : 'pendientes')
    const [nuevoSubTaskEstado, setNuevoSubTaskEstado] = useState()

    const cambiarEstado = (id) => {

        console.log(nuevoEstado)
        onCambiarEstado(client_id, end_date, price, start_date, product_id, user_id, id, order_status, product_type, product_subtype, task, sub_task1, sub_task1_status, sub_task2, sub_task2_status, sub_task3, sub_task3_status, obs, nuevoEstado);
        setGlobal(nuevoEstado)
    }

    // Cambiar estado de la tarea  con el select En espera - En proceso - Finalizado
    const [subTaskEstadoActual1, setSubTaskEstadoActual1] = useState(sub_task1_status)
    const [subTaskEstadoActual2, setSubTaskEstadoActual2] = useState(sub_task2_status)
    const [subTaskEstadoActual3, setSubTaskEstadoActual3] = useState(sub_task3_status)

    useEffect(() => {

    }, [subTaskEstadoActual1])

    const handleEstado1 = async (event) => {
        const nuevoEstado = event.target.value
        onHandleEstado1(client_id, end_date, price, start_date, product_id, user_id, id, order_status, product_type, product_subtype, task, sub_task1, sub_task1_status, sub_task2, sub_task2_status, sub_task3, sub_task3_status, obs, nuevoEstado)
        setSubTaskEstadoActual1(nuevoEstado)

    }

    const handleEstado2 = async (event) => {
        const nuevoEstado2 = event.target.value
        onHandleEstado2(client_id, end_date, price, start_date, product_id, user_id, id, order_status, product_type, product_subtype, task, sub_task1, sub_task1_status, sub_task2, sub_task2_status, sub_task3, sub_task3_status, obs, nuevoEstado2)
        setSubTaskEstadoActual2(nuevoEstado2)
    }

    const handleEstado3 = async (event) => {
        const nuevoEstado3 = event.target.value
        onHandleEstado3(client_id, end_date, price, start_date, product_id, user_id, id, order_status, product_type, product_subtype, task, sub_task1, sub_task1_status, sub_task2, sub_task2_status, sub_task3, sub_task3_status, obs, nuevoEstado3)
        setSubTaskEstadoActual3(nuevoEstado3)
    }


    //TextArea

    const [mensaje, setMensaje] = useState()


    return (


        <Contenedor>






            <h3> {product_type}: <span>{product_subtype}</span></h3>
            <h4>ID : {id}</h4>


            <Trabajos>

                {task === 'Reparación' &&
                    <>

                        <h4>Trabajos a realizar:</h4>
                        <h5> {sub_task1}</h5>

                        <select name="estado" id="estado" value={subTaskEstadoActual1} disabled={readOnly} onChange={(event) => handleEstado1(event)}>
                            <option value="En espera">En espera</option>
                            <option value="En proceso">En proceso</option>
                            <option value="Finalizado">Finalizado</option>
                        </select>

                        {(sub_task2) &&
                            <><h5> {sub_task2}</h5>
                                <select name="estado" id="estado" value={subTaskEstadoActual2} disabled={readOnly} onChange={(event) => handleEstado2(event)}>
                                    <option value="En espera">En espera</option>
                                    <option value="En proceso">En proceso</option>
                                    <option value="Finalizado">Finalizado</option>
                                </select> </>

                        }
                        {(sub_task3) &&
                            <><h5> {sub_task3}</h5>
                                <select name="estado" id="estado" value={subTaskEstadoActual3} disabled={readOnly} onChange={(event) => handleEstado3(event)}>
                                    <option value="En espera">En espera</option>
                                    <option value="En proceso">En proceso</option>
                                    <option value="Finalizado">Finalizado</option>
                                </select> </>
                        }
                    </>
                }

                {task === 'Fabricación' &&
                    <h4>Trabajo a realizar : <span> Fabricar </span> </h4>}

            </Trabajos>
            <ContenedorTextArea>

                <h4>Observaciones</h4>

                <textarea defaultValue={obs} cols="30" rows="10" disabled={readOnly} onBlur={e => setMensaje(e.target.value)} ></textarea>

                <Boton onClick={() => handleTextArea(client_id, end_date, price, start_date, product_id, user_id, id, order_status, product_type, product_subtype, task, sub_task1, sub_task1_status, sub_task2, sub_task2_status, sub_task3, sub_task3_status, obs, mensaje)}><i class="fa-solid fa-feather"></i></Boton>




            </ContenedorTextArea>

            <button style={{
                marginBottom: "10px",
                position: "absolute",
                bottom: "10px"
            }} type="submit" className="sheen" onClick={() => cambiarEstado(id)}>{textoBoton}</button>

        </Contenedor>

    )

}


export default CardTareas;



