import styled from "styled-components";
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import NavBarBackground from '../../Assets/navbar-background.jpeg'
import NavBarOptionBackground from '../../Assets/navbar-option-background.jpg'
import { useState } from "react";

const AdminNavBar = () => {

    const StyledNavBar = styled.nav`
       background-image: url(${NavBarBackground}); 
   @media (max-width:600px){
    display:grid;
    grid-template-columns:repeat(3, 33.3%);
 
  text-align:left;
  font-size:18px;
    } 
  @media (min-width:600px)and (max-width:800px){
    display:grid;
    grid-template-columns:repeat(4, 25%);
  
       font-size:18px;
    text-align:left;
           } 
  @media (min-width:800px){
    display:grid;
    grid-template-columns:repeat(7, 1fr);
          font-size:15px;
    text-align:left;
    font-size:20px;
  }
     @media (min-width: 1850px) { 
    font-size:24px;
    } `

    const LiMenu = styled.li`
    list-style: none;
    padding: 15px 15px;
    transition: 0.25s;
    color: #f6ede6;
      
    :hover {
        text-shadow: 0 0 0.2em #fbdd1a, 0 0 0.2em #fbdd1a,0 0 0.2em #fbdd1a;
        cursor: pointer;
    }
        @media (max-width: 800px) { 
               width: 150px;
             
                        
} 
`

    return (
        <StyledNavBar>

            <CustomLink to={'/menu/admin'}>
                <LiMenu>Inicio</LiMenu>
            </CustomLink>
            <CustomLink to={'/pedidos/nuevo'}>
                <LiMenu>Nuevo Pedido</LiMenu>
            </CustomLink>
            <CustomLink to={'/pedidos/en_curso'}>
                <LiMenu>Pedidos en curso</LiMenu>
            </CustomLink>
            <CustomLink to={'/pedidos/terminados'}>
                <LiMenu>Trabajos terminados</LiMenu>
            </CustomLink>
            <CustomLink to={'/clientes'}>
                <LiMenu>Clientes</LiMenu>
            </CustomLink>
            <CustomLink to={'/herreros'}>
                <LiMenu>Herreros</LiMenu>
            </CustomLink>
            <CustomLink to={'/home'}>
                <LiMenu>Cerrar sesión</LiMenu>
            </CustomLink>

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

export default AdminNavBar;