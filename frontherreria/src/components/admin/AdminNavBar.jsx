import styled from "styled-components";
import {Link} from 'react-router-dom'
import NavBarBackground from '../../Assets/navbar-background.jpeg'
import NavBarOptionBackground from '../../Assets/navbar-option-background.jpg'

const AdminNavBar = ()=> {

    const StyledNavBar = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    background-image: url(${NavBarBackground});
    font-size: 26px;
    height: 70px;
    align-items: center;
    padding-right: 20px;
    `
    const UlMenu = styled.ul`
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: start;
    `

    const LiMenu = styled.li`
    list-style: none;
    padding: 20px 15px;
    transition: 0.25s;
    color: #f6ede6;
    :hover {
        background-image: url(${NavBarOptionBackground});
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        color: #3a1603;
        cursor: pointer;
    }
    `

    return (
            <StyledNavBar>
                <Link to={'/menu/admin'}>
                    <LiMenu>Inicio</LiMenu>
                </Link> 
                <Link to={'/pedidos/nuevo'}>
                    <LiMenu>Nuevo Pedido</LiMenu>
                </Link> 
                <Link to={'/pedidos/en_curso'}>
                    <LiMenu>Pedidos en curso</LiMenu>
                </Link>
                <Link to={'/pedidos/terminados'}>
                    <LiMenu>Pedidos terminados</LiMenu>
                </Link>
                <Link to={'/clientes'}>
                    <LiMenu>Clientes</LiMenu>
                </Link> 
                <Link to={'/herreros/listado'}>
                    <LiMenu>Herreros</LiMenu>
                </Link> 
                <Link to={'/home'}>
                    <LiMenu>Cerrar sesión</LiMenu>
                </Link> 
            </StyledNavBar>
    );

}

export default AdminNavBar;