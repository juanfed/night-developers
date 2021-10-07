import 'styles/registro.css';
function Registro(){
    return(
        <div className="registroCaja">
            <div className="formularioTitulo">
                <h2>Formulario de registro</h2>
            </div>

            <div className="formularioRegistro">
                <form action="">
                    <div className="formularioRegistro-caja">
                        <label for="nombreRegistro">Nombre: </label>
                        <input type="text"  id="nombreRegistro"/>
                    </div>
                    
                    <div className="formularioRegistro-caja">
                    <label for="apellidoRegistro">Apellido</label>
                    <input type="text" id="apellidoRegistro"/>
                    </div>

                    <div className="formularioRegistro-caja">
                    <label for="correoRegistro">Correo</label>
                    <input type="email" id="correoRegistro" />
                    </div>
                    
                    <div className="formularioRegistro-caja">
                    <label for="contraseñaRegistro">Contraseña</label>
                    <input type="password" id="contraseñaRegistro" />
                    </div>

                    <div className="formularioRegistro-caja">
                    <label for="contraseñaRegistro2">Confirmar contraseña</label>
                    <input type="password" id="contrseñaRegistro2"/>
                    </div>
                    
                    <div className="formularioRegistro-caja">
                    <label for="botonRegistro">Rol</label> <br />
                    </div>
                    
                    
                    <select>
                        <option value="Administrador">Administrador</option>
                        <option>Vendedor</option>
                        <option>Usuario</option>
                    </select>
                </form>
            </div>
        </div>
    )
}

export default Registro;