import styled from "styled-components";
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { useState } from "react";
import NavBarBackground from '../../Assets/navbar-background.jpeg'
import NavBarOptionBackground from '../../Assets/navbar-option-background.jpg'



const HerreroNavBar = () => {

    const StyledNavBar = styled.nav`
    background-image: url(${NavBarBackground}); 
   
    @media (max-width:600px){
    display:grid;
    grid-template-columns:repeat(2, 1fr);
   text-align:center;
  font-size:18px;
    } 
    @media (min-width:600px)and (max-width:800px){
    display:grid;
    grid-template-columns:repeat(4, 1fr);
    font-size:18px;
    text-align:center;
           } 
           @media (min-width:800px){
    display:grid;
    grid-template-columns:repeat(4, 1fr);
      text-align:center;
    font-size:20px;
  }
  @media (min-width: 1850px) { 
     font-size:24px;
    }
    `
    const UlMenu = styled.ul`
      width: auto;
      display: flex;
      flex-direction: row;
      justify-content: start;
      `

    const LiMenu = styled.li`
    list-style: none;
    padding: 15px 15px;
    transition: 0.25s;
    color: #f6ede6;
    :hover {
        text-shadow: 0 0 0.2em #fbdd1a, 0 0 0.2em #fbdd1a,0 0 0.2em #fbdd1a;
        cursor: pointer;
    }
    @media (max-width: 650px) {
        font-size: 15px;
        
    }
    `
    const [items, setItems] = useState([
        /* { label: 'Clientes', path: '/'} */
        { label: 'Inicio', path: '/menu/herrero' },
        { label: 'Lista de pedidos', path: '/herrero/tareas/pendientes' },
        { label: 'Pedidos finalizados', path: '/herrero/tareas/finalizadas' },
        { label: 'Cerrar sesión', path: '/home' }
    ]);

    return (
        <StyledNavBar>
            {items.map((item, index) => (
                <CustomLink to={item.path} replace>
                    <LiMenu>{item.label}</LiMenu>
                </CustomLink>
            ))}
        </StyledNavBar>
    );
}

const CustomLink = ({ to, children, ...props }) => {

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: false })
    return (

        <Link className={isActive ? "active" : ""} to={to} {...props} >
            {children}
        </Link>
    );
}

export default HerreroNavBar;