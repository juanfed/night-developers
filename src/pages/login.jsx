import'styles/login.css';

function Login(){
    return(
        <div>
            <body>
          <main>
                  <div className="contenedor1">
                       <div className="caja_atras">
                              <div className="caja_atras_regist">
                                  <h3>¿Aún no tienes una cuenta?</h3>
                                  <p>Regístrate para que puedas iniciar sesión</p>
                                  <button id="btn_registrarse">Regístrarse</button>
                              </div>
                             <div className="contenedor_logi_regist">
                                   <form action="" className="formulario_logi">
                                     <h2>Iniciar Sesión</h2>
                                     <input type="text" placeholder="Correo Electronico"/>
                                     <input type="password" placeholder="Contraseña"/>
                                     <button>Entrar</button>
                                     <button>Google</button>
                                   </form>
                             </div>
                      </div>




                  </div>

                  <button className="boton1">Inicio</button>

              </main>




          </body>




        </div>
    )
}

export default Login;
