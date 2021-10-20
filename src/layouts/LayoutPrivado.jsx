import Header from 'components/Header';
import React from 'react';

const LayoutPrivado = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    )
}

export default LayoutPrivado
