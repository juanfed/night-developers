import "styles/producto.css";
import React, { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import axios from 'axios';



const Producto = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Agregar Producto");

  // bonton de actualizar
  function Actualizar() {   

    const options = { method: 'GET', url: 'http://localhost:5000/producto' };
      axios.request(options).then(function (response) {
        console.log(response.data);
        setProductos(response.data);
      }).catch(function (error) {
        console.error(error);
      });
      alert("Producto actualizado");
  }

  useEffect(() => { // cada vez que cambie entre agregar producto o ver tabla, me hace un get actualizando los valores de la tabla
    if (mostrarTabla) {
      setTitulo("Agregar Producto");
      const options = { method: 'GET', url: 'http://localhost:5000/producto' };

      axios.request(options).then(function (response) {
        console.log(response.data);
        setProductos(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    } else {
      setTitulo("Ver Lista Producto");
    }
  }, [mostrarTabla]);

  const AgregarProducto = ({ crearDato, listaProductos }) => {
    const form = useRef(null);

    const submitFrom = async (e) => {
      e.preventDefault(); // me mostrará una advertencia para llenar los campos
      const fd = new FormData(form.current);


      const nuevoProducto = {};
      fd.forEach((value, key) => {
        nuevoProducto[key] = value;
      });

      const options = {
        method: 'POST',
        url: 'http://localhost:5000/producto/nuevo',
        headers: { 'Content-Type': 'application/json' },
        data: {
          nombre: nuevoProducto.nombre,
          descripcion: nuevoProducto.descripcion,
          valor: nuevoProducto.valor,
          estado: nuevoProducto.estado
        }
      };

      await axios.request(options).then(function (response) {
        console.log(response.data);
        alert("producto creado con exito"); // lo puse como un mensaje emergente :v
      }).catch(function (error) {
        console.error(error);
        alert("Error al crear un producto nuevo");
      });

      //setMostrarTabla(true); // si no funiona quitar

    };

    return (
      <form action="" ref={form} onSubmit={submitFrom} className="formProducto">
        <input className="datos" type="text" name="nombre" placeholder="Ingrese el nombre" required/>
        <br />
        <input className="datos" type="text" name="descripcion" placeholder="Ingrese La Descripción" required/>
        <br />
        <input className="datos" type="text" name="valor" min={0} max={6} placeholder="Ingrese el Valor Unitario" required/>
        <br />
        <select className="multi" name="estado" required>
          <option>Seleccione</option>
          <option>Disponible</option>
          <option>Agotado</option>
        </select>

        <br />
        <br />

        <button className="botoness" type="submit">
          Registrar
        </button>
        <button className="botoness" type="reset">
          Limpiar
        </button>
      </form>
    );
  };

  const EliminarProducto = async (productoId) =>{
    const options = {
      method: 'DELETE',
      url: 'http://localhost:5000/producto/delete',
      headers: {'Content-Type': 'application/json'},
      data: {id: productoId}
    };
    
    await axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  const ListaProductos = ({ listaCelulares }) => {
    //buqueda
    const [busqueda, setBusqueda] = useState('');
    const [celularesFiltrados, setCelularesFiltrados] = useState(listaCelulares)
    useEffect(() => {
      setCelularesFiltrados(
        listaCelulares.filter((elemento) => {
          return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
        }));
    }, [busqueda, listaCelulares])

    useEffect(() => {
      console.log(
        "se supone que deberia de mostrarse en consola",
        listaCelulares
      );
    }, [listaCelulares]);
    return (
      <div>
        <div className="buscador_actu">
          <div>
            <button type="button" name="name" id="buttom" className="Actuali_zar" onClick={Actualizar}>Actualizar</button>
            <select className="Select_form" name="filter">
              <option >Seleccione</option>
              <option >ID</option>
              <option>Producto</option>
              <option>Descripcion</option>
              <option >Valor</option>
              <option >Estado</option>
            </select>
            <input className="Busca_dor" type="text" placeholder="Buscar" value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)} />

          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Descripción</th>
              <th>Valor Unitario</th>
              <th>Estado</th>
              <th>Cambios</th>
            </tr>
          </thead>
          <tbody>
            {celularesFiltrados.map((producto) => {
              return (
                <tr key={nanoid()}>
                  <td>{producto._id.slice(18)}</td>
                  <td>{producto.nombre}</td>
                  <td>{producto.descripcion}</td>
                  <td>{producto.valor}</td>
                  <td>{producto.estado}</td>
                  <td>
                    <div className="botonListaProducto">
                      <button>Editar</button>
                      <button onClick={() => EliminarProducto(producto._id)}>Eliminar</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    /** return del render de la lista de los productos */
    <div>
      <div id="contenido__producto">
        <center>
          <button
            className="productoTitulo"
            onClick={() => setMostrarTabla(!mostrarTabla)}
          >
            {titulo}
          </button>
          <div>
            {mostrarTabla ? (
              <ListaProductos listaCelulares={productos} />
            ) : (
              <AgregarProducto
                crearDato={setProductos}
                listaProductos={productos}
              />
            )}
          </div>
        </center>
      </div>
    </div>
  );
};

export default Producto;
