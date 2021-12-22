import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import '../styles/rutaPrivada.css';

import pageNoFound from '../imagenes/pageNoFound.png';

const RutaPrivada = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <div> Loding..</div>;
    return isAuthenticated ? <>{children}</> : (
    <div className='autenticacion'>
        <div className='autenticacion__tittle'>
            <h1>Usted no esta autorizado para acceder a la ruta</h1>
        </div>
        <div>
            <figure>
                <img src={pageNoFound} alt="" />
            </figure>
        </div>
        <div className='autenticacion__link'>
            <Link to="/"><p>Volver a la pagina de inicio</p></Link>
        </div>
        
    </div>
    )
}

export default RutaPrivada
