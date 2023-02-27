import { useState } from "react";
import styled from "styled-components";
import CardTareas from "./ComponentesPequeños/CardTareas";
import HerreroNavBar from "./HerreroNavBar";
import React from "react";
import ListaPedidos from "./ArrayPedidos";


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

const HerreroTareasPendientes = () => {

    const [pedidos, setPedidos] = useState(ListaPedidos);


    const textoBoton = 'Finalizar Pedido'
    return (
        <div>

            <HerreroNavBar />
            <Encabezado>Pendientes</Encabezado>
            {(pedidos.length > 0) &&
                (<ContainerPedidos>
                    {pedidos.filter((pedido) => pedido.estado === 'pendiente').map((tarea) =>
                    (
                        <CardTareas key={tarea.idTarea} {...tarea} textoBoton={textoBoton} index readOnly={false} />
                    ))}
                </ContainerPedidos>)}

        </div>

    );

}

export default HerreroTareasPendientes;