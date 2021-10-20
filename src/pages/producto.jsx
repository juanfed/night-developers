import 'styles/producto.css';
import React from 'react'

const producto = () => {
    return (
        <div>
            <div id="contenido__producto">

                <form onsubmit="myFunction(); return false;" required />

                <center>
                    <p className="Titulo-producto">Gestion de Productos</p>
                    <input className="datos" type="text" id="pID" placeholder="Ingrese el ID" required /><br />
                    <input className="datos" type="text" id="pNombre" placeholder="Ingrese el Nombre" required /><br />
                    <input className="datos" type="text" id="pDes" placeholder="Ingrese La Descripción" required /><br />
                    <input className="datos" type="number" id="pValor" placeholder="Ingrese el Valor Unitario" required /><br />
                    <select className="multi" id="pEstado" required>


                        <option value="Seleccione">Seleccione</option>
                        <option value="En proceso">Disponible</option>
                        <option value="Entregado">Agotado</option>

                    </select>

                    <br />
                    <br />

                    <input className="botoness" type="submit" value="Registrar" />
                    <input className="botoness" type="reset" value="Limpiar" />



                    <table id="miTabla">
                        <tr>
                            <th >ID</th>
                            <th >Producto</th>
                            <th >Descripción</th>
                            <th >Valor Unitario</th>
                            <th >Estado</th>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td >Redmi note 8</td>
                            <td >64 GB memoria, 8GB Ram</td>
                            <td >650.000</td>
                            <td >Disponible</td>
                        </tr>

                        <tr>
                            <td>02</td>
                            <td >Redmi note 9</td>
                            <td >120 GB memoria, 8GB Ram</td>
                            <td >850.000</td>
                            <td >Disponible</td>
                        </tr>
                    </table>
                </center>
            </div>
        </div>
    )
}

export default producto
