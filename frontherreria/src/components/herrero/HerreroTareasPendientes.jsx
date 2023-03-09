import { useEffect, useState } from "react";
import styled from "styled-components";
import CardTareas from "./ComponentesPequeños/CardTareas";
import HerreroNavBar from "./HerreroNavBar";
import React from "react";
import axios from "axios";
import MenuOptionBackground from "../../Assets/navbar-option-background.jpg"
import MenuOptionBackgroundHover from "../../Assets/navbar-option-background.jpg"
import jwtDecode from "jwt-decode";



const ContainerPedidos = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    justify-content: center;
    gap: 50px;
`

const Encabezado = styled.h1`
font-size: 50px;
font-family: 'Rakkas', cursive;
margin: 30px;
text-align: center;
color: #3a1603;
text-transform: uppercase;

`
const OptionsContainer = styled.div`
width: 90%;
margin: 0 auto;
margin-top: 40px;
margin-bottom: 40px;
display: flex;
justify-content: center;
gap: 50px;

 @media (min-width: 425px) { 
    flex-wrap: wrap ;
 }
  @media (min-width: 1850px) { 
    margin-bottom: 0px;
 }
`


const OptionCard = styled.div`
background-image: url(${MenuOptionBackground});
background-size: cover;
color: #3a1603;
padding: 20px;
font-size: 18px;
width: 230px;
height: 150px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
:hover{
    background-image: url(${MenuOptionBackgroundHover});
    background-size: cover;
    text-shadow: 0 0 0.2em #101010, 0 0 0.2em #050504,0 0 0.2em #0e0d0d;
    cursor: pointer;
    color: #ffeda4;
}
h3 {
    font-family: 'Rakkas', cursive;
    font-size: 35px;
    margin: 20px 0px;
};
`
const Button = styled.button`
background-color: transparent;
border: none;
font-family: 'Rakkas', cursive;
font-size: 25px;
height: 100%;
width: 100%;
:hover{
    text-shadow: 0 0 0.2em #101010, 0 0 0.2em #050504,0 0 0.2em #0e0d0d;
    cursor: pointer;
    color: #ffeda4;
}
`





const HerreroTareasPendientes = () => {

    const token = localStorage.getItem("token")
    const { user_id } = jwtDecode(token);
    const [pedidos, setPedidos] = useState();
    const [arrayPedidosFiltrados, setArrayPedidosFiltrados] = useState([])
    const [seleccionUsuario, setSeleccionUsuario] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:3000/api/orders/user/${user_id}`)
            setPedidos(res.data)
        }
        fetchData();

    }, [])






    useEffect(() => {
        console.log('pedidos:', pedidos);
        if (seleccionUsuario === 'Fabricaciones') {
            setArrayPedidosFiltrados(pedidos.filter(pedido => pedido.task === 'Fabricación').filter((pedido) => pedido.order_status === "En proceso"))
        } else if (seleccionUsuario === 'Reparaciones') {
            setArrayPedidosFiltrados(pedidos.filter(pedido => pedido.task === 'Reparación').filter((pedido) => pedido.order_status === "En proceso"))
        }
    }, [pedidos]);

    useEffect(() => {
        console.log('arrayPedidosFiltrados:', arrayPedidosFiltrados)
    }, [arrayPedidosFiltrados]);


    function handleFabricaciones() {
        setSeleccionUsuario('Fabricaciones');
        setArrayPedidosFiltrados(pedidos.filter(pedido => pedido.task === 'Fabricación').filter((pedido) => pedido.order_status === "En proceso"))
    }

    function handleReparaciones() {
        setSeleccionUsuario('Reparaciones');
        setArrayPedidosFiltrados(pedidos.filter(pedido => pedido.task === 'Reparación').filter((pedido) => pedido.order_status === "En proceso"))
    }




    const onCambiarEstado = async (client_id, end_date, price, start_date, product_id, user_id, id, order_status, product_type, product_subtype, task, sub_task1, sub_task1_status, sub_task2, sub_task2_status, sub_task3, sub_task3_status, obs, nuevoEstado) => {

        const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
            id: id,
            task: task,
            product_type: product_type,
            product_subtype: product_subtype,
            order_status: nuevoEstado,
            client_id: client_id,
            obs: obs,
            price: price,
            start_date: start_date,
            end_date: end_date,
            product_id: product_id,
            user_id: user_id,
            sub_task1: sub_task1,
            sub_task1_status: sub_task1_status,
            sub_task2: sub_task2,
            sub_task2_status: sub_task2_status,
            sub_task3: sub_task3,
            sub_task3_status: sub_task3_status
        })
        if (res.data.fatal) {
            alert('Error en el server');
        } else {

            const res = await axios.get(`http://localhost:3000/api/orders/user/${user_id}`)
            setPedidos(res.data)
        }
    }

    const onHandleEstado1 = async (client_id, end_date, price, start_date, product_id, user_id, id, order_status, product_type, product_subtype, task, sub_task1, sub_task1_status, sub_task2, sub_task2_status, sub_task3, sub_task3_status, obs, nuevoSubTaskEstado) => {
        console.log(nuevoSubTaskEstado)
        const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
            id: id,
            task: task,
            product_type: product_type,
            product_subtype: product_subtype,
            order_status: order_status,
            client_id: client_id,
            obs: obs,
            price: price,
            start_date: start_date,
            end_date: end_date,
            product_id: product_id,
            user_id: user_id,
            sub_task1: sub_task1,
            sub_task1_status: nuevoSubTaskEstado,
            sub_task2: sub_task2,
            sub_task2_status: sub_task2_status,
            sub_task3: sub_task3,
            sub_task3_status: sub_task3_status
        })
        if (res.data.fatal) {
            alert('Error en el server');
        } else {
            console.log('Hola que tal')
            const res = await axios.get(`http://localhost:3000/api/orders/user/${user_id}`)
            setPedidos(res.data)
        }

    }


    const onHandleEstado2 = async (client_id, end_date, price, start_date, product_id, user_id, id, order_status, product_type, product_subtype, task, sub_task1, sub_task1_status, sub_task2, sub_task2_status, sub_task3, sub_task3_status, obs, nuevoSubTaskEstado2) => {
        console.log(nuevoSubTaskEstado2)

        const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
            id: id,
            task: task,
            product_type: product_type,
            product_subtype: product_subtype,
            order_status: order_status,
            client_id: client_id,
            obs: obs,
            price: price,
            start_date: start_date,
            end_date: end_date,
            product_id: product_id,
            user_id: user_id,
            sub_task1: sub_task1,
            sub_task1_status: sub_task1_status,
            sub_task2: sub_task2,
            sub_task2_status: nuevoSubTaskEstado2,
            sub_task3: sub_task3,
            sub_task3_status: sub_task3_status
        })
        if (res.data.fatal) {
            alert('Error en el server');
        } else {
            const res = await axios.get(`http://localhost:3000/api/orders/user/${user_id}`)
            setPedidos(res.data)
        }

    }

    const onHandleEstado3 = async (client_id, end_date, price, start_date, product_id, user_id, id, order_status, product_type, product_subtype, task, sub_task1, sub_task1_status, sub_task2, sub_task2_status, sub_task3, sub_task3_status, obs, subTaskEstadoActual1, subTaskEstadoActual2, nuevoSubTaskEstado3) => {
        const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
            id: id,
            task: task,
            product_type: product_type,
            product_subtype: product_subtype,
            order_status: order_status,
            client_id: client_id,
            obs: obs,
            price: price,
            start_date: start_date,
            end_date: end_date,
            product_id: product_id,
            user_id: user_id,
            sub_task1: sub_task1,
            sub_task1_status: sub_task1_status,
            sub_task2: sub_task2,
            sub_task2_status: sub_task2_status,
            sub_task3: sub_task3,
            sub_task3_status: nuevoSubTaskEstado3
        })
        if (res.data.fatal) {
            alert('Error en el server');
        } else {
            const res = await axios.get(`http://localhost:3000/api/orders/user/${user_id}`)
            setPedidos(res.data)
        }

    }


    const handleTextArea = async (client_id, end_date, price, start_date, product_id, user_id, id, order_status, product_type, product_subtype, task, sub_task1, sub_task1_status, sub_task2, sub_task2_status, sub_task3, sub_task3_status, obs, mensaje) => {


        const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
            id: id,
            task: task,
            product_type: product_type,
            product_subtype: product_subtype,
            order_status: order_status,
            client_id: client_id,
            obs: mensaje,
            price: price,
            start_date: start_date,
            end_date: end_date,
            product_id: product_id,
            user_id: user_id,
            sub_task1: sub_task1,
            sub_task1_status: sub_task1_status,
            sub_task2: sub_task2,
            sub_task2_status: sub_task2_status,
            sub_task3: sub_task3,
            sub_task3_status: sub_task3_status
        })
        if (res.data.fatal) {
            console.log(res.data.fatal)

        } else {
            const res = await axios.get(`http://localhost:3000/api/orders/user/${user_id}`)
            setPedidos(res.data)

        }

    }




    return (

        <div>
            <HerreroNavBar />


            <Encabezado>Pendientes</Encabezado>
            <OptionsContainer>

                <OptionCard>
                    <Button onClick={handleReparaciones}>Reparaciones</Button>
                </OptionCard>

                <OptionCard>
                    <Button onClick={handleFabricaciones}>Fabricaciones</Button>
                </OptionCard>


            </OptionsContainer>


            {seleccionUsuario === 'Reparaciones' && (

                <ContainerPedidos>

                    {arrayPedidosFiltrados.map((pedido) => (
                        <CardTareas key={pedido.id} {...pedido} textoBoton='Finalizar pedido' onCambiarEstado={onCambiarEstado} onHandleEstado1={onHandleEstado1}
                            onHandleEstado2={onHandleEstado2} onHandleEstado3={onHandleEstado3} handleTextArea={handleTextArea} />)
                    )
                    }

                </ContainerPedidos>


            )}

            {seleccionUsuario === 'Fabricaciones' &&

                (<ContainerPedidos>

                    {arrayPedidosFiltrados.map((pedido) => (
                        <CardTareas key={pedido.id} {...pedido} textoBoton='Finalizar pedido' onCambiarEstado={onCambiarEstado} handleTextArea={handleTextArea} />)
                    )
                    }

                </ContainerPedidos>)
            }

        </div >

    );

}

export default HerreroTareasPendientes;