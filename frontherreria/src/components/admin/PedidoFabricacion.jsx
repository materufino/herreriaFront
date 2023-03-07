import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AdminNavBar from "./AdminNavBar";
import CartBackgroundImg from "../../Assets/cart-background.png"
import dayjs from "dayjs";
import axios from "axios";

const Button = styled.button`
background-color: #bd0900df;
font-size: 25px;
margin-left: 75px;
padding: 0px 10px;
color: white;
font-weight: 400;
`

const FormContainer = styled.div`
display: flex;
margin-bottom: 30px;
flex-direction: column;
align-items: center;
width: 100%;
gap: 30px;
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

const FormTitle = styled.div`
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

const DivNoMostrar = styled.div`
display: none;
`

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

//para saber qué especialidades hay
const todasLasEspecialidades = listaArtefactos.map(artefacto => artefacto.especialidad)
//para remover especialidades duplicadas
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
const especialidades = todasLasEspecialidades.filter(onlyUnique).sort();
const tiposDeObjetos = listaArtefactos.map(artefacto => artefacto.nombre);

//Trabajos para realizar
const arrNombresTrabajosParaRealizar = arrTrabajosParaRealizar.map(trabajo => trabajo.nombre)

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

const PedidoFabricacion = () => {
    const [tipoDeObjeto, setTipoDeObjeto] = useState([])
    const [nombreCliente, setNombreCliente] = useState('')
    const [nombreArtefacto, setNombreArtefacto] = useState('ENCARGO')
    const [fechaEntrega, setFechaEntrega] = useState(dayjs().format("DD/MM/YYYY - hh:mm A", 'es'))
    const [horasPorTrabajo, setHorasPorTrabajo] = useState(0)
    const [tipoDeHerrero, setTipoDeHerrero] = useState([])
    const [horasDeTrabajo, setHorasDeTrabajo] = useState(0)
    const [precioArtefacto, setPrecioArtefacto] = useState(0)
    const [trabajosSeleccionados, setTrabajosSeleccionados] = useState([null, null, null])
    const [trabajos, setTrabajos] = useState([])
    const [imagen, setImagen] = useState('yellow-image')
    const [arrHerreros, setArrHerreros] = useState([]);
    const [arrClientes, setArrClientes] = useState([]);
    const [statusTask1, setStatusTask1] = useState('')
    const [statusTask2, setStatusTask2] = useState('')
    const [statusTask3, setStatusTask3] = useState('')
    const [horasTrabajo, setHorasTrabajo] = useState(0)
    let modificador
    let valor
    let tardanza
    useEffect(() => { precio(); demora() }, [trabajosSeleccionados])

    // GET HERREROS
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3000/api/users")
            setArrHerreros(res.data)
        }
        fetchData();
    }, [])

    function compareRango(a, b) {
        if (a.rango < b.rango) {
            return -1;
        }
        if (a.rango > b.rango) {
            return 1;
        }
        return 0;
    }

    function compareNombre(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }

    const todosLosHerreros = arrHerreros.map(herrero => herrero.name)
    const todosLosHerrerosPorId = arrHerreros.map(herrero => herrero.id)
    //Herreros por especialidades
    const arrHerrerosArmas = arrHerreros.filter(herrero => herrero.category === "Armas")
    const herrerosArmas = arrHerrerosArmas.map(herrero => ({ name: herrero.name, rango: herrero.rango, id: herrero.id, surname: herrero.surname })).sort(compareRango)
    const arrHerrerosArmaduras = arrHerreros.filter(herrero => herrero.category === "Armaduras")
    const herrerosArmaduras = arrHerrerosArmaduras.map(herrero => ({ name: herrero.name, rango: herrero.rango, id: herrero.id, surname: herrero.surname })).sort(compareRango)
    const arrHerrerosHerramientas = arrHerreros.filter(herrero => herrero.category === "Herramientas")
    const herrerosHerramientas = arrHerrerosHerramientas.map(herrero => ({ name: herrero.name, rango: herrero.rango, id: herrero.id, surname: herrero.surname })).sort(compareRango)

    //GET CLIENTES
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3000/api/clients")
            setArrClientes(res.data)
        }
        fetchData();
    }, [])

    const cambiaNombreCliente = (e) => {
        const clientesPorNombre = arrClientes.map(client => ({ name: client.name, surname: client.surname, id: client.id }))
        const idCliente = parseInt(e.target.value);
        const clientesPorId = arrClientes.map(client => client.id)
        const index = clientesPorId.indexOf(idCliente)
        const nombreCliente = clientesPorNombre[index].name + " " + clientesPorNombre[index].surname
        setNombreCliente(nombreCliente)
    }



    const modificaDemora = (e) => {
        const index = todosLosHerrerosPorId.indexOf(parseInt(e.target.value))
        const rango = arrHerreros[index].rango

        if (rango == 'Aprendiz') {
            modificador = 1.5
        } else if (rango == 'Oficial') {
            modificador = 1
        } else if (rango == 'Maestro') {
            modificador = 0.5
        }
        const demoraTotal = horasTrabajo * modificador
        setHorasPorTrabajo(demoraTotal)
        setFechaEntrega(dayjs().add(demoraTotal, "hour").format("DD/MM/YYYY - hh:mm A", 'es'))
    }


    const cambiaTipoDeObjeto = (e) => {
        switch (e.target.value) {
            case 'Armas': setTipoDeObjeto([...armas])
                setTipoDeHerrero([...herrerosArmas]);
                break;
            case 'Armaduras': setTipoDeObjeto([...armaduras])
                setTipoDeHerrero([...herrerosArmaduras]);
                break;
            case 'Herramientas': setTipoDeObjeto([...herramientas])
                setTipoDeHerrero([...herrerosHerramientas]);
                break;
            default:
        }
    }


    const demora = (e) => {
        if (e) {
            const index = tiposDeObjetos.indexOf(e.target.value)
            const tiempo_demora = (listaArtefactos[index].demora_artefacto_nuevo)
            return tiempo_demora
        } else { return 0 }
    }

    const precio = (e) => {
        if (e) {
            const index = tiposDeObjetos.indexOf(e.target.value)
            const precio = listaArtefactos[index].precio_artefacto_nuevo
            return precio
        } else { return 0 }
    }

    const cambiaImagenTrabajos = (e) => {
        setImagen(e.target.value.toLowerCase())
        setNombreArtefacto(e.target.value.toUpperCase())
        setHorasTrabajo(demora(e))
        setPrecioArtefacto(precio(e))
    }


    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const creaOrden = async (values) => {
        values.price = precioArtefacto
        values.end_date = fechaEntrega
        values.sub_task1 = null
        values.sub_task2 = null
        values.sub_task3 = null
        values.sub_task1_status = null
        values.sub_task2_status = null
        values.sub_task3_status = null
        const res = await axios.post('http://localhost:3000/api/orders', values);
        if (res.data.fatal) {
            alert('Error en el server');
        } else {
            alert('Encargo creado correctamente');
            navigate('/menu/admin');
        }
    }

    const registraCliente = async (values) => {
        const res = await axios.post('http://localhost:3000/api/clients', values);
        if (res.data.fatal) {
            alert('Error en el server');
        } else {
            alert('Cliente registrado exitosamente');
            navigate('/pedidos/nuevo/fabricacion');
        }
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3000/api/clients")
            setArrClientes(res.data)
        }
        fetchData();
    }

    return (
        <div>
            <AdminNavBar />

            <FormContainer>
                <Encabezado>
                    FABRICAR UN ARTEFACTO
                </Encabezado>

                <ArtefactoForm onSubmit={handleSubmit(registraCliente)}>
                    <FormTitle style={{ width: "100%", backgroundColor: "#ffd770", fontSize: "18px" }} >
                        CLIENTE
                    </FormTitle>
                    <ArtefactoRenglon>
                        <label>Nombre</label>
                        <Input type="text" {...register('name')} />
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Apellido</label>
                        <Input type="text" {...register('surname')} />
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Documento</label>
                        <Input type="text" {...register('dni')} />
                    </ArtefactoRenglon>
                    <button style={{ marginLeft: "210px" }} className="submit sheen" type="submit">Registrar cliente</button>
                </ArtefactoForm>

                <ArtefactoForm onSubmit={handleSubmit(creaOrden)}>
                    <FormTitle style={{ width: "100%", backgroundColor: "#ffd770", fontSize: "18px" }} >
                        ARTEFACTO
                    </FormTitle>
                    <ArtefactoRenglon>
                        <ArtefactoTitle>
                            {nombreArtefacto} {nombreCliente ? "DE" : ""} {nombreCliente.toUpperCase()}
                        </ArtefactoTitle>
                        <ArtefactoImg src={require(`../../Assets/${imagen}.jpg`)}  >
                        </ArtefactoImg>
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Cliente</label>
                        <Select {...register('client_id')} onChange={(e) => { cambiaNombreCliente(e) }}>
                            <option hidden defaultValue >Selecciona un cliente</option>
                            {arrClientes.sort(compareNombre).map(cliente =>
                                <option key={cliente.id} className={cliente.name} value={cliente.id}>{cliente.name} {cliente.surname}
                                </option>
                            )};
                        </Select>
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Especialidad</label>
                        <Select {...register('product_type')} onChange={(e) => { cambiaTipoDeObjeto(e) }} id="especialidad">
                            <option hidden defaultValue>Selecciona una categoría</option>
                            {especialidades.map(especialidad =>
                                <option key={especialidad} value={especialidad}>{especialidad}</option>
                            )};
                        </Select>
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Tipo de objeto</label>
                        <Select {...register('product_subtype')} onChange={(e) => cambiaImagenTrabajos(e)} id="tipo_de_objeto">
                            <option hidden defaultValue>Selecciona un objeto</option>
                            {tipoDeObjeto.map(objeto =>
                                <option key={objeto} value={objeto}>{objeto}</option>
                            )};
                        </Select>
                    </ArtefactoRenglon>
                    {/*  <ArtefactoRenglon>
                        <label>Trabajo 1</label>
                        <Select {...register('sub_task1')} onChange={(e) => agregarBoton1(e)} id="trabajo1">
                            <option hidden defaultValue>Selecciona trabajos a realizar</option>
                            {trabajos.map(trabajo =>
                                <option key={trabajo} value={trabajo}> {trabajo}
                                </option>)};
                        </Select>
                    </ArtefactoRenglon>
                    {trabajosSeleccionados[0] !== null && (
                        <ArtefactoRenglon>
                            <label>Trabajo 2</label>
                            <Select {...register('sub_task2')} onChange={(e) => { agregarBoton2(e) }} id="trabajo2">
                                <option hidden defaultValue></option>
                                {trabajos.filter(t => {
                                    return t !== trabajosSeleccionados[0]
                                }
                                ).map(trabajo =>
                                    <option key={trabajo} value={trabajo}> {trabajo}
                                    </option>)};
                            </Select>
                        </ArtefactoRenglon>
                    )}
                    {trabajosSeleccionados[1] !== null && (
                        <ArtefactoRenglon>
                            <label>Trabajo 3</label>
                            <Select {...register('sub_task3')} onChange={(e) => { agregarBoton3(e) }} id="trabajo3">
                                <option hidden defaultValue></option>
                                {trabajos.filter(t => {
                                    return t !== trabajosSeleccionados[0] && t !== trabajosSeleccionados[1]
                                }
                                ).map(trabajo =>
                                    <option key={trabajo} value={trabajo}> {trabajo}
                                    </option>)};
                            </Select>
                        </ArtefactoRenglon>
                    )} */}
                    <ArtefactoRenglon>
                        <label>Herrero asignado</label>
                        <Select  {...register('user_id')} onChange={(e) => { modificaDemora(e) }} id="herrero_asignado">
                            <option hidden defaultValue>Selecciona el Herrero</option>
                            {tipoDeHerrero.map(herrero =>
                                <option key={herrero.id} value={herrero.id}>{herrero.rango} {herrero.name} {herrero.surname} </option>
                            )};
                        </Select>
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Tiempo de trabajo</label>
                        <p>{horasPorTrabajo}hs</p>
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Fecha de entrega</label>
                        <Input type="text" value={fechaEntrega} disabled />
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Precio </label>
                        <Input type="number" style={{ width: "30px", marginLeft: "115px" }} value={precioArtefacto} disabled />
                        <p>monedas de oro</p>
                    </ArtefactoRenglon>

                    <DivNoMostrar>
                        <ArtefactoRenglon>
                            <label>Tarea</label>
                            <Input readOnly type="text" {...register('task')} value="Fabricación" />
                        </ArtefactoRenglon>
                        <ArtefactoRenglon>
                            <label>Estado de orden</label>
                            <Input readOnly type="text" {...register('order_status')} value="En proceso" />
                        </ArtefactoRenglon>
                        <ArtefactoRenglon>
                            <label>Fecha de inicio</label>
                            <Input readOnly type="text" {...register('start_date')} value={dayjs().format("DD/MM/YYYY - hh:mm A", 'es')} />
                        </ArtefactoRenglon>
                        <ArtefactoRenglon>
                            <label>Comentarios</label>
                            <Input readOnly type="text" {...register('obs')} value="" />
                        </ArtefactoRenglon>
                        <ArtefactoRenglon>
                            <label>Estado tarea 1</label>
                            <Input readOnly type="text" value={statusTask1} />
                        </ArtefactoRenglon>
                        <ArtefactoRenglon>
                            <label>Estado tarea 2</label>
                            <Input readOnly type="text" value={statusTask2} />
                        </ArtefactoRenglon>
                        <ArtefactoRenglon>
                            <label>Estado tarea 3</label>
                            <Input readOnly type="text" value={statusTask3} />
                        </ArtefactoRenglon>
                    </DivNoMostrar>
                    <button style={{ marginLeft: "200px" }} className="submit sheen" type="submit">Agregar encargo</button>
                </ArtefactoForm>
            </FormContainer>

        </div >
    );
}

export default PedidoFabricacion
