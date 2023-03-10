import styled from "styled-components";
import HerreroNavBar from "./HerreroNavBar";
import AceroImg from '../../Assets/acero.png'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100vh;
`

const Encabezado = styled.h1`
font-size: 50px;
font-family: 'Rakkas', cursive;
margin-top: 40px;
margin-bottom: 40px;
color: #3a1603;
text-align: center;
`

const ImagenAcero = styled.img`
width: 40%;
height: auto;
margin-bottom: 20px;
`

const Parrafo = styled.p`
font-size: 25px;
margin-bottom: 20px;
width: 40%;
`

const Investigacion = () => {
    return (
        <div>
            <HerreroNavBar />
            <Container>
                <Encabezado>
                    INVESTIGACIÓN DEL MAESTRO RELIAN OX
                </Encabezado>
                <Parrafo>
                    En el siguiente texto explicaré un poco el origen accidental de este nuevo metal mucho más resistente y letal.
                </Parrafo>
                <Parrafo>
                    He estado intentando mejorar el hierro calentándolo a temperaturas más elevadas de lo normal y luego enfriándolo de manera brusca para no darle tiempo al metal a ponerse cómodo. De esa manera, el mismo se mantiene en estado de alerta y está siempre preparado para la batalla. Lo tengo comprobado, he visto dagas de este nuevo metal de hierro forjado destruir espadas largas de hierro de un simple impacto.
                </Parrafo>
                <ImagenAcero src={AceroImg} />
                <Parrafo>
                    Siguiendo los pasos que se encuentran en este instructivo, se podrá realizar de forma inequívoca el nuevo hierro forjado capaz de destruir cualquier artefacto de hierro que se cruce en su camino. He visto a algunos llamar a mi nuevo metal "acero", así que me pareció un buen nombre. Pero todo el resto de la historia lo conocerá como el misterioso mineral secreto de Relian.
                </Parrafo>
                <Parrafo>
                    El Rey Teodorico debería estar muy feliz de contar con un herrero de mi nivel en sus tierras. Qué hombre afortunado es.
                </Parrafo>
                <div style={{ display: "flex", justifyContent: "flex-end" }} >
                    <Parrafo style={{ width: "100%" }}>
                        Maestro Relian Ox
                    </Parrafo>
                </div>
            </Container >
        </div >
    );
}

export default Investigacion;