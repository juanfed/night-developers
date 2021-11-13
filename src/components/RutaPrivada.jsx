import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const RutaPrivada = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <div> Loding..</div>;
    return isAuthenticated ? <>{children}</> : (<div>
        <div>Uste no esta autorizado a acceder a este sitio</div>
        <div>organizar la pagina y hacer que aparesca un boton para devolverme al home o un boton para que 
            el usuario que no este registrado, se pueda registrar o iniciar secion
        </div>
    </div>)
}

export default RutaPrivada
