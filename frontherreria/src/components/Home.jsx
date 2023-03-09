import { Link } from 'react-router-dom'
import styled from "styled-components";
import HomeBackground from '../Assets/home-background.jpg'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import jwtDecode from "jwt-decode";
import { useContext, useState } from "react";
import { useSetLoggedContext, useSetRoleContext } from "../components/providers/LoggedProvider.jsx";
import { useLocalStorage } from 'react-use';



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
`

const LoginForm = styled.form`
width: 70%;
display: flex;
justify-content: space-around;

`

const User = styled.div`
background-color: #f9f6e8;
border: 1px solid #847f56;
border-radius: 5px;
color: #3a1603;
padding: 20px;
font-size: 18px;
width: 400px;
display: flex;
flex-direction: column;
align-items: center;
h3 {
    font-family: 'Rakkas', cursive;
    font-size: 24px;
    margin-bottom: 20px;
};
h4{
    color: #bb3b24;
        padding:5px;
    font-family: 'Rakkas', cursive;
    font-size:20px;

}
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


const Home = () => {
    const [error, setError] = useState('');
    const [token, setToken] = useLocalStorage('token')

    const setRole = useSetRoleContext();
    const setIsLogged = useSetLoggedContext();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const login = async (values) => {
        const res = await axios.post('http://localhost:3000/api/users/login', values);
        if (!res.data.fatal) {
            setError('');
            setToken(res.data.token);
            setRole(jwtDecode(res.data.token)['user_rango']);
            setIsLogged(true);
            const { user_rango } = jwtDecode(res.data.token);
            user_rango === 'Admin' ? navigate('../menu/admin') : navigate('../menu/herrero')
            const userData = (jwtDecode(res.data.token));
            console.log(userData);
<<<<<<< HEAD
=======

>>>>>>> cb0a08d (Se añaden datos al token y se extraen desde home.jsx)
        }
        else {
            setError(res.data.fatal);
        };
    }

    return (
        <Container>
            <Encabezado>¡BIENVENIDO, GUARDIÁN DE LA CHISPA!</Encabezado>
            <LoginForm onSubmit={handleSubmit(login)}>
                <User>
                    <h3>COMPLETA TUS DATOS</h3>
                    {error && <h4>{error}</h4>}
                    <LabelInputContainer>
                        <label>Nombre de usuario</label>
                        <input {...register('username')} type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <label>Contraseña</label>
                        <input {...register('password')} type="password" />
                    </LabelInputContainer>
                    <LoginButton className="sheen" type="submit">INGRESAR</LoginButton>

                    <Link to={'../menu/admin'}>
                        <DivCreaCuenta>
                            ¿Aún no tienes cuenta? Pulsa aquí.
                        </DivCreaCuenta>
                    </Link>
                </User>
            </LoginForm>
        </Container>
    );

}

export default Home;