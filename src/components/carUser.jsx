import 'styles/carUser.css';

function CarUsers(){
    return(
        <div id="contenido-gestion">
            <div className="carUser">
                <div className="carUser-img">
                    <i className='bx bx-user-circle' ></i>
                </div>
                <div className="carUser-formulario">
                    <form action="">
                        <div className="carUser-datos">
                            <label for="nombre">Nombre</label>
                            <input type="text" id="nombre" value="Juan Fernando" />
                        </div>

                        <div className="carUser-datos">
                            <label for="rol">Rol</label>
                            <input type="text" id="rol" value="Abministrador" />
                        </div>

                        <div className="carUser-datos">
                            <label for="estado">Estado</label>
                            <input type="text" id="estado" value="Autorizado" />
                            
                        </div>
                        
                    </form>
                </div>
                <div className="carUser-modificar">
                    <button>Modificar</button>
                </div>
            </div>
        </div>
        
    )
}
export default CarUsers;