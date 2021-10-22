import React, { useState, useEffect } from 'react';
import 'styles/ventas.css';

const Ventas = () => {


    const VentaUsuarios = () => {
        return (
            <div className="contenido">
                <center>
                    <p className="Titulo-producto">Gestion de Ventas</p>
                    <br />

                    <thead className="contenidoProducto">
                        <div id="div">
                            <p>Productos</p>
                            <select id="productos" class="caja">
                                <option value="">Productos</option>
                                <option value="laptos">Laptos</option>
                                <option value="Tablec">Tablec</option>
                            </select>
                        </div>

                        <div id="div">
                            <p>Precio</p>
                            <input type="text" id="precio" class="caja" />
                        </div>

                        <div id="div">
                            <p>Cantidad</p>
                            <input type="text" id="cantidad" class="caja" />
                        </div>
                    </thead>

                    <button type="button" name="name" id="buttom" onclick="agregar()" alerta="Guardado con exito" className="ventas-boton-agregar">Agregar</button>
                </center>
            </div>
        )
    }
    const VerTabla = () => {
        return (

            <di>
                <div>
                    <input className="Actualizar" type="text" value="Actualizar" />
                </div>

                <div className="buscadorp">
                    <input type="text" placeholder="Buscar" required />
                    <button type="button" name="name" id="buttom" className="buscar-botonp">Buscar</button>
                </div>

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

            </di>


        )
    }
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [titulo, setTitulo] = useState("Agregar ventas");

    useEffect(() => {
        if (mostrarTabla) {
            setTitulo("Agregar ventas");
        } else {
            setTitulo("Ver lista de ventas");
        }

    }, [mostrarTabla]);


    return ( 
        /**aca va el retur de donde saca los datos de la lista */
        <div id="contenido-gestion">
            <center>
                <button className="productoTitulo" onClick={() => setMostrarTabla(!mostrarTabla)}>{titulo}</button>
                <br />
                <div>
                    {mostrarTabla ? (<VerTabla />) : (<VentaUsuarios />)}
                </div>
            </center>
        </div>



    )
}

export default Ventas
