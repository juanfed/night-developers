import 'styles/registro.css';
import { Link } from 'react-router-dom';
import React from 'react'

const registro = () => {
    return (
        <div className="registroCaja">
            <div className="formularioTitulo">
                <h2>Registro De Datos</h2>

            </div>

            <div className="formularioRegistro">
                <form action="">
                    <div className="formularioRegistro-caja">
                        <label for="nombreRegistro">Nombre: </label>
                        <input type="text" id="nombreRegistro" placeholder="Nombre" required />
                    </div>

                    <div className="formularioRegistro-caja">
                        <label for="apellidoRegistro">Apellido</label>
                        <input type="text" id="apellidoRegistro" placeholder="Apellido" required />
                    </div>

                    <div className="formularioRegistro-caja">
                        <label for="correoRegistro">Correo</label>
                        <input type="email" id="correoRegistro" placeholder="correo" required />
                    </div>

                    <div className="formularioRegistro-caja">
                        <label for="contraseñaRegistro">Contraseña</label>
                        <input type="password" id="contraseñaRegistro" placeholder="Contraseña" required />
                    </div>

                    <div className="formularioRegistro-caja">
                        <label for="contraseñaRegistro2">Confirmar contraseña</label>
                        <input type="password" id="contrseñaRegistro2" placeholder="Contraseña" required />
                    </div>

                    <div className="formularioRegistro-caja">
                        <label for="botonRegistro">Rol</label>
                    </div>


                    <select>
                        <option value="Administrador">Administrador</option>
                        <option>Vendedor</option>
                        <option>Usuario</option>
                    </select>

                    <div >
                        <Link to="/login"><button className="botonRegistrar">Enviar</button></Link>
                        <Link to="/login"><button className="botonRegistrar">Cancelar</button></Link>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default registro
