import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AdminNavBar from "./AdminNavBar";
import axios from "axios";

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

const Encabezado = styled.h1`
font-size: 50px;
font-family: 'Rakkas', cursive;
margin: 70px;
color: #3a1603;
`

const HerreroRegistro = () => {

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    /*     const registraHerrero = async (values) => {
            const res = await axios.post('http://localhost:3000/api/users/register', values);
            if (res.data.fatal) {
                alert('Error en el server');
            } else {
                alert('Herrero registrado correctamente');
                navigate('/menu/admin');
            } */

    return (
        <div>
            <AdminNavBar />

            <FormContainer>
                <Encabezado>
                    REGISTRAR UN NUEVO HERRERO
                </Encabezado>

                <ArtefactoForm /* onSubmit={handleSubmit(registraHerrero)} */>
                    <ArtefactoRenglon>
                        <label>Nombre</label>
                        <Input {...register('name')} type="text" />
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Apellido</label>
                        <Input {...register('surname')} type="text" />
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Usuario</label>
                        <Input {...register('username')} type="text" />
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Contraseña</label>
                        <Input {...register('password')} type="password" />
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Especialidad</label>
                        <Select {...register('category')} id="especialidad">
                            <option hidden defaultValue>Selecciona una categoría</option>
                            <option value="Armas">Armas</option>
                            <option value="Armaduras">Armaduras</option>
                            <option value="Herramientas">Herramientas</option>
                        </Select>
                    </ArtefactoRenglon>
                    <ArtefactoRenglon>
                        <label>Rango</label>
                        <Select {...register('range')} id="especialidad">
                            <option hidden defaultValue>Selecciona una categoría</option>
                            <option value="Aprendiz">Aprendiz</option>
                            <option value="Oficial">Oficial</option>
                            <option value="Maestro">Maestro</option>
                        </Select>
                    </ArtefactoRenglon>

                    <button className="submit sheen" type="submit">Registrar Herrero</button>
                </ArtefactoForm>
            </FormContainer>
        </div>
    );
}
/* } */
export default HerreroRegistro