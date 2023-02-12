import styled from "styled-components";

const Container = styled.div`
    background-color: #fdeeb0;
    border: 1px solid #3a1603;
    border-radius: 10px;
    padding: 20px;
    width: 20%;
    display: flex;
    flex-direction: column;
    font-family: 'Alegreya Sans', sans-serif;
    font-size: 20px;
    color: #3a1603;
    line-height: 1p;
    gap: 15px;
`

const CardArtefacto = ({nombre, categoria_artefacto, especialidad, imagen, precio_artefacto_nuevo, demora_artefacto_nuevo})=> {
    return (
        <Container>
            <img src={require(`../Assets/${imagen}`)}/>
            <h3 className="font-title">{nombre}</h3>
            <p>Categoría del artefacto: {categoria_artefacto.toUpperCase()}</p>
            <p>Especialidad: {especialidad.toUpperCase()} </p>
            <p>Precio de artefacto nuevo: {precio_artefacto_nuevo} M.O.</p>
            <p>Demora en fabricación: {demora_artefacto_nuevo} horas</p>                       
        </Container>
    )
}

export default CardArtefacto;
