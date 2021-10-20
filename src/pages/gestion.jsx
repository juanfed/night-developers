import 'styles/gestion.css';
import React from 'react';
import Header from 'components/Header';
import CarUsers from 'components/carUser';

const gestion = () => {
    return (
        <div>
            <div id="contenido">
                <CarUsers />
            </div>
        </div>
    )
}

export default gestion
