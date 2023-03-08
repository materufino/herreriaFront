import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDebounce } from "react-use"
import { Navigate, useNavigate } from "react-router-dom";


const Contenedor = styled.div`
text-align: center;
background-color: #ffeda4;
color: #3a1603;
border: 1px solid #847f56;
width: 400px;
border-radius: 5px;
margin: auto;
margin-top: 10px;
margin-bottom: 40px;
h3 {
    font-family: 'Rakkas', cursive;
    font-size: 24px;
    margin: 20px 0px;
};

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
        font-family: 'Rakkas', cursive;

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



const CardTareas = ({ pedidos, setPedidos, id, task, product_type, product_subtype, order_status, start_date, end_date, obs, sub_task1, sub_task2, sub_task3, sub_task1_status, sub_task2_status, sub_task3_status, textoBoton, readOnly, index }) => {


    const navigate = useNavigate();

    // Cambiar estado global del pedido En proceso O FINALIZADO

    const [order, setOrder] = useState([])
    const [globalActual, setGlobalActual] = useState(order_status)
    const [estadoActual, setEstadoActual] = useState((globalActual === 'En proceso') ? 'Finalizado' : 'En proceso')
    const [seccion, setSeccion] = useState((order_status === 'En proceso') ? 'finalizadas' : 'pendientes')

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:3000/api/orders/${id}`)
            console.log(res.data)
            setOrder(res.data)
        }
        fetchData();
    }, [globalActual])



    // Pasar las funciones desde el componente padre

    const onCambiarEstado = async () => {


        const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
            ...order,
            order_status: estadoActual
        })
        if (res.data.fatal) {
            alert('Error en el server');
        } else {
            alert('Estado global modificado con exito')
            navigate(`/herrero/tareas/${seccion}`)
            console.log(seccion)
        }

        setGlobalActual(estadoActual)

    }

    const [subTaskEstado1, setSubTaskEstado1] = useState(sub_task1_status)

    const [subTaskEstado2, setSubTaskEstado2] = useState(sub_task2_status)

    const [subTaskEstado3, setSubTaskEstado3] = useState(sub_task3_status)



    // Cambiar estado de la tarea  con el select En espera - En proceso - Finalizado

    const handleEstado1 = async (event) => {

        setSubTaskEstado1(event.target.value)

        const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
            ...order,
            sub_task1_status: event.target.value,
            sub_task2_status: subTaskEstado2,
            sub_task3_status: subTaskEstado3
        })

        if (res.data.fatal) {
            alert('Error en el server');
        } else {
            alert('Estado subtask 1 modificado con exito')
        }



    }

    const handleEstado2 = async (event) => {

        setSubTaskEstado2(event.target.value)

        const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
            ...order,
            sub_task1_status: subTaskEstado1,
            sub_task2_status: event.target.value,
            sub_task3_status: subTaskEstado3
        })

        if (res.data.fatal) {
            alert('Error en el server');
        } else {
            alert('Estado subtask 2 modificado con exito')
        }


    }

    const handleEstado3 = async (event) => {

        setSubTaskEstado3(event.target.value)
        const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
            ...order,
            sub_task1_status: subTaskEstado1,
            sub_task2_status: subTaskEstado2,
            sub_task3_status: event.target.value
        })

        if (res.data.fatal) {
            alert('Error en el server');
        } else {
            alert('Estado subtask 3 modificado con exito')
        }

    }





    //TextArea

    const [mensaje, setMensaje] = useState('')




    useDebounce(async () => {

        console.log(mensaje)
        const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
            ...order,
            obs: mensaje
        })
        if (res.data.fatal) {
            /* alert('Error en el server'); */
        } else {
            /*   alert('Observacion modificada con exito') */
        }

    }, 1000, [mensaje])







    return (


        <Contenedor>
            <h3> {product_type.toUpperCase()}: <span>{product_subtype.toUpperCase()}</span></h3>
            <h5>ID orden: {id}</h5>

            <Trabajos>

                {task === 'Reparación' &&
                    <>

                        <h4>Trabajos a realizar:</h4>
                        <h5> {sub_task1}</h5>

                        <select name="estado" id="estado" value={subTaskEstado1} disabled={readOnly} onChange={(event) => handleEstado1(event)}>
                            <option value="En espera">En espera</option>
                            <option value="En proceso">En proceso</option>
                            <option value="Finalizado">Finalizado</option>
                        </select>

                        {(sub_task2) &&
                            <><h5> {sub_task2}</h5>
                                <select name="estado" id="estado" value={subTaskEstado2} disabled={readOnly} onChange={(event) => handleEstado2(event)}>
                                    <option value="En espera">En espera</option>
                                    <option value="En proceso">En proceso</option>
                                    <option value="Finalizado">Finalizado</option>
                                </select> </>

                        }
                        {(sub_task3) &&
                            <><h5> {sub_task3}</h5>
                                <select name="estado" id="estado" value={subTaskEstado3} disabled={readOnly} onChange={(event) => handleEstado3(event)}>
                                    <option value="En espera">En espera</option>
                                    <option value="En proceso">En proceso</option>
                                    <option value="Finalizado">Finalizado</option>
                                </select> </>
                        }
                    </>
                }

                {task === 'Fabricación' &&
                    <h4>Trabajo a realizar : Fabricar </h4>}

            </Trabajos>
            <ContenedorTextArea>
                <h4>Observaciones</h4>
                <textarea defaultValue={obs} cols="30" rows="10" disabled={readOnly} onChange={(e) => setMensaje(e.target.value)} ></textarea>
                <button type="submit" className="sheen" onClick={() => onCambiarEstado(id)}>{textoBoton}</button>
            </ContenedorTextArea>
        </Contenedor>

    )

}


export default CardTareas;



