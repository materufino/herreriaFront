import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import HerreroNavBar from "./HerreroNavBar";
import { useEffect, useState } from "react";
import MenuOptionBackground from "../../Assets/menu-option-background.png"
import MenuOptionBackgroundHover from "../../Assets/menu-option-background-hover.png"


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




    return (
        <div>

            <HerreroNavBar />
            <Container>
                <Encabezado>
                    ¡BIENVENIDO, user.id.localStorage!
                </Encabezado>

                <SubTitulo> Novedades </SubTitulo>
                <OptionsContainer>

                    <OptionCard>
                        <CardImg src="" alt="" />
                        <h3>Grandes noticias</h3>
                        <CardDiv>Las ventas de este mes ya superan en un 45% las del mes pasado!</CardDiv>
                    </OptionCard>


                    <Link to='/herrero/tareas/pendientes'>
                        <OptionCard>
                            <CardImg src="" alt="" />
                            <h3>Tienes pedidos nuevos</h3>
                            <CardDiv>Presiona aqui para ver todos tus pedidos pendientes</CardDiv>
                        </OptionCard>
                    </Link>


                    <OptionCard>
                        <CardImg src="" alt="" />
                        <h3>Tecnología</h3>
                        <CardDiv>El nuevo material esta aún siendo testeado pero tenemos grandes expectativas</CardDiv>
                    </OptionCard>

                </OptionsContainer>

            </Container>

        </div>
    );

}

export default HerreroMenu;