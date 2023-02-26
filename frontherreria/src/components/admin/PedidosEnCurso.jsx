import styled from "styled-components";
import AdminNavBar from "./AdminNavBar";

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

const PedidosEnCurso = ()=> {

    return (
        <div>
            <AdminNavBar />
            <Container>
                <EncabezadoH1>
                        PEDIDOS EN CURSO
                </EncabezadoH1>
            </Container>
        </div>
    );
    
}

export default PedidosEnCurso;