import 'styles/registro.css';
function Registro(){
    return(
        <div className="registroCaja">
            <div className="formularioTitulo">
                <h2>Formulario de registro</h2>
            </div>

            <div className="formularioRegistro">
                <form action="">
                    <label htmlFor="nombre">Nombre: </label>
                    <input type="text" />
                    <label htmlFor="apellido"></label>
                    <input type="text" />
                    <label htmlFor="contraseña"></label>
                    <input type="password" />
                </form>
            </div>
        </div>
    )
}

export default Registro;