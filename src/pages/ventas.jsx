import Header from "components/Header";
import 'styles/ventas.css';
import Agregar from 'components/scripts';
import {useEffect} from 'react';

function Ventas(){
    

    return(
        <div>
            <Header />
            <center>
            <p className="Titulo-producto">Gestion de Ventas</p>

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
                    <p>Cantidad</p>
                    <input type="text" id="cantidad" class="caja"/>
                </div>
            </thead>


        <button type="button" name="name" id="buttom" onclick="agregar()" alerta="Guardado con exito" className="ventas-boton-agregar">Agregar</button>
        <table id="info">

            <thead>

            <tr>
                <th>ID Venta</th>
                <th>precio</th>
                <th>cantidad</th>
                <th>Comprador</th>
                <th>Estado</th>

            </tr>
            <tr>
                <td>V01</td>
                <td >1.500.000</td>
                <td >2</td>
                <td >Carlos</td>
                <td >En proceso</td>
            </tr> 
            <tr>
                <td>V02</td>
                <td >750.000</td>
                <td >1</td>
                <td >Juan</td>
                <td >Cancelado</td>
            </tr>


            </thead>
        </table>
        </center>

        
            

            

    </div>
    
    


      
    
    
    )
}


export default Ventas;