import AdminNavBar from "./AdminNavBar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import MenuOptionBackground from "../../Assets/navbar-option-background.jpg"
import MenuOptionBackgroundHover from "../../Assets/navbar-option-background.jpg"
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
width: 375px;
height: 325px;
background-image: url(${MenuOptionBackground});
background-size: cover;
gap: 20px;
padding-left: 80px;
:hover{
    background-image: url(${MenuOptionBackgroundHover});
    background-size: cover;
    text-shadow: 0 0 0.2em #101010, 0 0 0.2em #050504,0 0 0.2em #0e0d0d;
    color: #ffeda4;
}
`
const Icon = styled.i`
font-size: 30px;
`

const TituloCard = styled.h3`
font-size: 25px;
margin-top: 60px;
font-family: 'Rakkas', cursive;
`

const RenglonCard = styled.div`
width: 80%;
font-size: 25px;
display: flex;
justify-content: start;
gap: 10px;
`

const ListadoHerreros = () => {

    const [arrHerreros, setArrHerreros] = useState([]);
    const [arrOrdenes, setArrOrdenes] = useState([]);

    //GET ORDERS
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3000/api/orders")
            setArrOrdenes(res.data)
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

    function compareNombre(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }

    const trabajosRealizados = (id) => {
        const trabajosDeUnHerrero = arrOrdenes.filter(order => order.user_id == id)
        const cantidadDeTrabajos = trabajosDeUnHerrero.length
        return cantidadDeTrabajos
    }

    const asignaImagen = (rango) => {
        if (rango == "Maestro") {
            return require(`../../Assets/martilloMaestro.png`)
        } else if (rango == "Oficial") {
            return require(`../../Assets/martilloOficial.png`)
        } else if (rango == "Aprendiz") {
            return require(`../../Assets/martilloAprendiz.png`)
        }
    }

    const listaTrabajosEncargados = (id) => {
        const trabajosDeUnHerrero = arrOrdenes.filter(order => order.user_id == id)
        const listadoTrabajosDeUnHerrero = trabajosDeUnHerrero.map(trabajo => ({ task: trabajo.task, artefact: trabajo.product_subtype, status: trabajo.order_status, client: trabajo.client_id }))
        return listadoTrabajosDeUnHerrero.map((trabajo, i) => <p key={`trabajo_${i}`}> {trabajo.task} de {trabajo.artefact} ({trabajo.status} ) </p>)
    }

    return (
        <div>
            <AdminNavBar />

            <FormContainer>
                <Encabezado>
                    LISTADO DE HERREROS ({arrHerreros.length})
                </Encabezado>
                <ArtefactoForm>
                    {arrHerreros.sort(compareNombre).map(herrero =>
                        <CardHerrero>
                            <img style={{ position: "absolute", top: "40px", right: "40px", width: "80px", height: "80px" }} src={asignaImagen(herrero.rango)} alt="" />
                            <TituloCard>{herrero.name.toUpperCase()} {herrero.surname.toUpperCase()}</TituloCard>
                            <RenglonCard >
                                <div>Usuario: </div>
                                <div style={{ fontWeight: "900" }}>{herrero.username} </div>
                            </RenglonCard>
                            <RenglonCard>
                                <div>Especialidad: </div>
                                <div style={{ fontWeight: "900" }}>{herrero.category} </div>
                            </RenglonCard>
                            <RenglonCard>
                                <div>Rango: </div>
                                <div style={{ fontWeight: "900" }}>{herrero.rango} </div>
                            </RenglonCard>
                            <RenglonCard>
                                <div>Trabajos asignados: </div>
                                <div style={{ fontWeight: "900" }}>{trabajosRealizados(herrero.id)} </div>
                                {trabajosRealizados(herrero.id) > 0 &&
                                    <span className="tooltip" >
                                        <Icon className="fa-solid fa-book-journal-whills"></Icon>
                                        <div style={{ fontSize: "20px", fontWeight: "900", marginTop: "-10px" }}> <span className="tooltiptext">{listaTrabajosEncargados(herrero.id)}</span></div>
                                    </span>}
                            </RenglonCard>
                        </CardHerrero>
                    )}
                </ArtefactoForm>
            </FormContainer>
        </div>
    );

}

export default ListadoHerreros;