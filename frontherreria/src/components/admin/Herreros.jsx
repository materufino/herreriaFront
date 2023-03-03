import AdminNavBar from "./AdminNavBar";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import MenuOptionBackground from "../../Assets/menu-option-background2.png"
import MenuOptionBackgroundHover from "../../Assets/menu-option-background-hover2.png"

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100vh;
`

const EncabezadoH1 = styled.h1`
font-size: 50px;
font-family: 'Rakkas', cursive;
margin: 70px;
color: #3a1603;
`
const OptionsContainer = styled.div`
width: 90%;
display: flex;
justify-content: center;
gap: 20px;
`
const CardDiv = styled.div`
width: 60%;
margin-left: 10px;
`

const OptionCard = styled.div`
background-image: url(${MenuOptionBackground});
background-size: cover;
color: #3a1603;
padding: 20px;
font-size: 18px;
width: 300px;
height: 230px;
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

const Herreros = () => {

    return (
        <div>
            <AdminNavBar />
            <Container>
                <EncabezadoH1>
                    HERREROS
                </EncabezadoH1>
                <OptionsContainer>
                    <Link to={'../herreros/registro'}>
                        <OptionCard>
                            <h3 style={{ marginLeft: "55px", marginTop: "40px" }}>REGISTRAR NUEVO HERRERO</h3>
                            <CardDiv></CardDiv>
                        </OptionCard>
                    </Link>
                    <Link to={'../herreros/listado'}>
                        <OptionCard>
                            <h3 style={{ marginLeft: "50px", marginTop: "40px" }}>LISTADO DE HERREROS</h3>
                            <CardDiv></CardDiv>
                        </OptionCard>
                    </Link>
                </OptionsContainer>
            </Container>
        </div>
    );

}

export default Herreros;