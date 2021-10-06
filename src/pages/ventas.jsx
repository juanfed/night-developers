import Header from "components/Header";
import 'styles/ventas.css';

function Ventas(){
    return(
        <div>
            <Header />
            <center>

            <thead className="contenidoProducto"> 
                <div id="div">
                    <p>Productos</p>
                    <select id = "productos" class= "caja">
                        <option value="">Productos</option>
                        <option value="laptos">Laptos</option>
                        <option value="Tablec">Tablec</option>
                    </select>
                </div>

                <div id= "div">
                    <p>Precio</p>
                    <input type= "text" id= "precio" class="caja"/>
                </div>

                <div id="div">
                    <p>cantidad</p>
                    <input type="text" id="cantidad" class="caja"/>
                </div>
            </thead>


        <button type="button" name="name" id="buttom" onclick="agregar()" className="ventas-boton-agregar">add</button>
        <table id="info">

            <thead>

            <tr>
                <th>productos</th>
                <th>precos</th>
                <th>cantidad</th>
                <th>Subtotal</th>

            </tr>
            </thead>
        </table>

        <div id="asd"><div>
            <p>Subtotal:</p>
            <input type= "text" id= "SubTotal" class="caja"/>
            </div>
            <div>
                <p>IVG:</p>
                <input type= "text" id= "IVG" class="caja"/>
            </div>

            <div>
                <p>Total:</p>
                <input type= "text" id= "Total" class="caja"/>

            </div>

    </div>
    </center>
    <script src="../components/scripts.js"></script>


    </div>
    
    
    
    )
}


export default Ventas;