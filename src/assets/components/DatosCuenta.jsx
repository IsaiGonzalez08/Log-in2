import '../style/DatosCuenta.css'
import Titulo from '../Atomos/Titulo'
import InputC from '../Atomos/InputC';
import BtnRegistrar from '../Atomos/BtnRegistrar';

import {useState} from 'react'

function DatosCuenta(){
    const [correoElectronico, setCorreoElectronico] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeCorreoElectronico = (event) => setCorreoElectronico(event.target.value)
    const handleChangePassword = (event) => setPassword(event.target.value)


    const handleBlur = (event) => {
        fetch('http://44.201.115.90/user/usernameValidate/'+correoElectronico)
        .then(response => response.json())
        .then (data => data.status ? alert('Ya tienes una cuenta creada con ese correo') : '')
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                correoElectronico: correoElectronico,
                password: password,
            })
        }
        fetch('http://44.201.115.90/user', option)
        .then (response => response.json())
        .then ( data => data.status ? alert('Registro exitoso') : alert('Ha ocurrido un error'))
        .catch (err => console.log(err))
    }
    return(
        <>
        <div className="contenedor">
        <div className="container">
        <form onSubmit={handleSubmit}>
            <div className='titulo'>
            <Titulo title={"Iniciar Sesión"}></Titulo>
            </div>
            <div className='inputs'>
            <InputC clase={"nombreU"} type={"email"} text={"Correo Electronico"} val={correoElectronico} onChange={handleChangeCorreoElectronico}></InputC>  
            </div>
            <div className="inputs">
            <InputC clase={"contra"} type={"password"} text={"Contraseña"} val={password} onChange={handleChangePassword}></InputC>
            </div>
            <div className='crearCuenta'>
            <p>¿Aún no tines cuenta? <a href="">Crea una aquí</a></p>
            </div>
            <div className='btnRegistrar'>
            <BtnRegistrar></BtnRegistrar>
            </div>
        </form>   
        </div>
        </div>
        </>
    )
}
export default DatosCuenta;
/* 
function DatosCuenta(){
    return(
        <>
        <form className="container">
        <div className='titulo'>
            <Titulo title={"Iniciar Sesión"}></Titulo>
            </div>
            <div className='inputs'>
            <InputC clase={"nombreU"} type={"email"} text={"Correo Electronico"}></InputC>  
            </div>
            <div className="contras">
            <InputC clase={"contra"} type={"password"} text={"Contraseña"}></InputC>
            </div>
            <div className='crearCuenta'>
            <p>¿Aún no tines cuenta? <a href=""> Crea un aquí</a></p>
            </div>
            <div className='btnRegistrar'>
            <BtnRegistrar></BtnRegistrar>
            </div>
        </form>
        </>
    )
}

export default DatosCuenta; */