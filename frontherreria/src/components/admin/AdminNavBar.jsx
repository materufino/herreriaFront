import styled from "styled-components";
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import NavBarBackground from '../../Assets/navbar-background.jpeg'
import NavBarOptionBackground from '../../Assets/navbar-option-background.jpg'
import { useState } from "react";


const AdminNavBar = () => {

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
    
    @media (min-width: 425px) { 
    flex-wrap: wrap;
 }
    @media (max-width: 1200px) { 
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
    }
    @media (min-width: 1850px) { 
    flex-wrap: nowrap;
    }`

    /*     const UlMenu = styled.ul`
        width: auto;
        display: flex;
        flex-direction: row;
        justify-content: start;
            @media (max-width: 1200px) { 
                flex-direction: column;
                display: ${navBarDisplay};
                background-image: url(${NavBarBackground});
                color: #f6ede6;
                    :hover {
                        
                    }
     }
        ` */

    const LiMenu = styled.li`
    list-style: none;
    padding: 15px 15px;
    transition: 0.25s;
    color: #f6ede6;
   
 
    :hover {
        text-shadow: 0 0 0.2em #fbdd1a, 0 0 0.2em #fbdd1a,0 0 0.2em #fbdd1a;
        cursor: pointer;
    }
        @media (max-width: 1200px) { 
    color: #f6ede6;
            width: 100px;
            background-image: url(${NavBarBackground});
            :hover {
                
            }
            
            
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