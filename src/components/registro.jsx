import 'styles/registro.css';
import { Link } from 'react-router-dom';
function Registro(){
    return(
        <div className="registroCaja">
            <div className="formularioTitulo">
                <h2>Celu - Componentes</h2>
            </div>

            <div className="formularioRegistro">
                <form action="">
                    <div className="formularioRegistro-caja">
                        <label for="nombreRegistro">Nombre: </label>
                        <input type="text"  id="nombreRegistro" placeholder="Nombre" required/>
                    </div>
                    
                    <div className="formularioRegistro-caja">
                    <label for="apellidoRegistro">Apellido</label>
                    <input type="text" id="apellidoRegistro" placeholder="Apellido" required/>
                    </div>

                    <div className="formularioRegistro-caja">
                    <label for="correoRegistro">Correo</label>
                    <input type="email" id="correoRegistro" placeholder="correo" required/>
                    </div>
                    
                    <div className="formularioRegistro-caja">
                    <label for="contraseñaRegistro">Contraseña</label>
                    <input type="password" id="contraseñaRegistro" placeholder="Contraseña" required/>
                    </div>

                    <div className="formularioRegistro-caja">
                    <label for="contraseñaRegistro2">Confirmar contraseña</label>
                    <input type="password" id="contrseñaRegistro2" placeholder="Contraseña" required/>
                    </div>
                    
                    <div className="formularioRegistro-caja">
                    <label for="botonRegistro">Rol</label> <br />
                    </div>
                    
                    
                    <select>
                        <option value="Administrador">Administrador</option>
                        <option>Vendedor</option>
                        <option>Usuario</option>
                    </select>

                    <div className="botonRegistrar">
                        <span>Enviar</span>
                        <Link to="/"><span>Cancelar</span></Link>
                        
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Registro;