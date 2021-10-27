import react from "react";
import { Link } from 'react-router-dom';
import 'styles/inicio.css';

const Inicio =()=>{
    return(
        
     
        <div className="inicio_pag">
            <div>
            <img src="/Media/c1.png" alt="celulares"className="bannerinicio"  />
            </div>
        
        
            <div>
                <header>
                
                    <ul className="header_inicio">
                    <li>
                    <Link to="/login"><button className="inicio_login">login</button></Link>
                    </li>
                    <li>
                    <Link to="/registro"><button className="inicio_registro">registro</button></Link>
                    </li>
                    <li>
                        <div className="buscar_inicio">
                        <input placeholder="buscar"/>
                        <i class="fas fa-search"></i>
                        </div>
                    </li>
                </ul>
                </header>
            </div>
            <div>
                <main>
                <body>
                <div id="LayoutDiv3">
                    <section>
                        <div className="nomb_titulo">
                        <h1>Celulres</h1>
                        </div>
                        <ul className="contenedortodo">
                            <li className="separadorfot">
                             <div className="nombrecelular"> 
                                 redmi note 10
                              </div>
                            <div className="contedor_imagen">
                            <img src="/Media/celular1.jpg" alt="celulares" />
                            </div>                            
                            </li>

                            <li className="separadorfot">
                              <div className="nombrecelular" >
                                  google pixel 6 pro
                                </div>
                            <div className="contedor_imagen">
                            <img src="/Media/celular2.jpg" alt="celulares" />
                            </div>                          
                            </li>

                            <li className="separadorfot">
                              <div className="nombrecelular" >
                                    samsung s21 ultra
                                </div>
                            <div className="contedor_imagen">
                            <img src="/Media/celular3.jpg" alt="celulares" />
                            </div>                          
                            </li>

                            <li className="separadorfot">
                                <div className="nombrecelular" >
                                    iphone 13 pro max
                                </div>
                            <div className="contedor_imagen">
                            <img src="/Media/celular4.jpg" alt="celulares" />
                            </div>                          
                            </li>

                            <li className="separadorfot">
                               <div className="nombrecelular" >
                                     motorola edge plus
                                </div>
                            <div className="contedor_imagen">
                            <img src="/Media/celular5.jpg" alt="celulares" />
                            </div>                          
                            </li>

                            <li className="separadorfot">
                               <div className="nombrecelular" >
                                      huawei p50 pro
                                </div>
                            <div className="contedor_imagen">
                            <img src="/Media/celular6.jpg" alt="celulares" />
                            </div>                          
                            </li>
                        </ul>
                    </section>
                    <section>
                        <div className="nomb_titulo">
                            <h1>componentes</h1>
                        </div>
                        <ul className="contenedortodo" >
                        <li className="separadorfot">
                             <div className="nombrecelular"> 
                                 cargador tipo c
                              </div>
                            <div className="contedor_imagen">
                            <img src="/Media/comp1.jpg" alt="celulares" />
                            </div>                            
                            </li>

                            <li className="separadorfot">
                             <div className="nombrecelular"> 
                                 cable tipo c
                              </div>
                            <div className="contedor_imagen">
                            <img src="/Media/comp2.jpg" alt="celulares" />
                            </div>                            
                            </li>

                            <li className="separadorfot">
                             <div className="nombrecelular"> 
                                 vidrio templado
                              </div>
                            <div className="contedor_imagen">
                            <img src="/Media/comp3.jpg" alt="celulares" />
                            </div>                            
                            </li>

                            <li className="separadorfot">
                             <div className="nombrecelular"> 
                                 fundas
                              </div>
                            <div className="contedor_imagen">
                            <img src="/Media/comp4.jpg" alt="celulares" />
                            </div>                            
                            </li>

                            <li className="separadorfot">
                             <div className="nombrecelular"> 
                                 audifonos
                              </div>
                            <div className="contedor_imagen">
                            <img src="/Media/comp5.jpg" alt="celulares" />
                            </div>                            
                            </li>

                            <li className="separadorfot">
                             <div className="nombrecelular"> 
                                  smartwatch
                              </div>
                            <div className="contedor_imagen">
                            <img src="/Media/comp6.jpg" alt="celulares" />
                            </div>                            
                            </li>



                        </ul>
                    </section>
                    </div>
                    </body>  
                </main>
                <footer>
                    <ul className="footer1">
                        <li>Direccion: Calle 12 #45 Bogota</li>
                        <li>Telefono : 321765124</li>
                        <li>COPYRIGHT 2021</li>
                        <li>
                        <li>Redes Sociales</li>   
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-twitter"></i>
                        </li>

                    </ul>
                </footer>
            </div>
     
       

        </div>
        
    
        
    )
}

export default Inicio;