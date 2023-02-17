import styled from "styled-components";
import {Link} from 'react-router-dom'
import AdminNavBar from "./AdminNavBar";
import MenuOptionBackground from "../../Assets/menu-option-background.png"
import NuevoPedidoImg from '../../Assets/nuevo-pedido.png'
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
margin: 70px;
color: #3a1603;
`

const OptionsContainer = styled.div`
width: 90%;
display: flex;
justify-content: space-around;
gap: 10px;
`
const CardDiv = styled.div`
width: 60%;
margin-left: 15px;
`

const CardImg = styled.img`
margin-top: 20px;
width: 200px;
height: 230px;
`

const OptionCard = styled.div`
background-image: url(${MenuOptionBackground});
background-size: cover;
color: #3a1603;
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
                            <CardImg style={{marginLeft: '20px'}} src={NuevoPedidoImg}/>
                            <h3>Crear un nuevo pedido</h3>
                            <CardDiv>Gestiona reparaciones y fabricaciones</CardDiv>
                        </OptionCard>  
                    </Link>

                    <Link to={'../pedidos/en_curso'}>
                        <OptionCard>
                        <CardImg style={{marginLeft: '10px'}} src={PedidosEnCursoImg}/>
                        <h3>Pedidos en curso</h3>
                        <CardDiv>Muestra un listado de pedidos en curso y sus respectivos estados</CardDiv>
                        </OptionCard>  
                    </Link>

                    <Link to={'../pedidos/terminados'}>
                        <OptionCard>
                        <CardImg src=""/>
                        <h3>Pedidos terminados</h3>
                        <CardDiv>Muestra un listado de los pedidos que ya han sido terminados</CardDiv>
                        </OptionCard> 
                    </Link>

                    <Link to={'../clientes'}>
                        <OptionCard>
                        <CardImg src=""/>
                        <h3>Listado de clientes</h3>
                        <CardDiv>Muestra un listado de los clientes registrados hasta el momento</CardDiv>
                        </OptionCard> 
                    </Link>

                    <Link to={'../herreros/listado'}>
                        <OptionCard>
                        <CardImg src=""/>
                        <h3>Listado de Herreros</h3>
                        <CardDiv>Muestra un listado de los Herreros registrados</CardDiv>
                        </OptionCard> 
                    </Link>    

                </OptionsContainer>
            </Container>
        </div>
        )
    }
    export default AdminMenu;