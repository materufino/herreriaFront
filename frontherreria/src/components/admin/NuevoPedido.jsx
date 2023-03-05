import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AdminNavBar from "./AdminNavBar";
import axios from "axios";

import MenuOptionBackground from "../../Assets/navbar-option-background.jpg"
import MenuOptionBackgroundHover from "../../Assets/navbar-option-background.jpg"



const OptionsContainer = styled.div`
width: 90%;
display: flex;
justify-content: center;
gap: 20px;
 @media (min-width: 425px) { 
    flex-wrap: wrap ;
 }
  @media (min-width: 1850px) { 
    margin-bottom: 0px;
 }
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

const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
/* height: 100vh; */
`

const EncabezadoH1 = styled.h1`
font-size: 50px;
font-family: 'Rakkas', cursive;
margin: 70px;
color: #3a1603;
`

const NuevoPedido = () => {



    return (
        <div>
            <AdminNavBar />
            <FormContainer>
                <EncabezadoH1>
                    CREAR NUEVO ENCARGO
                </EncabezadoH1>
                <OptionsContainer>
                    <Link to={'../pedidos/nuevo/fabricacion'}>
                        <OptionCard>
                            <h3>FABRICACIÓN</h3>
                            <CardDiv></CardDiv>
                        </OptionCard>
                    </Link>
                    <Link to={'../pedidos/nuevo/reparacion'}>
                        <OptionCard>
                            <h3>REPARACIÓN</h3>
                            <CardDiv></CardDiv>
                        </OptionCard>
                    </Link>
                </OptionsContainer>
            </FormContainer>


        </div>
    );

}

export default NuevoPedido;