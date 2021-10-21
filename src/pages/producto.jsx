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
  },

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
            {mostrarTabla ? (<ListaProductos listaCelulares={productos}/>) : (<AgregarProducto 
            crearDato={setProductos} listaProductos={productos}/>)}
          </div>
        </center>
      </div>
    </div>
  )
};
export default Producto;

const AgregarProducto = ({
  crearDato,
  listaProductos
}) => {


  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [valor, setValor] = useState('');
  const [estado, setEstado] = useState('');

  // aca la funcion para el envio de los datos al backend
  const enviarDatos = ()=>{
    console.log('id', id, 'nombre', nombre, 'descipcion', descripcion, 'valor', valor, 'estado', estado);
    crearDato([...listaProductos,{id:id, nombre:nombre, descripcion:descripcion, valor:valor, estado:estado},]);
  }

  return (
    <form action="">
      <input className="datos" type="text" name='id' placeholder="Ingrese el ID" required  value={id}
      onChange={(e)=>{
        setId(e.target.value);
      }} />
      <br />
      <input className="datos" type="text" name='nombre' placeholder="Ingrese el Nombre" required value={nombre}
      onChange={(e)=>{
        setNombre(e.target.value);
      }} />
      <br />
      <input className="datos" type="text" name='descipcion' placeholder="Ingrese La Descripción" value={descripcion}required
      onChange={(e)=>{
        setDescripcion(e.target.value);
      }} />
      <br />
      <input className="datos" type="text" name='valor' placeholder="Ingrese el Valor Unitario" required  value={valor}
      onChange={(e)=>{
        setValor(e.target.value);
      }} />
      <br />
      <select className="multi" name='estado' required onChange={(e)=>{setEstado(e.target.value);}}>


        <option>Seleccione</option>
        <option>Disponible</option>
        <option>Agotado</option>

      </select>

      <br />
      <br />

      <button  className="botoness" type="button" onClick={()=>{enviarDatos()}}>Registrar</button>
      <button  className="botoness" type="reset">Limpiar</button>
    </form>
  )
}

const ListaProductos = ({ listaCelulares}) => {
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

