import 'styles/producto.css';
import React, { useState, useEffect } from 'react';

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

const Producto = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]);
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
            {mostrarTabla ? (<ListaProductos listaCelulares={productos}/>) : (<AgregarProducto />)}
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

const ListaProductos = ({ listaCelulares }) => {
  useEffect(()=>{
    console.log("se supone que deberia de mostrarse en consola",listaCelulares);
  }, [listaCelulares] )
  return ( 
    <table> 
      <tr>
        <th >ID</th>
        <th >Producto</th>
        <th >Descripción</th>
        <th >Valor Unitario</th>
        <th >Estado</th>
      </tr>
      <tbody>
        {listaCelulares.map((producto)=>{
          return(
            <tr>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.valor}</td>
              <td>{producto.estado}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

