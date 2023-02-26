import AdminNavBar from "./AdminNavBar";
import styled from "styled-components";

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

const PedidoCreado = ()=> {

    return (
        <div>
            <AdminNavBar />
            <Container>
                <EncabezadoH1>
                        PEDIDO CREADO CON ÉXITO
                </EncabezadoH1>
            </Container>
        </div>
    );
    
}

export default PedidoCreado;