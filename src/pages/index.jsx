// esta sera el index de la pagina, despues de ingresar al sistema ya sea como usuario o registrandose
import 'styles/index.css';
import Header from 'components/Header';
function Index (){
    return(
        <div>
            <Header />
            <div id="contenido">
                <h1>Contenido del index</h1>
            </div>
            
        </div>
    )
}

export default Index;