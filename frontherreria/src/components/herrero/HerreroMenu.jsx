import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import HerreroNavBar from "./HerreroNavBar";
import { useEffect, useState } from "react";
import MenuOptionBackground from "../../Assets/menu-option-background.png"
import MenuOptionBackgroundHover from "../../Assets/menu-option-background-hover.png"
import jwtDecode from "jwt-decode";
import NuevasTecnologiasImg from '../../Assets/nuevas-tecnologias.png'
import TablonAnunciosImg from '../../Assets/tablon-anuncios.png'
import PedidosEnCursoImg from '../../Assets/pedidos-en-curso.png'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100vh;
`

const Encabezado = styled.h1`
font-size: 50px;
font-family: 'Rakkas', cursive;
margin-top: 40px;
margin-bottom: 40px;
color: #3a1603;
text-align: center;
`

const SubTitulo = styled.h3`
font-family: 'Rakkas', cursive;
font-size: 2rem;
width: 200px;
text-align: center;
display: inline-block;
color: #3a1603;
margin-top: 40px;
margin-bottom: 40px;
text-transform: uppercase;
`

const OptionsContainer = styled.div`
width: 90%;
display: flex;
justify-content: space-around;
gap: 10px;
 @media (min-width: 425px) { 
    flex-wrap: wrap;
 }
  @media (min-width: 1850px) { 
    flex-wrap: nowrap;
 }
`

const CardImg = styled.img`
margin-top: 20px;
width: 200px;
height: 230px;
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
padding-left: 40px;
font-size: 18px;
width: 300px;
min-height: 400px;
display: flex;
flex-direction: column;
align-items: center;

:hover{
    background-image: url(${MenuOptionBackgroundHover});
    background-size: cover;
    text-shadow: 0 0 0.2em #101010, 0 0 0.2em #050504,0 0 0.2em #0e0d0d;
    cursor: pointer;
    color: #ffeda4;
}
h3 {
    font-family: 'Rakkas', cursive;
    font-size: 24px;
    margin: 20px 0px;
};
 @media (min-width: 425px) { 
    margin-bottom: 20px;
 }
  @media (min-width: 1850px) { 
    margin-bottom: 0px;
 }
`

const HerreroMenu = () => {

    const token = localStorage.getItem("token")
    console.log(jwtDecode(token))
    const { user_name } = jwtDecode(token);

    return (
        <div>
            <HerreroNavBar />
            <Container>
                <Encabezado>
                    ¡BIENVENIDO, {user_name.toUpperCase()}!
                </Encabezado>
                <SubTitulo> Novedades </SubTitulo>
                <OptionsContainer>
                    <Link to='/herrero/tablon_anuncios'>
                        <OptionCard>
                            <CardImg src={TablonAnunciosImg} alt="" />
                            <h3>Tablón de anuncios</h3>
                            <CardDiv>Aquí podrás ver las más recientes novedades de la herrería</CardDiv>
                        </OptionCard>
                    </Link>
                    <Link to='/herrero/tareas/pendientes'>
                        <OptionCard>
                            <CardImg style={{ marginLeft: '20px' }} src={PedidosEnCursoImg} alt="" />
                            <h3>Tus tareas</h3>
                            <CardDiv>Presiona aqui para ver todos tus pedidos pendientes</CardDiv>
                        </OptionCard>
                    </Link>
                    <Link to='/herrero/investigacion'>
                        <OptionCard>
                            <CardImg style={{ marginLeft: '20px' }} src={NuevasTecnologiasImg} alt="" />
                            <h3>Investigación</h3>
                            <CardDiv>Detalles de los últimos avances en nuevos materiales</CardDiv>
                        </OptionCard>
                    </Link>
                </OptionsContainer>
            </Container>
        </div>
    );
}

export default HerreroMenu;