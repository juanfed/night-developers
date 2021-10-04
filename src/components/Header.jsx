import 'styles/header.css';
import Transicion from 'components/script';
import {useEffect} from 'react';


function Header(){
    useEffect(()=>{
        Transicion()
    },[])
    return(
        <section id="body">
            <div className="header">
            <div id="body-pd">
    <header className="header" id="header">
        
        <div className="header__toggle">
        <i className='bx bx-menu' id="header-toggle"></i>
        </div>
        <div>
        <h1>PC - Master Race</h1>
        </div>
        <div className="header__img">
        <img src="img/jx6WiEM.jpg" alt="" />
        </div>
    </header>

    <div className="l-navbar" id="nav-bar">
        <nav className="nav">

        <div>
            <a href="#" className="nav__logo">
            <i className='bx bx-layer' nav__logo-icon></i>
            <span className="nav__logo-name">MasterRace</span>
            </a>

            <div className="nav__list">
            <a href="#" className="nav__link active">
                <i className='bx bxs-user nav__icon'></i>
                <span className="nav__name">Usuario</span>
            </a>

            <a href="#" className="nav__link">
                <i className='bx bxs-cart-alt nav__icon'></i>
                <span className="nav__name">Productos</span>
            </a>

            <a href="#" className="nav__link">
                <i className='bx bxs-bar-chart-alt-2 nav__icon'></i>
                <span className="nav__name">Ventas</span>
            </a>

            </div>

        </div>
        <a href="#" className="nav__link">
            <i className='bx bx-log-out nav__icon'></i>
            <span className="nav__name">Salir</span>
        </a>

        </nav>
    </div>
</div>
        </div>
        </section>
        
    )
}

export default Header;