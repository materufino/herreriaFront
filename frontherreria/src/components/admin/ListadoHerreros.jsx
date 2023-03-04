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

const arrHerreros2 = [
    {
        id: 1,
        username: "reliana",
        name: "Relian",
        surname: "A",
        category: "Armas",
        range: "Maestro",
        password: "1234"
    },
    {
        id: 2,
        username: "carlsb",
        name: "Carls",
        surname: "B",
        category: "Armas",
        range: "Aprendiz",
        password: "1234"
    },
    {
        id: 3,
        username: "robertc",
        name: "Robert",
        surname: "C",
        category: "Armas",
        range: "Oficial",
        password: "1234"
    },
    {
        id: 4,
        username: "ernestd",
        name: "Ernest",
        surname: "D",
        category: "Armaduras",
        range: "Maestro",
        password: "1234"
    },
    {
        id: 5,
        username: "lilianf",
        name: "Lilian",
        surname: "F",
        category: "Armaduras",
        range: "Aprendiz",
        password: "1234"
    },
    {
        id: 6,
        username: "reginaldg",
        name: "Reginald",
        surname: "G",
        category: "Armaduras",
        range: "Oficial",
        password: "1234"
    },
    {
        id: 7,
        username: "lorich",
        name: "Loric",
        surname: "H",
        category: "Herramientas",
        range: "Maestro",
        password: "1234"
    },
    {
        id: 8,
        username: "pojnali",
        name: "Pojnal",
        surname: "I",
        category: "Herramientas",
        range: "Aprendiz",
        password: "1234"
    },
    {
        id: 9,
        username: "corintj",
        name: "Corint",
        surname: "J",
        category: "Herramientas",
        range: "Oficial",
        password: "1234"
    }
]

const asignaImagen = (range) => {
    if (range == "Maestro") {
        return require(`../../Assets/martilloMaestro.png`)
    } else if (range == "Oficial") {
        return require(`../../Assets/martilloOficial.png`)
    } else if (range == "Aprendiz") {
        return require(`../../Assets/martilloAprendiz.png`)
    }
}

const ListadoHerreros = () => {

    const [arrHerreros, setArrHerreros] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3000/api/users")
            setArrHerreros(res.data)
        }
        fetchData();
    }, [])

    console.log(arrHerreros)

    return (
        <div>
            <AdminNavBar />

            <FormContainer>
                <Encabezado>
                    LISTADO DE HERREROS ({arrHerreros.length})
                </Encabezado>
                <ArtefactoForm>
                    {arrHerreros.map(herrero =>
                        <CardHerrero>
                            <img style={{ position: "absolute", top: "40px", right: "40px", width: "80px", height: "80px" }} src={asignaImagen(herrero.range)} alt="" />
                            <TituloCard>{herrero.name.toUpperCase()} {herrero.surname.toUpperCase()}</TituloCard>
                            <RenglonCard>
                                <div>Usuario: </div>
                                <div style={{ fontWeight: "900" }}>{herrero.username} </div>
                            </RenglonCard>
                            <RenglonCard>
                                <div>Especialidad: </div>
                                <div style={{ fontWeight: "900" }}>{herrero.category} </div>
                            </RenglonCard>
                            <RenglonCard>
                                <div>Rango: </div>
                                <div style={{ fontWeight: "900" }}>{herrero.range} </div>
                            </RenglonCard>
                            <RenglonCard>
                                <div>Trabajos asignados: </div>
                                <div style={{ fontWeight: "900" }}>44{/* arrayOrders.map por id y .lenght */} </div>
                            </RenglonCard>
                        </CardHerrero>
                    )}
                </ArtefactoForm>
            </FormContainer>
        </div>
    );

}

export default ListadoHerreros;