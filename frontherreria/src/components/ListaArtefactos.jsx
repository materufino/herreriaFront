import { useEffect, useState } from "react";
import styled from "styled-components";
import CardArtefacto from "./CardArtefacto";
import Background from "../Assets/main-background.jpg";

const ContenedorCards = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;
justify-content: center;
margin: 30px auto;
`

const DivMenu = styled.div`
height: 100% ;
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Alegreya Sans', sans-serif;
font-size: 18px;
padding-top: 30px;
`
const Encabezado = styled.h1`
font-size: 50px;
font-family: 'Rakkas', cursive;
margin-bottom: 10px;
`

const ListaArtefactos = ()=> {

    const [arrTipoArtefactos, setArrTipoArtefactos] = useState([    {
        nombre: 'Daga',
        categoria_artefacto: 'f',
        especialidad: 'armas',
        imagen: 'daga.jpg',
        precio_artefacto_nuevo: 10,
        demora_artefacto_nuevo: 46
    },
    {
        nombre: 'Espada corta',
        categoria_artefacto: 'f',
        especialidad: 'armas',
        imagen: 'espada corta.jpg',
        precio_artefacto_nuevo: 14,
        demora_artefacto_nuevo: 52
    },
    {
        nombre: 'Espada larga',
        categoria_artefacto: 'f',
        especialidad: 'armas',
        imagen: 'espada larga.jpg',
        precio_artefacto_nuevo: 18,
        demora_artefacto_nuevo: 72
    },
    {
        nombre: 'Espada de dos manos',
        categoria_artefacto: 'f',
        especialidad: 'armas',
        imagen: 'espada de dos manos.jpg',
        precio_artefacto_nuevo: 24,
        demora_artefacto_nuevo: 90
    },
    {
        nombre: 'Maza',
        categoria_artefacto: 'c',
        especialidad: 'armas',
        imagen: 'maza.jpg',
        precio_artefacto_nuevo: 16,
        demora_artefacto_nuevo: 60
    },
    {
        nombre: 'Mangual',
        categoria_artefacto: 'c',
        especialidad: 'armas',
        imagen: 'mangual.jpg',
        precio_artefacto_nuevo: 18,
        demora_artefacto_nuevo: 72
    },
    {
        nombre: 'Estrella del Alba',
        categoria_artefacto: 'c',
        especialidad: 'armas',
        imagen: 'estrella del alba.jpg',
        precio_artefacto_nuevo: 16,
        demora_artefacto_nuevo: 66
    },
    {
        nombre: 'Alabarda',
        categoria_artefacto: 'a',
        especialidad: 'armas',
        imagen: 'alabarda.jpg',
        precio_artefacto_nuevo: 20,
        demora_artefacto_nuevo: 80
    },
    {
        nombre: 'Lanza',
        categoria_artefacto: 'a',
        especialidad: 'armas',
        imagen: 'lanza.jpg',
        precio_artefacto_nuevo: 14,
        demora_artefacto_nuevo: 50
    },
    {
        nombre: 'Hacha arrojadiza',
        categoria_artefacto: 'h',
        especialidad: 'armas',
        imagen: 'hacha arrojadiza.jpg',
        precio_artefacto_nuevo: 12,
        demora_artefacto_nuevo: 40
    },
    {
        nombre: 'Hacha de combate',
        categoria_artefacto: 'h',
        especialidad: 'armas',
        imagen: 'hacha de combate.jpg',
        precio_artefacto_nuevo: 18,
        demora_artefacto_nuevo: 72
    },
    {
        nombre: 'Hacha de dos manos',
        categoria_artefacto: 'h',
        especialidad: 'armas',
        imagen: 'hacha de dos manos.jpg',
        precio_artefacto_nuevo: 22,
        demora_artefacto_nuevo: 92
    },
    {
        nombre: 'Peto de cuero',
        categoria_artefacto: 'l',
        especialidad: 'armaduras',
        imagen: 'peto de cuero.jpg',
        precio_artefacto_nuevo: 10,
        demora_artefacto_nuevo: 58
    },
    {
        nombre: 'Cuero tachonado',
        categoria_artefacto: 'l',
        especialidad: 'armaduras',
        imagen: 'cuero tachonado.jpg',
        precio_artefacto_nuevo: 14,
        demora_artefacto_nuevo: 66
    },
    {
        nombre: 'Cota de mallas',
        categoria_artefacto: 'm',
        especialidad: 'armaduras',
        imagen: 'cota de mallas.jpg',
        precio_artefacto_nuevo: 20,
        demora_artefacto_nuevo: 72
    },
    {
        nombre: 'Cota de mallas y placas',
        categoria_artefacto: 'm',
        especialidad: 'armaduras',
        imagen: 'cota de mallas y placas.jpg',
        precio_artefacto_nuevo: 25,
        demora_artefacto_nuevo: 100
    },
    {
        nombre: 'Coraza completa',
        categoria_artefacto: 'p',
        especialidad: 'armaduras',
        imagen: 'coraza completa.jpg',
        precio_artefacto_nuevo: 35,
        demora_artefacto_nuevo: 120
    },
    {
        nombre: 'Yelmo de guerra',
        categoria_artefacto: 'p',
        especialidad: 'armaduras',
        imagen: 'yelmo de guerra.jpg',
        precio_artefacto_nuevo: 8,
        demora_artefacto_nuevo: 40
    },
    {
        nombre: 'Yelmo bacinete',
        categoria_artefacto: 'p',
        especialidad: 'armaduras',
        imagen: 'yelmo bacinete.jpg',
        precio_artefacto_nuevo: 15,
        demora_artefacto_nuevo: 60
    },
    {
        nombre: 'Escudo rodella',
        categoria_artefacto: 'e',
        especialidad: 'armaduras',
        imagen: 'escudo rodella.jpg',
        precio_artefacto_nuevo: 14,
        demora_artefacto_nuevo: 58
    },
    {
        nombre: 'Escudo mediano',
        categoria_artefacto: 'e',
        especialidad: 'armaduras',
        imagen: 'escudo mediano.jpg',
        precio_artefacto_nuevo: 18,
        demora_artefacto_nuevo: 72
    },
    {
        nombre: 'Escudo torreón',
        categoria_artefacto: 'e',
        especialidad: 'armaduras',
        imagen: 'escudo torreon.jpg',
        precio_artefacto_nuevo: 20,
        demora_artefacto_nuevo: 80
    },
    {
        nombre: 'Pico de minería',
        categoria_artefacto: 'h',
        especialidad: 'herramientas',
        imagen: 'pico de mineria.jpg',
        precio_artefacto_nuevo: 8,
        demora_artefacto_nuevo: 30
    },
    {
        nombre: 'Hacha para talar',
        categoria_artefacto: 'h',
        especialidad: 'herramientas',
        imagen: 'hacha para talar.jpg',
        precio_artefacto_nuevo: 12,
        demora_artefacto_nuevo: 50
    },
    {
        nombre: 'Hoz de cosecha',
        categoria_artefacto: 'f',
        especialidad: 'herramientas',
        imagen: 'hoz de cosecha.jpg',
        precio_artefacto_nuevo: 10,
        demora_artefacto_nuevo: 40
    },
    {
        nombre: 'Cuchillo de peletería',
        categoria_artefacto: 'f',
        especialidad: 'herramientas',
        imagen: 'cuchillo de peleteria.jpg',
        precio_artefacto_nuevo: 8,
        demora_artefacto_nuevo: 24
    }   ]);

    return (
        <DivMenu>
            <Encabezado>Listado de artefactos</Encabezado>
                <p>Número de artefactos: {arrTipoArtefactos.length} </p>
                <ContenedorCards>
                    {arrTipoArtefactos.map(artefacto => (
                        <CardArtefacto {...artefacto} />
                    ))}
                </ContenedorCards>
        </DivMenu>    
    )
}

export default ListaArtefactos;
