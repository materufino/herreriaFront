import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AdminNavBar from "./AdminNavBar";
import ListaArtefactos from "../ListaArtefactos";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100vh;
`

const Select = styled.select`
width: 50%;
height: 25px;
`

const Input = styled.input`
width: 48%;
height: 20px;
`

const ArtefactoForm = styled.form`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 400px;
background-color: #ffeda4;
border: 1px solid #0f0905;
border-radius: 10px;
gap: 20px;
padding: 20px;
`

const ArtefactoRenglon = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center ;
font-size: 20px;
`

const ArtefactoTitle = styled.div`
margin-left: 0 auto;
font-size: 20px;
font-family: 'Rakkas', cursive;
color: #3a1603;
`

const ArtefactoImg = styled.img`
width: 100px;
height: 100px;
`

const Encabezado = styled.h1`
font-size: 50px;
font-family: 'Rakkas', cursive;
margin: 70px;
color: #3a1603;
`

const encargos = [
    {
        nombre: 'Fabricación',
        clave: 'fabricacion'
    },
    {
        nombre: 'Reparación',
        clave: 'reparacion'
    }];

const listaArtefactos = [    
{
    nombre: 'Daga',
    categoria_artefacto: 'f',
    especialidad: 'Armas',
    imagen: 'daga.jpg',
    precio_artefacto_nuevo: 10,
    demora_artefacto_nuevo: 46
},
{
    nombre: 'Espada corta',
    categoria_artefacto: 'f',
    especialidad: 'Armas',
    imagen: 'espada corta.jpg',
    precio_artefacto_nuevo: 14,
    demora_artefacto_nuevo: 52
},
{
    nombre: 'Espada larga',
    categoria_artefacto: 'f',
    especialidad: 'Armas',
    imagen: 'espada larga.jpg',
    precio_artefacto_nuevo: 18,
    demora_artefacto_nuevo: 72
},
{
    nombre: 'Espada de dos manos',
    categoria_artefacto: 'f',
    especialidad: 'Armas',
    imagen: 'espada de dos manos.jpg',
    precio_artefacto_nuevo: 24,
    demora_artefacto_nuevo: 90
},
{
    nombre: 'Maza',
    categoria_artefacto: 'c',
    especialidad: 'Armas',
    imagen: 'maza.jpg',
    precio_artefacto_nuevo: 16,
    demora_artefacto_nuevo: 60
},
{
    nombre: 'Mangual',
    categoria_artefacto: 'c',
    especialidad: 'Armas',
    imagen: 'mangual.jpg',
    precio_artefacto_nuevo: 18,
    demora_artefacto_nuevo: 72
},
{
    nombre: 'Estrella del Alba',
    categoria_artefacto: 'c',
    especialidad: 'Armas',
    imagen: 'estrella del alba.jpg',
    precio_artefacto_nuevo: 16,
    demora_artefacto_nuevo: 66
},
{
    nombre: 'Alabarda',
    categoria_artefacto: 'a',
    especialidad: 'Armas',
    imagen: 'alabarda.jpg',
    precio_artefacto_nuevo: 20,
    demora_artefacto_nuevo: 80
},
{
    nombre: 'Lanza',
    categoria_artefacto: 'a',
    especialidad: 'Armas',
    imagen: 'lanza.jpg',
    precio_artefacto_nuevo: 14,
    demora_artefacto_nuevo: 50
},
{
    nombre: 'Hacha arrojadiza',
    categoria_artefacto: 'h',
    especialidad: 'Armas',
    imagen: 'hacha arrojadiza.jpg',
    precio_artefacto_nuevo: 12,
    demora_artefacto_nuevo: 40
},
{
    nombre: 'Hacha de combate',
    categoria_artefacto: 'h',
    especialidad: 'Armas',
    imagen: 'hacha de combate.jpg',
    precio_artefacto_nuevo: 18,
    demora_artefacto_nuevo: 72
},
{
    nombre: 'Hacha de dos manos',
    categoria_artefacto: 'h',
    especialidad: 'Armas',
    imagen: 'hacha de dos manos.jpg',
    precio_artefacto_nuevo: 22,
    demora_artefacto_nuevo: 92
},
{
    nombre: 'Peto de cuero',
    categoria_artefacto: 'l',
    especialidad: 'Armaduras',
    imagen: 'peto de cuero.jpg',
    precio_artefacto_nuevo: 10,
    demora_artefacto_nuevo: 58
},
{
    nombre: 'Cuero tachonado',
    categoria_artefacto: 'l',
    especialidad: 'Armaduras',
    imagen: 'cuero tachonado.jpg',
    precio_artefacto_nuevo: 14,
    demora_artefacto_nuevo: 66
},
{
    nombre: 'Cota de mallas',
    categoria_artefacto: 'm',
    especialidad: 'Armaduras',
    imagen: 'cota de mallas.jpg',
    precio_artefacto_nuevo: 20,
    demora_artefacto_nuevo: 72
},
{
    nombre: 'Cota de mallas y placas',
    categoria_artefacto: 'm',
    especialidad: 'Armaduras',
    imagen: 'cota de mallas y placas.jpg',
    precio_artefacto_nuevo: 25,
    demora_artefacto_nuevo: 100
},
{
    nombre: 'Coraza completa',
    categoria_artefacto: 'p',
    especialidad: 'Armaduras',
    imagen: 'coraza completa.jpg',
    precio_artefacto_nuevo: 35,
    demora_artefacto_nuevo: 120
},
{
    nombre: 'Yelmo de guerra',
    categoria_artefacto: 'p',
    especialidad: 'Armaduras',
    imagen: 'yelmo de guerra.jpg',
    precio_artefacto_nuevo: 8,
    demora_artefacto_nuevo: 40
},
{
    nombre: 'Yelmo bacinete',
    categoria_artefacto: 'p',
    especialidad: 'Armaduras',
    imagen: 'yelmo bacinete.jpg',
    precio_artefacto_nuevo: 15,
    demora_artefacto_nuevo: 60
},
{
    nombre: 'Escudo rodella',
    categoria_artefacto: 'e',
    especialidad: 'Armaduras',
    imagen: 'escudo rodella.jpg',
    precio_artefacto_nuevo: 14,
    demora_artefacto_nuevo: 58
},
{
    nombre: 'Escudo mediano',
    categoria_artefacto: 'e',
    especialidad: 'Armaduras',
    imagen: 'escudo mediano.jpg',
    precio_artefacto_nuevo: 18,
    demora_artefacto_nuevo: 72
},
{
    nombre: 'Escudo torreón',
    categoria_artefacto: 'e',
    especialidad: 'Armaduras',
    imagen: 'escudo torreon.jpg',
    precio_artefacto_nuevo: 20,
    demora_artefacto_nuevo: 80
},
{
    nombre: 'Pico de minería',
    categoria_artefacto: 'h',
    especialidad: 'Herramientas',
    imagen: 'pico de mineria.jpg',
    precio_artefacto_nuevo: 8,
    demora_artefacto_nuevo: 30
},
{
    nombre: 'Hacha para talar',
    categoria_artefacto: 'h',
    especialidad: 'Herramientas',
    imagen: 'hacha para talar.jpg',
    precio_artefacto_nuevo: 12,
    demora_artefacto_nuevo: 50
},
{
    nombre: 'Hoz de cosecha',
    categoria_artefacto: 'f',
    especialidad: 'Herramientas',
    imagen: 'hoz de cosecha.jpg',
    precio_artefacto_nuevo: 10,
    demora_artefacto_nuevo: 40
},
{
    nombre: 'Cuchillo de peletería',
    categoria_artefacto: 'f',
    especialidad: 'Herramientas',
    imagen: 'cuchillo de peleteria.jpg',
    precio_artefacto_nuevo: 8,
    demora_artefacto_nuevo: 24
    }];
    
//para saber qué especialidades hay
const todasLasEspecialidades = listaArtefactos.map(artefacto => artefacto.especialidad)
//para remover especialidades duplicadas
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
const especialidades = todasLasEspecialidades.filter(onlyUnique).sort();

const tiposDeObjetos = listaArtefactos.map(artefacto => artefacto.nombre).sort();

const arrDeObjetosArmas = listaArtefactos.filter(artefacto => artefacto.especialidad === 'Armas');
const armas = arrDeObjetosArmas.map(arma => arma.nombre).sort();

const arrDeObjetosArmaduras = listaArtefactos.filter(artefacto => artefacto.especialidad === 'Armaduras');
const armaduras = arrDeObjetosArmaduras.map(arma => arma.nombre).sort();

const arrDeObjetosHerramientas = listaArtefactos.filter(artefacto => artefacto.especialidad === 'Herramientas');
const herramientas = arrDeObjetosHerramientas.map(arma => arma.nombre).sort();

/* const [tiposDeObjeto, setTiposDeObjeto] = useEffect(tiposDeObjetos) */


const NuevoPedido = ()=> {

    return (
        <div>
            <AdminNavBar />
            <Container>
                <Encabezado>
                    CREAR UN NUEVO PEDIDO
                </Encabezado>

                <ArtefactoForm >
                    <ArtefactoRenglon>
                        <ArtefactoTitle>
                            ESPADA LARGA DE GUNDERAMO
                        </ArtefactoTitle>
                        <ArtefactoImg /* src={} */>

                        </ArtefactoImg>
                        </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Nombre del cliente</label>
                        <Input type="text" />
                    </ArtefactoRenglon>                   
                    <ArtefactoRenglon>
                        <label>Encargo</label>
                        <Select name="encargos">
                            <option hidden defaultValue>Selecciona el tipo de encargo</option>
                            {encargos.map(encargo =>
                            <option key={encargo.clave} value={encargo.nombre}>{encargo.nombre}</option>
                            )};
                        </Select>
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Especialidad</label>
                        <Select id="especialidad">
                            <option hidden defaultValue>Selecciona una categoría</option>
                            {especialidades.map(especialidad =>
                            <option key={especialidad} value={especialidad}>{especialidad}</option>
                            )};
                        </Select>
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Tipo de objeto</label>
                        <Select id="tipo_de_objeto">
                            <option hidden defaultValue>Selecciona una categoría</option>
                            {tiposDeObjetos.map(objeto =>
                            <option key={objeto} value={objeto}>{objeto}</option>
                            )};
                        </Select>
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Trabajos a realizar</label>
                        <Select id="trabajos">
                        <option hidden defaultValue>Selecciona trabajos a realizar</option>
                        </Select>
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Herrero asignado</label>
                        <Select id="herrero_asignado">
                        <option hidden defaultValue>Selecciona el Herrero</option>
                        </Select>
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Fecha de entrega</label>
                        <input type="text"  />
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Precio</label>
                        <input type="date"  />
                    </ArtefactoRenglon>
                    
                    <input type="submit" value="Agregar a la lista" />
                </ArtefactoForm>


            </Container>
        </div>
    );
    
}

export default NuevoPedido;