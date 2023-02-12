import styled from "styled-components";
import {Link} from 'react-router-dom'
import AdminNavBar from "./AdminNavBar";

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
`

const OptionsContainer = styled.div`
width: 90%;
display: flex;
justify-content: space-around;
gap: 30px;
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
h3 {
    font-family: 'Rakkas', cursive;
    font-size: 24px;
    margin: 20px 0px;
};
` 

const AdminMenu = ()=> {

    return (
        
        <div>
            <AdminNavBar />
            <Container>
                <Encabezado>
                    ¡BIENVENIDO, ADMINISTRADOR!
                </Encabezado>
                <OptionsContainer>
                    <Link to={'../pedidos/nuevo'}>
                        <OptionCard>
                            <img src=""/>
                            <h3>Crear un nuevo pedido</h3>
                            <p>Gestiona reparaciones y fabricaciones</p>
                        </OptionCard>  
                    </Link>

                    <Link to={'../pedidos/en_curso'}>
                        <OptionCard>
                        <img src=""/>
                        <h3>Pedidos en curso</h3>
                        <p>Muestra un listado de pedidos en curso y sus respectivos estados</p>
                        </OptionCard>  
                    </Link>

                    <Link to={'../pedidos/terminados'}>
                        <OptionCard>
                        <img src=""/>
                        <h3>Pedidos terminados</h3>
                        <p>Muestra un listado de los pedidos que ya han sido terminados</p>
                        </OptionCard> 
                    </Link>

                    <Link to={'../clientes'}>
                        <OptionCard>
                        <img src=""/>
                        <h3>Listado de clientes</h3>
                        <p>Muestra un listado de los clientes registrados hasta el momento</p>
                        </OptionCard> 
                    </Link>

                    <Link to={'../herreros/listado'}>
                        <OptionCard>
                        <img src=""/>
                        <h3>Listado de Herreros</h3>
                        <p>Muestra un listado de los Herreros registrados</p>
                        </OptionCard> 
                    </Link>    

                </OptionsContainer>
            </Container>
        </div>

    );
    
}

export default AdminMenu;