import AdminNavBar from "./AdminNavBar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import MenuOptionBackground from "../../Assets/menu-option-background.png"
import MenuOptionBackgroundHover from "../../Assets/menu-option-background-hover.png"
import { useState } from "react";

const arrOrdenes = [
    {
        id: 1,
        task: "Reparación",
        product_type: "Armas",
        product_subtype: "Espada larga",
        order_status: "En proceso",
        start_date: "06/03/2023 - 12:00hs",
        end_date: "09/03/2023 - 19:00hs",
        price: "12",
        obs: "Lorem ipsum dolor sit amet consectetur, adipisicing eaaaaaa aaaaaaaaaaaa aaaaaaaaaaa aaaaaaad asdasdasd asdasjgdashgdj ipsum dolor sit amet consectetur, adipisicing eaaaaaa aaaaaaaaaaaa aaaaaaaaaaa aaaaaaad asdasdasd asdasjgda asgdjasgjgdas gdasgdas gdjasgh gdasjdglit. Deserunt earum repellendus eius, impedit reiciendis accusamus!",
        client_id: "1",
        user_id: "1",
        sub_task1: "Afiladura de hoja",
        sub_task2: "Cambio de empuñadura",
        sub_task3: "Engrasado de hoja",
        sub_task1_status: "Terminado",
        sub_task2_status: "En proceso",
        sub_task3_status: "En espera",
        product_id: "15"
    },
    {
        id: 2,
        task: "Fabricación",
        product_type: "Armaduras",
        product_subtype: "Cota de mallas",
        order_status: "En proceso",
        start_date: "06/03/2023 - 12:00hs",
        end_date: "09/03/2023 - 19:00hs",
        price: "16",
        obs: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt earum repellendus eius, impedit reiciendis accusamus!",
        client_id: "4",
        user_id: "4",
        sub_task1: "Arreglo de abolladuras",
        sub_task2: "Recambio de anillas",
        sub_task3: "",
        sub_task1_status: "Terminado",
        sub_task2_status: "En proceso",
        sub_task3_status: "",
        product_id: "20"
    },
    {
        id: 2,
        task: "Reparación",
        product_type: "Herramientas",
        product_subtype: "Pico de mineria",
        order_status: "En proceso",
        start_date: "06/03/2023 - 12:00hs",
        end_date: "09/03/2023 - 19:00hs",
        price: "9",
        obs: "",
        client_id: "9",
        user_id: "7",
        sub_task1: "Cambio de empuñadura",
        sub_task2: "Afilado",
        sub_task3: "",
        sub_task1_status: "Terminado",
        sub_task2_status: "En proceso",
        sub_task3_status: "",
        product_id: "30"
    },
]

const Encabezado = styled.h1`
font-size: 50px;
font-family: 'Rakkas', cursive;
margin: 70px;
color: #3a1603;
`

const FormContainer = styled.div`
display: flex;
margin-bottom: 30px;
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
align-items: center;
width: 400px;
gap: 20px;
`

const CardHerrero = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: flex-start;
width: 450px;
height: 700px;
background-image: url(${MenuOptionBackground});
background-size: cover;
gap: 20px;
padding-left: 150px;
:hover{
    background-image: url(${MenuOptionBackgroundHover});
    background-size: cover;
    text-shadow: 0 0 0.2em #101010, 0 0 0.2em #050504,0 0 0.2em #0e0d0d;
/*     cursor: pointer; */
    color: #ffeda4;
}
`

const TituloCard = styled.h3`
font-size: 25px;
margin-top: 90px;
font-family: 'Rakkas', cursive;
`

const RenglonCard = styled.div`
width: 80%;
font-size: 25px;
display: flex;
justify-content: start;
gap: 10px;
`

const DivComentario = styled.div`
width: 370px;
margin-left: -50px;
background-color: #948578;
border-radius: 10px;
height: auto;
position: absolute;
bottom: 110px;
z-index: 3;
font-size: 20px;
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
`

const CruzButton = styled.button`
position:absolute;
right: 10px;
top: 10px;
background-color: #e07f3a;
`

const PedidoEnCurso = () => {


    const [comentarios, setComentarios] = useState('')

    const asignaImagen = (subtype) => {
        return require(`../../Assets/${subtype.toLowerCase()}.jpg`)
    }

    const checkComentarios = (obs) => {
        if (obs) {
            return <div style={{ display: "Flex", gap: "20px" }}>
                <p>Sí</p>
                <button style={{ marginTop: "-10px" }} className="sheen" onClick={(e) => { mostrarComentario(e, obs) }}>Mostrar</button>
            </div>
        } else { return <p>No</p> }
    }

    const mostrarComentario = (e, obs) => {
        e.preventDefault()
        setComentarios(<DivComentario>
            <CruzButton className="sheen" onClick={(e) => ocultarComentario(e)} >X</CruzButton>
            <img src={require(`../../Assets/comentario-herrero.jpg`)} alt="" />
            <p> "{obs}" </p>
        </DivComentario>)
    }

    const ocultarComentario = (e, obs) => {
        e.preventDefault()
        setComentarios('')
    }

    return (
        <div>
            <AdminNavBar />

            <FormContainer>
                <Encabezado>
                    PEDIDOS EN CURSO ({arrOrdenes.length})
                </Encabezado>

                <ArtefactoForm>
                    {arrOrdenes.map(orden =>
                        <CardHerrero>
                            <img style={{ position: "absolute", top: "130px", right: "120px", width: "80px", height: "80px" }} src={asignaImagen(orden.product_subtype)} alt="" />
                            <TituloCard>{orden.product_subtype.toUpperCase()} DE {orden.client_id.toUpperCase()}</TituloCard>
                            <RenglonCard>
                                <div>Tarea: </div>
                                <div style={{ fontWeight: "900" }}>{orden.task} </div>
                            </RenglonCard>
                            <RenglonCard>
                                <div>Estado: </div>
                                <div style={{ fontWeight: "900" }}>{orden.order_status} </div>
                            </RenglonCard>
                            <RenglonCard>
                                <div>Iniciada: </div>
                                <div style={{ fontWeight: "900" }}>{orden.start_date} </div>
                            </RenglonCard>
                            <RenglonCard>
                                <div>Entrega: </div>
                                <div style={{ fontWeight: "900" }}>{orden.end_date} </div>
                            </RenglonCard>
                            <RenglonCard>
                                <div>Precio: </div>
                                <div style={{ fontWeight: "900" }}>{orden.price} monedas de oro</div>
                            </RenglonCard>
                            <RenglonCard>
                                <div>Herrero asignado: </div>
                                <div style={{ fontWeight: "900" }}>{orden.user_id} </div>
                            </RenglonCard>
                            <RenglonCard>
                                <div>Tareas encargadas: </div>
                            </RenglonCard>
                            {orden.sub_task1 && <RenglonCard>
                                <div style={{ fontWeight: "900", fontSize: "20px", fontSize: "20px" }}>{orden.sub_task1}: </div>
                                <div style={{ fontWeight: "900", fontSize: "20px" }}>{orden.sub_task1_status} </div>
                            </RenglonCard>}
                            {orden.sub_task2 && <RenglonCard>
                                <div style={{ fontWeight: "900", fontSize: "20px" }}>{orden.sub_task2}: </div>
                                <div style={{ fontWeight: "900", fontSize: "20px" }}>{orden.sub_task2_status} </div>
                            </RenglonCard>}
                            {orden.sub_task3 && <RenglonCard>
                                <div style={{ fontWeight: "900", fontSize: "20px" }}>{orden.sub_task3}: </div>
                                <div style={{ fontWeight: "900", fontSize: "20px" }}>{orden.sub_task3_status} </div>
                            </RenglonCard>}
                            <RenglonCard>
                                <div>Tiene comentarios? </div>
                                <div style={{ fontWeight: "900" }}>{checkComentarios(orden.obs)} </div>
                            </RenglonCard>
                            {comentarios}
                        </CardHerrero>
                    )}
                </ArtefactoForm>
            </FormContainer>
        </div>
    );

}

export default PedidoEnCurso;