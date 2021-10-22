import react from "react";
import 'styles/usuario.css';
import { Link } from 'react-router-dom';

const usuario =()=>{
    return(
        <div className="editar_informacion">
            <div className="formu_titulo">
                <h3>Editar Informacion</h3>
            </div>

            <div className="formu_edit">
                <form action="">
                    <div className="formu_edit_usuario">
                    <p>Selecione un Usuario</p>
                        <select id="selecione_nombre" class="caja">
                            <option value="">Usuario</option>
                            <option value="Juan fernando">Juan Fernando</option>
                            <option value="Diego Hernandez">Diego Hernandez</option>
                        </select>

                    </div>

                    <div className="formu_edit_caja">
                        <label for="NombreEdit">Nombre:</label>
                        <input type="text" id="NombreEdit" required/>

                    </div>

                    <div className="formu_edit_caja">
                        <label for="ApellidoEdit">Apellido:</label>
                        <input type="text" id="ApedilloEdit" required/>

                    </div>

                    <div className="formu_edit_caja">
                        <label for="CorreoEdit">Correo:</label>
                        <input type="text" id="CorreoEdit" required/>

                    </div>

                    <div className="formu_edit_caja">
                        <label for="ContraseñaEdit">Contraseña:</label>
                        <input type="text" id="ContraseñaEdit" required/>

                    </div>
                    
                    <div className="formu_edit_usuario2">
                    <p>Rol</p>
                        <select id="selecione_nombre" class="caja">
                            <option value="">Administrador</option>
                            <option value="Juan fernando">Usuario</option>
                            <option value="Diego Hernandez">Vendedor</option>
                        </select>

                    </div>


                    

                    

                </form>

                <div>
                        <button type="button"className="boton_modif" >Enviar</button>
                        <Link to="/login"><button type="button"className="boton_modif2" >Cancelar</button></Link>

                    </div>


            </div>


        </div>
    );
}

export default usuario;