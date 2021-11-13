import Header from 'components/Header';
import RutaPrivada from 'components/RutaPrivada';

const LayoutPrivado = ({ children }) => {
    return (
        <RutaPrivada>
            <div>
            <Header />
            <main>{children}</main>
        </div>
        </RutaPrivada>
    )
}

export default LayoutPrivado
