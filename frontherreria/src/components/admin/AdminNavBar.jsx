import styled from "styled-components";
import {Link} from 'react-router-dom'
import { useState } from "react";

const AdminNavBar = ()=> {

    const StyledNavBar = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    background-color: #3a1603;
    font-size: 26px;
    height: 60px;
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
    margin-left: 20px;
    margin-right: 20px;
    padding: 5px 10px;
    transition: 0.25s;
    color: #f6ede6;
    :hover {
        background-color: white;
        color: #6503a1;
        border-radius: 5px;
        cursor: pointer;
    }
    `
    const [items, setItems] = useState([
    /* { label: 'Clientes', path: '/'} */,
    { label: 'Inicio', path: '/home'},
    { label: 'Nuevo pedido', path: '/pedidos/nuevo'},
    { label: 'Herreros', path: '/herreros/listado'},
    { label: 'Cerrar sesión', path: '/home'}
])

    return (
            <StyledNavBar>
                {items.map((item,index) =>(
                    <Link to={item.path}>
                        <LiMenu>{item.label}</LiMenu>
                    </Link>                  
                ))}
            </StyledNavBar>
    );

}

export default AdminNavBar;