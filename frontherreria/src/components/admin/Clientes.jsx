import AdminNavBar from "./AdminNavBar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import MenuOptionBackground from "../../Assets/menu-option-background2.png"
import MenuOptionBackgroundHover from "../../Assets/menu-option-background-hover2.png"

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
flex-direction: column;
align-items: center;
width: 400px;
gap: 20px;
`

const CardHerrero = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: flex-start;
width: 375px;
height: 350px;
background-image: url(${MenuOptionBackground});
background-size: cover;
gap: 20px;
padding-left: 80px;
:hover{
    background-image: url(${MenuOptionBackgroundHover});
    background-size: cover;
    text-shadow: 0 0 0.2em #101010, 0 0 0.2em #050504,0 0 0.2em #0e0d0d;
    cursor: pointer;
    color: #ffeda4;
}
`

const TituloCard = styled.h3`
font-size: 25px;
margin-top: 120px;
font-family: 'Rakkas', cursive;
`

const RenglonCard = styled.div`
width: 80%;
font-size: 25px;
display: flex;
justify-content: start;
gap: 10px;
`

const arrClientes = [
    {
        id: 1,
        name: "Marcus",
        surname: "A",
        user_id: "1",
        dni: "23",
    },
    {
        id: 2,
        name: "Lucian",
        surname: "B",
        user_id: "2",
        dni: "52",
    },
    {
        id: 3,
        name: "Rowan",
        surname: "C",
        user_id: "3",
        dni: "11",
    },
    {
        id: 4,
        name: "Lilia",
        surname: "D",
        user_id: "4",
        dni: "55",
    },
    {
        id: 5,
        name: "Renata",
        surname: "F",
        user_id: "5",
        dni: "167",
    },
    {
        id: 6,
        name: "Gunderamo",
        surname: "G",
        user_id: "6",
        dni: "200",
    },
    {
        id: 7,
        name: "Rey Teodorico",
        surname: "R",
        user_id: "7",
        dni: "1",
    }
]


const Clientes = () => {

    return (
        <div>
            <AdminNavBar />

            <FormContainer>
                <Encabezado>
                    LISTADO DE CLIENTES
                </Encabezado>
                <ArtefactoForm>
                    {arrClientes.map(cliente =>
                        <CardHerrero>
                            <TituloCard>{cliente.name.toUpperCase()} {cliente.surname.toUpperCase()}</TituloCard>
                            <RenglonCard>
                                <div>Documento: </div>
                                <div style={{ fontWeight: "900" }}>{cliente.dni} </div>
                            </RenglonCard>
                            <RenglonCard>
                                <div>Encargos realizados: </div>
                                <div style={{ fontWeight: "900" }}>44{/* arrayOrders.map por id y .lenght */} </div>
                            </RenglonCard>
                        </CardHerrero>
                    )}
                </ArtefactoForm>
            </FormContainer>
        </div>
    );

}

export default Clientes;