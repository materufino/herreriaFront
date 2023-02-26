import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AdminNavBar from "./AdminNavBar";
import CartBackgroundImg from "../../Assets/cart-background.png"
import dayjs from "dayjs";

const Button = styled.button`
background-color: #00bd00df;
font-size: 25px;
margin-left: 75px;
padding: 0px 10px;
color: white;
font-weight: 400;
`

const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
/* height: 100vh; */
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
:last-child {
    align-items: flex-end;
}
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
    nombre: 'Escudo torreon',
    categoria_artefacto: 'e',
    especialidad: 'Armaduras',
    imagen: 'escudo torreon.jpg',
    precio_artefacto_nuevo: 20,
    demora_artefacto_nuevo: 80
},
{
    nombre: 'Pico de mineria',
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
    nombre: 'Cuchillo de peleteria',
    categoria_artefacto: 'f',
    especialidad: 'Herramientas',
    imagen: 'cuchillo de peleteria.jpg',
    precio_artefacto_nuevo: 8,
    demora_artefacto_nuevo: 24
    }];

const arrTrabajosParaRealizar = [
    {
        nombre: 'Afilado de hoja',
        categoria_artefacto: 'f',
        precio: 2,
        demora: 8
    },
    {
        nombre: 'Engrasado de hoja',
        categoria_artefacto: 'f',
        precio: 1,
        demora: 4
    },
    {
        nombre: 'Cambio de hoja',
        categoria_artefacto: 'f',
        precio: 8,
        demora: 16
    },
    {
        nombre: 'Cambio de empuñadura',
        categoria_artefacto: 'f',
        precio: 5,
        demora: 12
    },
    {
        nombre: 'Tallado de hoja',
        categoria_artefacto: 'f',
        precio: 3,
        demora: 8
    },
    {
        nombre: 'Limpieza de huecos',
        categoria_artefacto: 'c',
        precio: 2,
        demora: 4
    },
    {
        nombre: 'Engrasado de pinchos',
        categoria_artefacto: 'c',
        precio: 1,
        demora: 4
    },
    {
        nombre: 'Reposición de pinchos',
        categoria_artefacto: 'c',
        precio: 3,
        demora: 12
    },
    {
        nombre: 'Cambio de empuñadura',
        categoria_artefacto: 'c',
        precio: 5,
        demora: 12
    },
    {
        nombre: 'Afilado de punta',
        categoria_artefacto: 'a',
        precio: 2,
        demora: 8
    },
    {
        nombre: 'Cambio de mástil',
        categoria_artefacto: 'a',
        precio: 4,
        demora: 12
    },
    {
        nombre: 'Cambio de punta',
        categoria_artefacto: 'a',
        precio: 6,
        demora: 15
    },
    {
        nombre: 'Cambio de empuñadura',
        categoria_artefacto: 'a',
        precio: 5,
        demora: 12
    },
    {
        nombre: 'Afilado de hojas',
        categoria_artefacto: 'h',
        precio: 4,
        demora: 12
    },
    {
        nombre: 'Engrasado de hojas',
        categoria_artefacto: '',
        precio: 2,
        demora: 6
    },
    {
        nombre: 'Cambio de mástil',
        categoria_artefacto: 'h',
        precio: 3,
        demora: 8
    },
    {
        nombre: 'Cambio de empuñadura',
        categoria_artefacto: 'h',
        precio: 5,
        demora: 12
    },
    {
        nombre: 'Arreglo de rasgados',
        categoria_artefacto: 'l',
        precio: 3,
        demora: 10
    },
    {
        nombre: 'Re-costura de pliegues',
        categoria_artefacto: 'l',
        precio: 2,
        demora: 6
    },
    {
        nombre: 'Reposición/Agregado de tachas',
        categoria_artefacto: 'l',
        precio: 3,
        demora: 8
    },
    {
        nombre: 'Reposición de anillas',
        categoria_artefacto: 'm',
        precio: 3,
        demora: 12
    },
    {
        nombre: 'Agregado de placas',
        categoria_artefacto: 'm',
        precio: 6,
        demora: 20
    },
    {
        nombre: 'Pulido del metal',
        categoria_artefacto: 'm',
        precio: 2,
        demora: 6
    },
    {
        nombre: 'Arreglo de abolladuras',
        categoria_artefacto: 'p',
        precio: 4,
        demora: 20
    },
    {
        nombre: 'Ornamentación',
        categoria_artefacto: 'p',
        precio: 3,
        demora: 12
    },
    {
        nombre: 'Pulido del metal',
        categoria_artefacto: 'p',
        precio: 3,
        demora: 12
    },
    {
        nombre: 'Cobertura de agujeros',
        categoria_artefacto: 'e',
        precio: 3,
        demora: 12
    },
    {
        nombre: 'Arreglo de abolladuras',
        categoria_artefacto: 'e',
        precio: 3,
        demora: 12
    },
    {
        nombre: 'Corrección del marco',
        categoria_artefacto: 'e',
        precio: 4,
        demora: 15
    },
    {
        nombre: 'Removido de astillas',
        categoria_artefacto: 'e',
        precio: 2,
        demora: 6
    },
]

const arrHerreros = [
    {
        nombre: "Relian",
        especialidad: "Armas",
        rango: "Maestro",
        reparaciones: {},
        fabricaciones: {}
    },
    {
        nombre: "Carlos",
        especialidad: "Armas",
        rango: "Aprendiz",
        reparaciones: {},
        fabricaciones: {}
    },
    {
        nombre: "Robert",
        especialidad: "Armas",
        rango: "Experto",
        reparaciones: {},
        fabricaciones: {}
    },
    {
        nombre: "Ernest",
        especialidad: "Armaduras",
        rango: "Maestro",
        reparaciones: {},
        fabricaciones: {}
    },
    {
        nombre: "Lilian",
        especialidad: "Armaduras",
        rango: "Aprendiz",
        reparaciones: {},
        fabricaciones: {}
    },
    {
        nombre: "Reginald",
        especialidad: "Armaduras",
        rango: "Experto",
        reparaciones: {},
        fabricaciones: {}
    },
    {
        nombre: "Loric",
        especialidad: "Herramientas",
        rango: "Maestro",
        reparaciones: {},
        fabricaciones: {}
    },
    {
        nombre: "Pojnal",
        especialidad: "Herramientas",
        rango: "Aprendiz",
        reparaciones: {},
        fabricaciones: {}
    },
    {
        nombre: "Corint",
        especialidad: "Herramientas",
        rango: "Experto",
        reparaciones: {},
        fabricaciones: {}
    },
]


//para saber qué especialidades hay
const todasLasEspecialidades = listaArtefactos.map(artefacto => artefacto.especialidad)
//para remover especialidades duplicadas
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
const especialidades = todasLasEspecialidades.filter(onlyUnique).sort();

const tiposDeObjetos = listaArtefactos.map(artefacto => artefacto.nombre);

//Herreros por especialidades
const todosLosHerreros = arrHerreros.map(herrero => herrero.nombre)

const arrHerrerosArmas = arrHerreros.filter(herrero => herrero.especialidad === "Armas")
const herrerosArmas = arrHerrerosArmas.map(herrero => herrero.nombre).sort()

const arrHerrerosArmaduras = arrHerreros.filter(herrero => herrero.especialidad === "Armaduras")
const herrerosArmaduras = arrHerrerosArmaduras.map(herrero => herrero.nombre).sort()

const arrHerrerosHerramientas = arrHerreros.filter(herrero => herrero.especialidad === "Herramientas")
const herrerosHerramientas = arrHerrerosHerramientas.map(herrero => herrero.nombre).sort()

//Artefactos por especialidades
const arrDeObjetosArmas = listaArtefactos.filter(artefacto => artefacto.especialidad === 'Armas');
const armas = arrDeObjetosArmas.map(arma => arma.nombre).sort();

const arrDeObjetosArmaduras = listaArtefactos.filter(artefacto => artefacto.especialidad === 'Armaduras');
const armaduras = arrDeObjetosArmaduras.map(arma => arma.nombre).sort();

const arrDeObjetosHerramientas = listaArtefactos.filter(artefacto => artefacto.especialidad === 'Herramientas');
const herramientas = arrDeObjetosHerramientas.map(arma => arma.nombre).sort();

//Categorías de artefactos
const filo = listaArtefactos.filter(artefacto => artefacto.categoria_artefacto === 'f')
const filos = filo.map(filo => filo.nombre).sort();

const contundente = listaArtefactos.filter(artefacto => artefacto.categoria_artefacto === 'c')
const contundentes = contundente.map(contundente => contundente.nombre).sort();

const hacha = listaArtefactos.filter(artefacto => artefacto.categoria_artefacto === 'h')
const hachas = hacha.map(hacha => hacha.nombre).sort();

const asta = listaArtefactos.filter(artefacto => artefacto.categoria_artefacto === 'a')
const astas = asta.map(asta => asta.nombre).sort();

const ligero = listaArtefactos.filter(artefacto => artefacto.categoria_artefacto === 'l')
const ligeros = ligero.map(ligero => ligero.nombre).sort();

const mediano = listaArtefactos.filter(artefacto => artefacto.categoria_artefacto === 'm')
const medianos = mediano.map(mediano => mediano.nombre).sort();

const pesado = listaArtefactos.filter(artefacto => artefacto.categoria_artefacto === 'p')
const pesados = pesado.map(pesado => pesado.nombre).sort();

const escudo = listaArtefactos.filter(artefacto => artefacto.categoria_artefacto === 'e')
const escudos = escudo.map(escudo => escudo.nombre).sort();

//Trabajos para realizar según categoría
const trabajosFilo = arrTrabajosParaRealizar.filter(trabajo => trabajo.categoria_artefacto === 'f').sort()
const trabajosFilos = trabajosFilo.map(trabajo => trabajo.nombre).sort();

const trabajosContundente = arrTrabajosParaRealizar.filter(trabajo => trabajo.categoria_artefacto === 'c').sort()
const trabajosContundentes = trabajosContundente.map(trabajo => trabajo.nombre).sort();

const trabajosHacha = arrTrabajosParaRealizar.filter(trabajo => trabajo.categoria_artefacto === 'h').sort()
const trabajosHachas = trabajosHacha.map(trabajo => trabajo.nombre).sort();

const trabajosAsta = arrTrabajosParaRealizar.filter(trabajo => trabajo.categoria_artefacto === 'a').sort()
const trabajosAstas = trabajosAsta.map(trabajo => trabajo.nombre).sort();

const trabajosLigero = arrTrabajosParaRealizar.filter(trabajo => trabajo.categoria_artefacto === 'l').sort()
const trabajosLigeros = trabajosLigero.map(trabajo => trabajo.nombre).sort();

const trabajosMediano = arrTrabajosParaRealizar.filter(trabajo => trabajo.categoria_artefacto === 'm').sort()
const trabajosMedianos = trabajosMediano.map(trabajo => trabajo.nombre).sort();

const trabajosPesado = arrTrabajosParaRealizar.filter(trabajo => trabajo.categoria_artefacto === 'p').sort()
const trabajosPesados = trabajosPesado.map(trabajo => trabajo.nombre).sort();

const trabajosEscudo = arrTrabajosParaRealizar.filter(trabajo => trabajo.categoria_artefacto === 'e').sort()
const trabajosEscudos = trabajosEscudo.map(trabajo => trabajo.nombre).sort();


const PedidoReparacion = () => {
    const [tipoDeObjeto, setTipoDeObjeto] = useState([])

    const [nombreCliente, setNombreCliente] = useState('')

    const [nombreArtefacto, setNombreArtefacto] = useState('ENCARGO')

    const [fechaEntregaReparacion, setFechaEntregaReparacion] = useState(dayjs().format("DD/MM/YYYY - hh:mm A", 'es'))

    const [tipoDeHerrero, setTipoDeHerrero] = useState([])
    
    const [horasPorTrabajo, setHorasPorTrabajo] = useState(0)

    const [horasTrabajo, setHorasTrabajo] = useState(0)

    const [precioArtefacto, setPrecioArtefacto] = useState(0)
    

    const cambiaNombreCliente = (e) => {
        setNombreCliente(e.target.value)
    }

    const cambiaTipoDeObjeto = (e)=>{
        switch (e.target.value){
            case 'Armas': setTipoDeObjeto([...armas])
                setTipoDeHerrero([...herrerosArmas]);
            break;
            case 'Armaduras' : setTipoDeObjeto([...armaduras]) 
                setTipoDeHerrero([...herrerosArmaduras]);
            break;
            case 'Herramientas' : setTipoDeObjeto([...herramientas]) 
                setTipoDeHerrero([...herrerosHerramientas]);
            break;
            default:
        }

    }

    const [trabajos, setTrabajos] = useState([])
    const [imagen, setImagen] = useState('yellow-image')

/*     const demora = (e) => {
            const index = tiposDeObjetos.indexOf(e.target.value)
            const demora = listaArtefactos[index].demora_artefacto_nuevo
            return dayjs().add(demora, "hour").format("DD/MM/YYYY - hh:mm A", 'es')
    } */
    

    const cambiaImagenTrabajos = (e) => {
        setImagen(e.target.value.toLowerCase())
        setNombreArtefacto(e.target.value.toUpperCase())


            if (filos.includes(e.target.value)){
                setTrabajos([...trabajosFilos]);}
            else if (contundentes.includes(e.target.value)){
                setTrabajos([...trabajosContundentes]);}
            else if (hachas.includes(e.target.value)){ 
                setTrabajos([...trabajosHachas]);}
            else if (astas.includes(e.target.value)){ 
                setTrabajos([...trabajosAstas]);}
            else if (ligeros.includes(e.target.value)){ 
                setTrabajos([...trabajosLigeros]);}
            else if (medianos.includes(e.target.value)){ 
                setTrabajos([...trabajosMedianos]);}
            else if (pesados.includes(e.target.value)){ 
                setTrabajos([...trabajosPesados]);}
            else if (escudos.includes(e.target.value)){ 
                setTrabajos([...trabajosEscudos]);}
    }
    
    const [nuevosTrabajos, setNuevosTrabajos] = useState([]);
    const [nuevosTrabajos2, setNuevosTrabajos2] = useState([]);
    const [masNuevosTrabajos, setMasNuevosTrabajos] = useState([]);
    const [primerTrabajo, setPrimerTrabajo] = useState('');
    const [segundoTrabajo, setSegundoTrabajo] = useState('');
    const [tercerTrabajo, setTercerTrabajo] = useState('');
    const [agregarNuevaTarea1, setAgregarNuevaTarea1] = useState('')
    const [agregarNuevaTarea2, setAgregarNuevaTarea2] = useState('')

    const agregarBoton1 = (e) => {
        const index = trabajos.indexOf(e.target.value)
        const nuevosTrabajos = [...trabajos]
        nuevosTrabajos.splice(index, 1)
        setNuevosTrabajos(nuevosTrabajos)
        console.log(nuevosTrabajos)
        setAgregarNuevaTarea1(<Button onClick={(e)=> {agregaSegundoTrabajo(e)}}>+</Button>)
    }

    const agregarBoton2 = (e)=> {
        const index = nuevosTrabajos.indexOf(e.target.value)
        const nuevosTrabajos2 = [...nuevosTrabajos]
        nuevosTrabajos2.splice(index, 1)
        setNuevosTrabajos2(nuevosTrabajos2)
        console.log(nuevosTrabajos2)
        setAgregarNuevaTarea2(<Button onClick={(e)=> {agregaTercerTrabajo(e)}}>+</Button>)
    }

   const agregaSegundoTrabajo = (e)=> {
        console.log(nuevosTrabajos)
        e.preventDefault()
        setSegundoTrabajo(<ArtefactoRenglon>
            <label>Trabajo 2</label>
            {agregarNuevaTarea2}
            <Select onChange={(e)=>{agregarBoton2()}} id="trabajos">
            <option hidden defaultValue>Selecciona trabajos a realizar</option>
            {nuevosTrabajos.map(trabajo =>
            <option key={trabajo} value={trabajo}> {trabajo}
            </option>)};
            </Select>
        </ArtefactoRenglon>) 
        setAgregarNuevaTarea1('')
    }

    const agregaTercerTrabajo = (e)=> {
        setAgregarNuevaTarea2('')
    }


    return (
        <div>
            <AdminNavBar />

            <FormContainer>
                <Encabezado>
                    CREAR UN NUEVO PEDIDO
                </Encabezado>

                <ArtefactoForm >
                    <ArtefactoRenglon>
                        <ArtefactoTitle>
                            {nombreArtefacto} {nombreCliente? "DE" :""} {nombreCliente.toUpperCase()}
                        </ArtefactoTitle>
                        <ArtefactoImg  src={require(`../../Assets/${imagen}.jpg`)}  >

                        </ArtefactoImg>
                        </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Nombre del cliente</label>
                        <Input onChange={(e)=> {cambiaNombreCliente(e)}} type="text" />
                    </ArtefactoRenglon>                   
                    <ArtefactoRenglon>
                        <label>Especialidad</label>
                        <Select onChange={(e)=> {cambiaTipoDeObjeto(e)}} id="especialidad">
                            <option hidden defaultValue>Selecciona una categoría</option>
                            {especialidades.map(especialidad =>
                            <option key={especialidad} value={especialidad}>{especialidad}</option>
                            )};
                        </Select>
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Tipo de objeto</label>
                        <Select onChange={(e)=> cambiaImagenTrabajos(e)} id="tipo_de_objeto">
                            <option hidden defaultValue>Selecciona un objeto</option>
                            {tipoDeObjeto.map(objeto =>
                            <option key={objeto} value={objeto}>{objeto}</option>
                            )};
                        </Select>
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Trabajo 1</label>
                        {agregarNuevaTarea1}
                        <Select onChange={(e)=>agregarBoton1(e)} id="trabajos">
                            <option hidden defaultValue>Selecciona trabajos a realizar</option>
                            {trabajos.map(trabajo =>
                            <option key={trabajo} value={trabajo}> {trabajo}
                            </option>)};
                        </Select>
                    </ArtefactoRenglon>
                    {segundoTrabajo}
                    <ArtefactoRenglon>
                        <label>Herrero asignado</label>
                        <Select /* onChange={(e)=>{modificaDemora(e)}} */ id="herrero_asignado">
                            <option hidden defaultValue>Selecciona el Herrero</option>
                            {tipoDeHerrero.map(herrero =>
                            <option key={herrero} value={herrero}>{herrero}</option>
                            )};
                        </Select>
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Fecha de entrega </label>
                        <p></p>
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Precio </label>
                        <p>{precioArtefacto} monedas de oro</p>
                    </ArtefactoRenglon>
                    
                    <button className="submit sheen" type="submit">Agregar encargo</button>
                </ArtefactoForm>
            </FormContainer>

        </div>
    );


}

export default PedidoReparacion