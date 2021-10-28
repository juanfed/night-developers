import React from 'react';
import 'styles/admin.css';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div className="inicio_pag">



            <div>
                <header>

                    <ul className="header_inicio">

                        <li>
                            <div className="buscar_inicio">
                                <input type="text" placeholder="Buscar" required />
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
                                    <h1>Celulares</h1>
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


            </div>




        </div>
    )
}


export default Admin;
