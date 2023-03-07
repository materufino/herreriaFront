import AdminNavBar from "./AdminNavBar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import MenuOptionBackground from "../../Assets/menu-option-background.png"
import MenuOptionBackgroundHover from "../../Assets/menu-option-background-hover.png"
import { useEffect, useState } from "react";

const Encabezado = styled.h1`
font-size: 50px;
font-family: 'Rakkas', cursive;
margin: 70px;
color: #3a1603;
`

const FormContainer = styled.div`
display: flex;
margin-bottom: 30px;
flex-direction: column;
align-items: center;
width: 100%;
/* height: 100vh; */
`

const Select = styled.select`
width: 50%;
height: 25px;
`

const Input = styled.input`
width: 48%;
height: 20px;
`

const ArtefactoForm = styled.form`
display: flex;
flex-direction: row;
align-items: center;
justify-content: start;
width: 100%;
gap: 20px;
 @media (min-width: 425px) { 
    flex-wrap: wrap;
    justify-content: center;
 }
  @media (min-width: 1850px) { 
    margin-bottom: 0px;
 }
`

const CardHerrero = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: flex-start;
width: 450px;
height: 700px;
background-image: url(${MenuOptionBackground});
background-size: cover;
gap: 20px;
padding-left: 150px;
:hover{
    background-image: url(${MenuOptionBackgroundHover});
    background-size: cover;
    text-shadow: 0 0 0.2em #101010, 0 0 0.2em #050504,0 0 0.2em #0e0d0d;
/*     cursor: pointer; */
    color: #ffeda4;
}
`

const TituloCard = styled.h3`
width: 80%;
min-height: 50px;
font-size: 25px;
margin-top: 90px;
font-family: 'Rakkas', cursive;
`

const RenglonCard = styled.div`
width: 80%;
font-size: 25px;
display: flex;
justify-content: start;
gap: 10px;
`

const DivComentario = styled.div`
width: 370px;
margin-left: -50px;
background-color: #948578;
border-radius: 10px;
height: auto;
position: absolute;
bottom: 110px;
z-index: 3;
font-size: 20px;
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
:last-child{
    align-items: flex-end;
}
`

const CruzButton = styled.button`
position:absolute;
right: 10px;
top: 10px;
background-color: #e07f3a;
`
const Icon = styled.i`
font-size: 35px;
`



const PedidoEnCurso = () => {

    const [arrClientes, setArrClientes] = useState([]);
    const [arrHerreros, setArrHerreros] = useState([]);
    const [comentarios, setComentarios] = useState('');
    const [arrOrdenes, setArrOrdenes] = useState([]);

    //GET CLIENTES
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3000/api/clients")
            setArrClientes(res.data)
        }
        fetchData();
    }, [])

    //GET HERREROS
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3000/api/users")
            setArrHerreros(res.data)
        }
        fetchData();
    }, [])

    //GET ORDENES "EN PROCESO"
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3000/api/orders")
            setArrOrdenes((res.data).filter(order => order.order_status == "En proceso"))
        }
        fetchData();
    }, [])


    const asignaImagen = (subtype) => {
        return require(`../../Assets/${subtype.toLowerCase()}.jpg`)
    }

    const mostrarNombreCliente = (id) => {
        if (arrClientes.length > 0) {
            const clientesPorNombre = arrClientes.map(client => ({ name: client.name, surname: client.surname, id: client.id }))
            const clientesPorId = arrClientes.map(client => client.id)
            const idCliente = parseInt(id);
            const index = clientesPorId.indexOf(idCliente)
            const nombreCliente = clientesPorNombre[index].name + " " + clientesPorNombre[index].surname
            return nombreCliente.toUpperCase()
        } else { return "esperando cliente" }
    }

    const mostrarNombreHerrero = (id) => {
        if (arrHerreros.length > 0) {
            const herrerosPorNombre = arrHerreros.map(herrero => ({ name: herrero.name, surname: herrero.surname, id: herrero.id, rango: herrero.rango }))
            const HerrerosPorId = arrHerreros.map(herrero => herrero.id)
            const idHerrero = parseInt(id);
            const index = HerrerosPorId.indexOf(idHerrero)
            const nombreHerrero = herrerosPorNombre[index].rango + " " + herrerosPorNombre[index].name + " " + herrerosPorNombre[index].surname
            return nombreHerrero
        } else { return "esperando herrero" }
    }

    const mostrarRangoHerrero = (id) => {
        if (arrHerreros.length > 0) {
            const herrerosPorNombre = arrHerreros.map(herrero => ({ name: herrero.name, surname: herrero.surname, id: herrero.id, rango: herrero.rango }))
            const HerrerosPorId = arrHerreros.map(herrero => herrero.id)
            const idHerrero = parseInt(id);
            const index = HerrerosPorId.indexOf(idHerrero)
            const rangoHerrero = herrerosPorNombre[index].rango
            console.log(rangoHerrero)
            return rangoHerrero
        } else { return "esperando herrero" }
    }

    const asignaImagenHerrero = (rango_herrero) => {
        if (rango_herrero == "Maestro") {
            return (require(`../../Assets/comentario-herrero-maestro.jpg`))
        } else if (rango_herrero == "Oficial") {
            return (require(`../../Assets/comentario-herrero.jpg`))
        } else if (rango_herrero == "Aprendiz") {
            return (require(`../../Assets/comentario-herrero-aprendiz.jpg`))
        }
    }

    const mostrarComentarios = (order_id, herrero_id) => {
        const estaOrden = arrOrdenes.filter(order => order.id == order_id)
        const trabajoDelHerrero = estaOrden.filter(order => order.user_id == herrero_id)
        const comentariosDeUnHerrero = trabajoDelHerrero.map(trabajo => ({ obs: trabajo.obs, herrero_id: trabajo.user_id }))
        return comentariosDeUnHerrero.map((trabajo, i) =>
            <div key={`trabajo_${i}`}>
                < img src={asignaImagenHerrero(mostrarRangoHerrero(herrero_id))} />
                <p style={{ margin: "20px 0px" }} > "{trabajo.obs}"</p>
                <div style={{ marginLeft: "190px" }} >{mostrarNombreHerrero(trabajo.herrero_id)}</div>
            </div>
        )
    }

    return (
        <div>
            <AdminNavBar />

            <FormContainer>
                <Encabezado>
                    PEDIDOS EN CURSO ({arrOrdenes.length})
                </Encabezado>

                <ArtefactoForm>
                    {arrOrdenes.map(orden =>
                        <CardHerrero key={orden.id}>
                            <img style={{ position: "absolute", top: "150px", right: "120px", width: "80px", height: "80px" }} src={asignaImagen(orden.product_subtype)} alt="" />
                            <TituloCard>{orden.product_subtype.toUpperCase()} DE {mostrarNombreCliente(orden.client_id)}</TituloCard>
                            <RenglonCard>
                                <div>Tarea: </div>
                                <div style={{ fontWeight: "900" }}>{orden.task} </div>
                            </RenglonCard>
                            <RenglonCard>
                                <div>Estado: </div>
                                <div style={{ fontWeight: "900" }}>{orden.order_status} </div>
                            </RenglonCard>
                            <RenglonCard>
                                <div>Iniciada: </div>
                                <div style={{ fontWeight: "900" }}>{orden.start_date} </div>
                            </RenglonCard>
                            <RenglonCard>
                                <div>Entrega: </div>
                                <div style={{ fontWeight: "900" }}>{orden.end_date} </div>
                            </RenglonCard>
                            <RenglonCard>
                                <div>Precio: </div>
                                <div style={{ fontWeight: "900" }}>{orden.price} monedas de oro</div>
                            </RenglonCard>
                            <RenglonCard>
                                <div>Herrero: </div>
                                <div style={{ fontWeight: "900" }}>{mostrarNombreHerrero(orden.user_id)} </div>
                            </RenglonCard>
                            {orden.sub_task1 && <RenglonCard>
                                <div>Tareas encargadas: </div>
                            </RenglonCard>}
                            {orden.sub_task1 && <RenglonCard>
                                <div style={{ fontWeight: "900", fontSize: "20px", fontSize: "20px" }}>{orden.sub_task1}: </div>
                                <div style={{ fontWeight: "900", fontSize: "20px" }}>{orden.sub_task1_status} </div>
                            </RenglonCard>}
                            {orden.sub_task2 && <RenglonCard>
                                <div style={{ fontWeight: "900", fontSize: "20px" }}>{orden.sub_task2}: </div>
                                <div style={{ fontWeight: "900", fontSize: "20px" }}>{orden.sub_task2_status} </div>
                            </RenglonCard>}
                            {orden.sub_task3 && <RenglonCard>
                                <div style={{ fontWeight: "900", fontSize: "20px" }}>{orden.sub_task3}: </div>
                                <div style={{ fontWeight: "900", fontSize: "20px" }}>{orden.sub_task3_status} </div>
                            </RenglonCard>}
                            {orden.obs && <RenglonCard>
                                <div> Comentarios: </div>
                                <span className="tooltip" >
                                    <p style={{ marginTop: "-10px" }}> <Icon className="fa-regular fa-comment-dots"></Icon></p>
                                    <div style={{ fontSize: "20px", fontWeight: "900", marginTop: "-10px" }}> <span className="tooltiptext tooltipgrey">{mostrarComentarios(orden.id, orden.user_id)}</span></div>
                                </span>
                            </RenglonCard>}
                        </CardHerrero>
                    )}
                </ArtefactoForm>
            </FormContainer>
        </div>
    );

}

export default PedidoEnCurso;