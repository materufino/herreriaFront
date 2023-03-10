import styled from "styled-components";
import axios from "axios";
import HerreroNavBar from "./HerreroNavBar";
import { useEffect, useState } from "react";
import MenuOptionBackground from "../../Assets/menu-option-background.png"
import MenuOptionBackgroundHover from "../../Assets/menu-option-background-hover.png"
import jwtDecode from "jwt-decode";
import NavBarBackground from '../../Assets/navbar-background.jpeg'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
    background-image: url(${NavBarBackground});
    background-size: contain;
width: 100%;
height: 100vh;
`

const Encabezado = styled.h1`
font-size: 50px;
font-family: 'Rakkas', cursive;
margin-top: 40px;
margin-bottom: 40px;
color: #ffeda4;
text-align: center;

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
gap:20px;

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
const Negrita = styled.span`
    font-weight: 900;
`

const TablonAnuncio = () => {

    const token = localStorage.getItem("token")
    const { user_name } = jwtDecode(token);
    const [arrHerreros, setArrHerreros] = useState([]);
    const [arrOrdenes, setArrOrdenes] = useState([]);

    //GET ORDENES
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3000/api/orders")
            setArrOrdenes((res.data))
        }
        fetchData();
    }, [])

    //GET HERREROS
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3000/api/users")
            setArrHerreros(res.data)
        }
        fetchData();
    }, [])

    const ordenesEnProceso = (arrOrdenes.filter(order => order.order_status == "En proceso")).length
    const ordenesFinalizadas = (arrOrdenes.filter(order => order.order_status == "Finalizado")).length
    const ordenesArmas = (arrOrdenes.filter(order => order.product_type == "Armas")).length
    const ordenesArmaduras = (arrOrdenes.filter(order => order.product_type == "Armaduras")).length
    const ordenesHerramientas = (arrOrdenes.filter(order => order.product_type == "Herramientas")).length
    const ordenesFabricacion = (arrOrdenes.filter(order => order.task == "Fabricación")).length
    const ordenesReparacion = (arrOrdenes.filter(order => order.task == "Reparación")).length
    const totalOrdenes = arrOrdenes.length

    const dineroInvertido = () => {
        const preciosDeEncargos = arrOrdenes.map(trabajo => trabajo.price)
        let total = preciosDeEncargos.reduce((a, b) => a + b, 0);
        return total
    }

    function earningsByBlacksmith(order) {
        let earnings = order.reduce((acc, line) => {
            let found = acc.findIndex(a => a.user_id === line.user_id);
            if (found > -1) {
                acc[found] = { user_id: acc[found].user_id, total: acc[found].total + line.price };
            } else {
                acc.push({ user_id: line.user_id, total: line.price });
            }
            return acc;
        }, [])
        return earnings;
    }

    function blacksmithWithMoreEarnings(earnings) {
        let winner = null;
        earnings.forEach(blacksmith => {
            if (winner) {
                winner = blacksmith.total > winner.total ? blacksmith : winner;
            } else {
                winner = blacksmith;
            }
        });
        return winner;
    }

    const earnings = earningsByBlacksmith(arrOrdenes)
    const winner = blacksmithWithMoreEarnings(earnings);

    const mostrarNombreHerrero = (id) => {
        if (arrHerreros.length > 0) {
            const herrerosPorNombre = arrHerreros.map(herrero => ({ name: herrero.name, surname: herrero.surname, id: herrero.id, rango: herrero.rango }))
            const HerrerosPorId = arrHerreros.map(herrero => herrero.id)
            const idHerrero = parseInt(id);
            const index = HerrerosPorId.indexOf(idHerrero)
            const nombreHerrero = herrerosPorNombre[index].rango + " " + herrerosPorNombre[index].name + " " + herrerosPorNombre[index].surname
            return nombreHerrero
        } else { return "esperando herrero" }
    }

    return (
        <div>
            <HerreroNavBar />
            <Container>
                <Encabezado>
                    TABLÓN DE ANUNCIOS
                </Encabezado>
                <OptionsContainer>
                    <OptionCard>
                        <h3 style={{ marginTop: "40px" }}>Ingresos</h3>
                        <CardDiv>El trabajo honesto y la transparencia de nuestro esfuerzo debe comenzar por nosotros mismos. Por eso es que queremos compartir con ustedes, el corazón de nuestra fragua, los ingresos que lleva la herrería.  </CardDiv>
                        <CardDiv>Gracias a vosotros, la herrería ha recaudado un total de <Negrita> {dineroInvertido()} monedas de oro.</Negrita></CardDiv>
                    </OptionCard>
                    <OptionCard>
                        <h3 style={{ marginTop: "40px" }}>Resumen de encargos</h3>
                        <CardDiv>
                            Total de pedidos: <Negrita>{totalOrdenes} </Negrita>
                        </CardDiv>
                        <CardDiv>
                        </CardDiv>
                        <CardDiv>
                            Fabricaciones: <Negrita>{ordenesFabricacion} </Negrita>
                        </CardDiv>
                        <CardDiv>
                            Reparaciones: <Negrita>{ordenesReparacion} </Negrita>
                        </CardDiv>
                        <CardDiv>
                        </CardDiv>
                        <CardDiv>
                            Armas: <Negrita>{ordenesArmas} </Negrita>
                        </CardDiv>
                        <CardDiv>
                            Armaduras: <Negrita> {ordenesArmaduras}</Negrita>
                        </CardDiv>
                        <CardDiv>
                            Herramientas: <Negrita>{ordenesHerramientas} </Negrita>
                        </CardDiv>
                    </OptionCard>
                    <OptionCard>
                        <h3 style={{ marginTop: "40px" }} >El recaudador</h3>
                        <CardDiv>El verdadero Guardián de la Chispa y máximo recaudador de la forja hasta el momento es el <Negrita>  {winner && mostrarNombreHerrero(winner.user_id)} </Negrita> con <Negrita> {winner && winner.total} </Negrita> monedas de oro aportadas a nuestras arcas.</CardDiv>
                        <CardDiv>¡Felicitemos al <Negrita> {winner && mostrarNombreHerrero(winner.user_id)} </Negrita> por su incansable esfuerzo!</CardDiv>
                    </OptionCard>
                    <OptionCard>
                        <h3 style={{ marginTop: "40px" }}>Encargos completados</h3>
                        <CardDiv>Gracias al esfuerzo de todos vosotros, podemos decir orgullosamente que somos la herrería más grande de todo el Reino Visigodo debido a que <Negrita> hemos realizado  {ordenesFinalizadas}  encargos y contamos con {ordenesEnProceso} más en proceso.</Negrita></CardDiv>
                        <CardDiv>¡El Rey Teodorico nos ha dado su bendición reduciendo a la mitad nuestros impuestos!</CardDiv>
                    </OptionCard>
                </OptionsContainer>
            </Container>
        </div>
    );
}

export default TablonAnuncio;