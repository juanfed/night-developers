import 'styles/login.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login_body">
            <div className="main">
                <div className="login_body">
<<<<<<< HEAD
                    <div className="contenedor1">
                        <div className="caja_atras">
                            <div className="caja_atras_regist">
                                <h3>¿Aún no tienes una cuenta?</h3>
                                <p>Regístrate para que puedas iniciar sesión</p>
                                <Link to="/registro"><button id="btn_registrarse">Regístrarse</button></Link>
                            </div>
=======
                <div className="contenedor1">
                    <div className="caja_atras">
                        <div className="caja_atras_regist">
                            <h3>¿Aún no tienes una cuenta?</h3>
                            <p>Regístrate para que puedas iniciar sesión</p>
<<<<<<< HEAD
                            <Link to="/registro"><button id="btn_registrarse">Regístrarse</button></Link>
=======
                            <button id="btn_registrarse">Regístrarse</button>
>>>>>>> d93f07eb409ac17114c34f4f3d7e4837672bef2d
                        </div>
>>>>>>> e0dc71b1264400c744782e81819073bfb5d4c04c

                            <div className="contenedor_logi_regist">
                                <form action="" className="formulario_logi">
                                    <h2>Iniciar Sesión</h2>
                                    <input type="text" placeholder="Correo Electronico" />
                                    <input type="password" placeholder="Contraseña" />
                                    <Link to="/admin"><button>Entrar</button></Link>
                                    <button>Google</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login

