import {Link} from 'react-router-dom'
import styled from "styled-components";
import HomeBackground from '../Assets/home-background.jpg'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100vh;
background-image: url(${HomeBackground});
background-size: cover;
opacity: 0.9;
`

const Encabezado = styled.h1`
font-size: 50px;
font-family: 'Rakkas', cursive;
margin: 100px;
color: white;
text-shadow: 0 0 0.2em #fbdd1a, 0 0 0.2em #fbdd1a,0 0 0.2em #fbdd1a;
@media (min-width: 800px) {
    background-color: black,
}
`

const LoginContainer = styled.div`
width: 70%;
display: flex;
justify-content: space-around;

`

const User = styled.div`
background-color: #f9f6e8;
color: #3a1603;
border: 1px solid #847f56;
border-radius: 5px;
padding: 20px;
font-size: 18px;
width: 300px;
display: flex;
flex-direction: column;
align-items: center;
h3 {
    font-family: 'Rakkas', cursive;
    font-size: 24px;
    margin-bottom: 20px;
};
`
const LabelInputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
margin-top: 30px;
width: 100%;
font-size: 20px;
input {
    height: 25px;
}
`

const LoginButton = styled.button`
    margin:50px 0px 20px 0px;
    width: 100%;
`

const DivCreaCuenta = styled.div`
    color: black;
`

const Home = ()=> {

    return (
        <Container>
            <Encabezado>¡BIENVENIDO, GUARDIÁN DE LA CHISPA!</Encabezado>
            <LoginContainer>
                <User>
                    <h3>COMPLETA TUS DATOS</h3>
                    <LabelInputContainer>
                        <label>Nombre de usuario</label>
                        <input type="text"/>
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <label>Contraseña</label>
                        <input type="password"/>
                    </LabelInputContainer>
                    <LoginButton className="sheen">INGRESAR</LoginButton>

                    <Link to={'../register/herrero'}>
                        <DivCreaCuenta>
                            ¿Aún no tienes cuenta? Pulsa aquí.
                        </DivCreaCuenta>
                    </Link>
                </User>
            </LoginContainer>
        </Container>
    );
    
}

export default Home;