// esta sera el index de la pagina, despues de ingresar al sistema ya sea como usuario o registrandose
import 'styles/index.css';
import Header from 'components/Header';
function Index (){
    return(
        <div>
            <Header />
            <div>
                <h1 className="index">esta sera el index de la pagina, despues de ingresar al sistema ya sea como usuario o registrandose, aca ira un contenido donde 
                    se ponga todo lo relacionado con la pagina como nombre de la empresa, fotos, y demas cosas.
            </h1>
            </div>
            
        </div>
    )
}

export default Index;