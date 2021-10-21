import 'styles/producto.css';
import React, { useState, useEffect } from 'react';

const Producto = () => {

  const listaProductos = [
    {
      id: "54687",
      nombre: "Xiaomi note 9S",
      descripcion: "Telefono celular",
      valor: "1.250.000",
      estado: "disponible"
    },
    {
      id: "58959",
      nombre: "Google Pixel 6",
      descripcion: "Telefono celular",
      valor: "5.480.000",
      estado: "no disponible"
    },
    {
      id: "54456",
      nombre: "One Plus 6T",
      descripcion: "Telefono celular",
      valor: "3.544.999",
      estado: "disponible"
    }

  ]

  const [productos, setProductos] = useState([]);
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [titulo, setTitulo] = useState('Agregar Producto');

  useEffect(() => {
    if (mostrarTabla) {
      setTitulo('Agregar Producto');
    } else {
      setTitulo('Ver Lista Producto');
    }

  }, [mostrarTabla]);

  useEffect(() => {
    // aca obtendré la lista de los prouctos desde el backend
    setProductos(listaProductos);
  }, [listaProductos]);

  return (
    <div>
      <div id="contenido__producto">
        <center>
          <button className="productoTitulo" onClick={() => setMostrarTabla(!mostrarTabla)}>{titulo}</button>
          <div>
            {mostrarTabla ? <ListaProductos /> : <AgregarProducto />}
          </div>
        </center>
      </div>
    </div>
  )
};
export default Producto;

const AgregarProducto = () => {
  return (
    <form action="">
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
    </form>
  )
}

const ListaProductos = () => {
  return (
    <table>
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
  )
}

