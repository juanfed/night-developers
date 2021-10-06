// esta sera el index de la pagina, despues de ingresar al sistema ya sea como usuario o registrandose
import 'styles/index.css';
import Header from 'components/Header';
function Index (){
    return(
        <div>
            <Header />
            <section id="contenido">
                <div className="contenido__tittle">
                <h1>Las mejores marcas y componentes</h1>
                </div>
                <div className="img_Index">
                    <img src="Media/img index.png" alt="celulares" />
                </div>
            </section>
            
        </div>
    )
}

export default Index;