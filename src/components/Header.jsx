import { Link } from 'react-router-dom';
import 'styles/header.css';
import { useAuth0 } from "@auth0/auth0-react"; // para la opccion de cerrar secion
import Transicion from 'components/script';
import {useEffect} from 'react';


function Header(){
    useEffect(()=>{
        Transicion()
    },[]);
    const { logout } = useAuth0(); // para el boton de salir
    return(
        <section id="body">
            <div className="header">
            <div id="body-pd">
                <header className="header" id="header">
        
                    <div className="header__toggle">
                    <i className='bx bx-menu' id="header-toggle"></i>
                    </div>
                    <div>
                    <h1>Celu-Componentes</h1>
                    </div>
                    <div className="header__img">
                    <img src="img/jx6WiEM.jpg" alt="" />
                    </div>
                </header>

                <div className="l-navbar" id="nav-bar">
                    <nav className="nav">

                    <div>
                        <div href="#" className="nav__logo">
                        <i className='bx bx-layer'></i>
                        <Link to="/admin"><span className="nav__logo-name">Inicio</span></Link>
                        </div>

                        <div className="nav__list">
                        <div href="#" className="nav__link active">
                            <i className='bx bxs-user nav__icon'></i>
                            <span className="nav__name">Usuario</span>
                        </div>

                        <div href="#" className="nav__link">
                            <i className='bx bxs-cart-alt nav__icon'></i>
                            <Link to="/admin/producto"><span className="nav__name">Productos</span></Link>
                        </div>

                        <div href="#" className="nav__link">
                            <i className='bx bxs-bar-chart-alt-2 nav__icon'></i>
                            <Link to="/admin/ventas"><span className="nav__name">Ventas</span></Link>
                        </div>

                        <div href="#" className="nav__link">
                            <i className='bx bxs-group bx-flip-horizontal bx-tada' id="icono__gestion"></i>
                            <Link to="/admin/gestionUser"><span className="nav__name">Gestion Usuarios</span></Link>
                        </div>

                    </div>

                    </div>
                        <div href="#" className="nav__link">
                            <i className='bx bx-log-out nav__icon'></i>
                            <span onClick={() => logout({ returnTo: window.location.origin })} className="nav__name">Salir</span>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </section>
        
    )
}

export default Header;