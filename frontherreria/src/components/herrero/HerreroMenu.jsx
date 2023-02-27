import { Link } from "react-router-dom";
import styled from "styled-components";

import HerreroNavBar from "./HerreroNavBar";


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
margin: 70px;
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

`


const OptionsContainer = styled.div`
width: 90%;
display: flex;
flex-wrap: wrap;
/* justify-content: space-around; */
gap: 30px;
justify-content: space-around;

`
const OptionCard = styled.div`
background-color: #f9f6e8;
color: #3a1603;
border: 1px solid #847f56;
border-radius: 5px;
padding: 20px;
font-size: 18px;
width: 300px;
min-height: 400px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 2rem;
h3 {
    font-family: 'Rakkas', cursive;
    font-size: 24px;
    margin: 20px 0px;
};
p{
    text-align: center;
}

`





const HerreroMenu = ()=> {

    return (
        <div>
            <HerreroNavBar />
            <Container>
                <Encabezado>
                    ¡BIENVENIDO, NOMBREHERRERO!
                </Encabezado>

                <SubTitulo> Novedades </SubTitulo>
                <OptionsContainer>
                   
                    <OptionCard>
                        <img src="" alt=""/>
                        <h3>Grandes noticias</h3>
                        <p>Las ventas de este mes ya superan en un 45% las del mes pasado!</p>
                    </OptionCard>
                    
                    
                    <Link to='/herrero/tareas/pendientes'>  
                        <OptionCard>
                            <img src="" alt=""/>
                            <h3>Tienes pedidos nuevos</h3>
                            <p>Presiona aqui para ver todos tus pedidos pendientes</p>
                        </OptionCard>
                        </Link>
                       

                    <OptionCard>
                        <img src="" alt=""/>
                        <h3>Tecnología</h3>
                        <p>El nuevo material esta aún siendo testeado pero tenemos grandes expectativas</p>
                    </OptionCard>
                    
                </OptionsContainer>
            
            </Container>

        </div>
    );
    
}

export default HerreroMenu;