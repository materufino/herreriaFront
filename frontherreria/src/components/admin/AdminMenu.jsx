import styled from "styled-components";
import { Link } from 'react-router-dom'
import AdminNavBar from "./AdminNavBar";
import NuevoPedidoImg from '../../Assets/nuevo-pedido.png'
import PedidosEnCursoImg from '../../Assets/pedidos-en-curso.png'
import PedidosTerminadosImg from '../../Assets/pedidos-terminados.png'
import ClientesImg from '../../Assets/clientes.png'
import HerrerosImg from '../../Assets/herreros.png'
import MenuOptionBackground from "../../Assets/menu-option-background.png"
import MenuOptionBackgroundHover from "../../Assets/menu-option-background-hover.png"
import jwtDecode from "jwt-decode";

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
 @media (min-width: 425px) { 
    flex-wrap: wrap;
 }
  @media (min-width: 1850px) { 
    flex-wrap: nowrap;
 }
`
const CardDiv = styled.div`
width: 60%;
margin-left: 10px;
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

const AdminMenu = () => {

    const token = localStorage.getItem("token")
    const { user_name } = jwtDecode(token);

    return (
        <div>
            <AdminNavBar />
            <Container>
                <Encabezado>
                    ¡BIENVENIDO, {user_name.toUpperCase()}!
                </Encabezado>
                <OptionsContainer>
                    <Link to={'../pedidos/nuevo'}>
                        <OptionCard>
                            <CardImg style={{ marginLeft: '20px' }} src={NuevoPedidoImg} />
                            <h3>Crear un nuevo pedido</h3>
                            <CardDiv>Accede a un menú para la gestión de reparaciones y fabricaciones</CardDiv>
                        </OptionCard>
                    </Link>
                    <Link to={'../pedidos/en_curso'}>
                        <OptionCard>
                            <CardImg style={{ marginLeft: '10px' }} src={PedidosEnCursoImg} />
                            <h3>Pedidos en curso</h3>
                            <CardDiv style={{ marginLeft: '30px' }}>Muestra un listado de pedidos en curso y sus respectivos estados</CardDiv>
                        </OptionCard>
                    </Link>
                    <Link to={'../pedidos/terminados'}>
                        <OptionCard>
                            <CardImg style={{ marginLeft: '20px' }} src={PedidosTerminadosImg} />
                            <h3>Trabajos terminados</h3>
                            <CardDiv>Muestra un listado de los pedidos que ya han sido terminados</CardDiv>
                        </OptionCard>
                    </Link>
                    <Link to={'../clientes'}>
                        <OptionCard>
                            <CardImg style={{ marginLeft: '20px' }} src={ClientesImg} />
                            <h3>Listado de clientes</h3>
                            <CardDiv>Muestra un listado de los clientes registrados hasta el momento</CardDiv>
                        </OptionCard>
                    </Link>
                    <Link to={'../herreros/'}>
                        <OptionCard>
                            <CardImg style={{ marginLeft: '20px' }} src={HerrerosImg} />
                            <h3>Herreros</h3>
                            <CardDiv>Accede a un menú para la gestión de los Herreros</CardDiv>
                        </OptionCard>
                    </Link>
                </OptionsContainer>
            </Container>
        </div>
    )
}

export default AdminMenu;