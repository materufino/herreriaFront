import { useEffect, useState } from "react";
import styled from "styled-components";
import CardTareas from "./ComponentesPequeños/CardTareas";
import HerreroNavBar from "./HerreroNavBar";
import React from "react";
import axios from "axios";


const ContainerPedidos = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
`

const Encabezado = styled.h1`
font-size: 40px;
font-family: 'Rakkas', cursive;
margin: 30px;
text-align: center;
color: #3a1603;
`
const ContenedorBotones = styled.div`
width: 100%;
display: flex;
flex-wrap: nowrap;
justify-content: center;
margin: 1rem;
gap: 50px;

`




const HerreroTareasPendientes = () => {

    //Pedido de todas las tareas
    const [pedidos, setPedidos] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3000/api/orders/user/1")
            setPedidos(res.data)
        }
        fetchData();

    }, [])



    const textoBoton = 'Finalizar Pedido'

    const [arrayPedidosFiltrados, setArrayPedidosFiltrados] = useState([])
    const [seleccionUsuario, setSeleccionUsuario] = useState(null);


    useEffect(() => {
        console.log(pedidos);
    }, [pedidos]);

    useEffect(() => {
        console.log(arrayPedidosFiltrados)
    }, [arrayPedidosFiltrados]);


    function handleFabricaciones() {
        setSeleccionUsuario('Fabricaciones');
        setArrayPedidosFiltrados(pedidos.filter(pedido => pedido.task === 'fabricacion'))

    }

    function handleReparaciones() {
        setSeleccionUsuario('Reparaciones');
        setArrayPedidosFiltrados(pedidos.filter(pedido => pedido.task === 'reparacion'))

    }


    return (

        <div>
            <HerreroNavBar />

            <ContenedorBotones>
                <button onClick={handleReparaciones}>Reparaciones</button>
                <button onClick={handleFabricaciones}>Fabricaciones</button>
            </ContenedorBotones>

            <Encabezado>Pendientes</Encabezado>



            {!seleccionUsuario &&
                <Encabezado>Seleciconar reparaciones o fabricaciones</Encabezado>
            }


            {seleccionUsuario === 'Reparaciones' && (

                <ContainerPedidos>

                    {arrayPedidosFiltrados.filter((pedido) => pedido.order_status === "Pendiente").map((pedido) =>

                        <CardTareas key={pedido.id} pedidos={pedidos} setPedidos={setPedidos} {...pedido} textoBoton={textoBoton} index readOnly={false} />

                    )

                    }


                </ContainerPedidos>


            )}

            {seleccionUsuario === 'Fabricaciones' &&

                (<ContainerPedidos>

                    {arrayPedidosFiltrados.filter((pedido) => pedido.order_status === "Pendiente").map((pedido) =>

                        <CardTareas key={pedido.id} {...pedido} textoBoton={textoBoton} index readOnly={false} />
                    )

                    }

                </ContainerPedidos>)
            }

        </div >

    );

}

export default HerreroTareasPendientes;