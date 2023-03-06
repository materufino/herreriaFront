import AdminNavBar from "./AdminNavBar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import MenuOptionBackground from "../../Assets/menu-option-background2.png"
import MenuOptionBackgroundHover from "../../Assets/menu-option-background-hover2.png"
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

const ArtefactoForm = styled.form`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
width: 100%;
gap: 20px;
 @media (min-width: 425px) { 
    flex-wrap: wrap;
    justify-content: center;
 }
`

const CardHerrero = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: flex-start;
width: 330px;
height: 250px;
background-color: #ffeda4;
border-radius: 10px;
border: 3px solid #ffeda4;
gap: 20px;
padding: 30px 0px 0px 60px;
:hover{
    border: 3px solid #3a1603;
}
`

const TituloCard = styled.h3`
font-size: 25px;
margin-top: 20px;
font-family: 'Rakkas', cursive;
`

const RenglonCard = styled.div`
width: 80%;
font-size: 25px;
display: flex;
justify-content: start;
gap: 10px;
:last-child{
    margin-bottom: 30px;
}
`

const Icon = styled.i`
font-size: 30px;
`

const Clientes = () => {

    const [arrClientes, setArrClientes] = useState([]);
    const [arrOrdenes, setArrOrdenes] = useState([]);

    //GET CLIENTES
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3000/api/clients")
            setArrClientes(res.data)
        }
        fetchData();
    }, [])

    //GET ORDERS
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3000/api/orders")
            setArrOrdenes(res.data)
        }
        fetchData();
    }, [])

    const trabajosEncargados = (id) => {
        const trabajosDeUnCliente = arrOrdenes.filter(order => order.client_id == id)
        const cantidadDeTrabajos = trabajosDeUnCliente.length
        return cantidadDeTrabajos
    }

    const listaTrabajosEncargados = (id) => {
        const trabajosDeUnCliente = arrOrdenes.filter(order => order.client_id == id)
        const listadoTrabajosDeUnCliente = trabajosDeUnCliente.map(trabajo => ({ task: trabajo.task, artefact: trabajo.product_subtype, status: trabajo.order_status }))
        return listadoTrabajosDeUnCliente.map((trabajo, i) => <p key={`trabajo_${i}`}> {trabajo.task} de {trabajo.artefact} ({trabajo.status} ) </p>)
    }

    const dineroInvertido = (id) => {
        const trabajosDeUnCliente = arrOrdenes.filter(order => order.client_id == id)
        const listadoTrabajosDeUnCliente = trabajosDeUnCliente.map(trabajo => trabajo.price)
        let total = listadoTrabajosDeUnCliente.reduce((a, b) => a + b, 0);
        return total

    }

    function compareNombre(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }

    return (
        <div>
            <AdminNavBar />

            <FormContainer>
                <Encabezado>
                    LISTADO DE CLIENTES ({arrClientes.length})
                </Encabezado>
                <ArtefactoForm>
                    {arrClientes.sort(compareNombre).map(cliente =>
                        <CardHerrero key={cliente.id}>
                            <TituloCard>{cliente.name.toUpperCase()} {cliente.surname.toUpperCase()}</TituloCard>
                            <RenglonCard>
                                <div>Identificador: </div>
                                <div style={{ fontWeight: "900" }}>{cliente.id} </div>
                            </RenglonCard>
                            <RenglonCard>
                                <div>Dinero invertido: </div>
                                <div style={{ fontWeight: "900" }}> {dineroInvertido(cliente.id)} M.O.</div>
                            </RenglonCard>
                            <RenglonCard>
                                <div>Trabajos encargados: </div>
                                <div style={{ fontWeight: "900" }}> {trabajosEncargados(cliente.id)}</div>
                                {trabajosEncargados(cliente.id) > 0 &&
                                    <span className="tooltip" >
                                        <Icon className="fa-solid fa-book-journal-whills"></Icon>
                                        <div style={{ fontSize: "20px", fontWeight: "900", marginTop: "-10px" }}> <span className="tooltiptext">{listaTrabajosEncargados(cliente.id)}</span></div>
                                    </span>}
                            </RenglonCard>
                            <RenglonCard>

                            </RenglonCard>
                        </CardHerrero>
                    )}
                </ArtefactoForm>
            </FormContainer>
        </div>
    );

}

export default Clientes;