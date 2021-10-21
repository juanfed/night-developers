import 'styles/gestion.css';

import React, { useState, useEffect } from 'react';


const Gestion = () => {

    const GestionUsuarios = () => {
        return (
            <div className="carUser">
                <div className="carUser-img">
                    <i className='bx bx-user-circle' ></i>
                </div>
                <div className="carUser-formulario">
                    <form action="">
                        <div className="carUser-datos">
                            <label for="nombre">Nombre</label>
                            <input type="text" id="nombre" placeholder="Ingrese el nombre" />
                        </div>
    
                        <div className="carUser-datos">
                            <p>
                                Rol: <br />
                                <select name="Rol">
                                    <option >Administrador</option>
                                    <option>Vendedor</option>
                                </select>
                            </p>
                        </div>
    
                        <div className="carUser-datos">
                            <p>
                                Estado: <br />
                                <select name="Rol">
                                    <option >Pendiente</option>
                                    <option>Autorizado</option>
                                    <option>No Autorizado</option>
                                </select>
                            </p>
                        </div>
    
                    </form>
                </div>
                <div className="carUser-modificar">
                    <button className="botonCarUser">Agregar</button>
                    <button className="botonCarUser">Eliminar</button>
                </div>
            </div>
        )
    }
    const VerTabla = () => {
        return(
            <div className="tablaUsuarios">
                    <table className="tabla--Usuarios">
                        <tr>
                            <th >Nombre </th>
                            <th >Rol</th>
                            <th >Correo</th>
                            <th >Estado</th>
                        </tr>
    
                        <tr>
                            <td>Juan Fernando</td>
                            <td >Administrador</td>
                            <td >Juanfed12345@gmail.com</td>
                            <td>Autorizado</td>
                        </tr>
    
                        <tr>
                            <td>Cristian Camilo</td>
                            <td>Vendedor</td>
                            <td>CristianCami@outlook.com</td>
                            <td>Pendiente</td>
                        </tr>
                    </table>
                </div>
        )
    
    
    }

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [titulo, setTitulo] = useState("Agregar usuario");

    useEffect(() => {
        if (mostrarTabla) {
            setTitulo("Agregar usuario");
        } else {
            setTitulo("Ver lista de usuarios");
        }
    }, [mostrarTabla]);

    return (
        <div id="contenido-gestion">
            <center>
                <h2 onClick={() => setMostrarTabla(!mostrarTabla)}>{titulo}</h2>
                <br />
                <div>
                    {mostrarTabla ? (<VerTabla/>) : (<GestionUsuarios/>) }
                </div>
            </center>
            
            
        </div>
    )
}

export default Gestion;

