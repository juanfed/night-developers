import Header from "components/Header";
import 'styles/producto.css';

function Producto(){
    return(
        <div>
            <Header />
                <div id="contenido__producto">
                    
                    <form onsubmit="myFunction(); return false;" required />

                        <center>
                        <input class="datos" type="text" id= "pID" placeholder="Ingrese el ID" required/><br/>
                        <input  class="datos" type="text" id= "pNombre" placeholder="Ingrese el Nombre" required/><br/>
                        <input  class="datos" type="text" id= "pDes" placeholder="Ingrese La Descripción" required/><br/>
                        <input  class="datos"type="number" id= "pValor" placeholder="Ingrese el Valor Unitario" required/><br/>
                        <select  class= "multi"  id="pEstado" required>

                            
                            <option value="Seleccione">Seleccione</option>
                            <option value="En proceso">En proceso</option>
                            <option value="Entregado">Entregado</option>
                            <option value="Cancelado">Cancelado</option>
                        </select>

                        <br/>
                        <br/>

                        <input class ="botoness"type="submit" value="Registrar" />
                        <input class ="botoness" type="reset" value="Limpiar" />

                    

                    <table id = "miTabla">
                        <tr>
                            <td >ID</td>
                            <td >Nombre</td>
                            <td >Descripción</td>
                            <td >Valor Unitario</td>
                            <td >Estado</td>
                        </tr> 
                        

                        
                    </table> 
                    </center>
                    
                    

            
        </div>
    </div>
    
    
    )
}


export default Producto;