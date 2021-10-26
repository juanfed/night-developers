import 'styles/ventas.css';
import React, { useState, useEffect, useRef } from 'react';
import { nanoid } from "nanoid";

const lista_Ventas = [
  {
    id: "58959",
    precio: "560.000",
    cantidad: "3",
    comprador: "Juan",
    estado: "en proceso"
  },
  {
    id: "2",
    precio: "560.000",
    cantidad: "3",
    comprador: "Jose",
    estado: "en proceso"
  },



]

const Ventas = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [ventas, setVentas] = useState([]);
  const [titulo, setTitulo] = useState('Agregar Producto');

  useEffect(() => {
    if (mostrarTabla) {
      setTitulo('Agregar venta');
    } else {
      setTitulo('Ver Lista de Ventas');
    }

  }, [mostrarTabla]);

  useEffect(() => {
    // aca obtendré la lista de los prouctos desde el backend
    setVentas(lista_Ventas);
  }, [lista_Ventas]);

  const AgregarVenta = ({
    crearDato,
    listaVentas
  }) => {

    const form = useRef(null);

    const submitFrom = (e) => {
      e.preventDefault(); // me mostrará una advertencia para llenar los campos
      const fd = new FormData(form.current);
      const nuevoVenta = {};

      fd.forEach((value, key) => {
        nuevoVenta[key] = value;
      });
      setVentas([...listaVentas, nuevoVenta]);
    }

    return (
      <form action="" ref={form} onSubmit={submitFrom}>
        <input className="datos" type="text" name='id' placeholder="Ingrese el ID" required />
        <br />
        <input className="datos" type="text" name='precio' placeholder="Ingrese el nombre" required />
        <br />
        <input className="datos" type="text" name='cantidad' placeholder="Ingrese La Cantidad" required />
        <br />
        <input className="datos" type="text" name='comprador' placeholder="Ingrese el Comprador" required />
        <br />
        <select className="multi" name='estado' required>


          <option>Seleccione</option>
          <option>En proceso</option>
          <option>Entregado</option>

        </select>

        <br />
        <br />



        <button className="botoness" type="submit">Registrar</button>
        <button className="botoness" type="reset">Limpiar</button>
      </form>
    )
  }

  const ListaVentas = ({ lista_ventas }) => {
    //buqueda
    const [busqueda, setBusqueda] = useState('');
    const [ventasFiltradas, setVentasFiltradas] = useState(lista_ventas)
    useEffect(() => {
      setVentasFiltradas(
        lista_ventas.filter((elemento) => {
          return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
        }));
    }, [busqueda, lista_ventas])


    useEffect(() => {
      console.log("se supone que deberia de mostrarse en consola", lista_ventas);
    }, [lista_ventas])
    return (

      <div>
        <div className="buscador_actu">
          <div>
            <button type="button" name="name" id="buttom" className="Actuali_zar">Actualizar</button>
            <select className="Select_form" name="filter">
            <option>Seleccione</option>
              <option >ID</option>
              <option >Precio</option>
              <option>Cantidad</option>
              <option>Comprador</option>
              <option>Estado</option>
            </select>
            <input className="Busca_dor" type="text" placeholder="Buscar" required value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
            
          </div>


        </div>

        <table>
          <tr>
            <th >ID</th>
            <th >Precio</th>
            <th >Cantidad</th>
            <th >Comprador</th>
            <th >Estado</th>
            <th >Cambios</th>
          </tr>
          <tbody>
            {ventasFiltradas.map((Venta) => {
              return (
                <tr key={nanoid()}>
                  <td>{Venta.id}</td>
                  <td>{Venta.precio}</td>
                  <td>{Venta.cantidad}</td>
                  <td>{Venta.comprador}</td>
                  <td>{Venta.estado}</td>
                  <td>
                    <div className="botonListaProducto">
                      <button>Editar</button>
                      <button>Eliminar</button>
                    </div>

                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>


    )
  }

  return ( /** return del render de la lista de las ventas */
    <div>
      <div id="contenido__Venta">
        <center>
          <button className="productoTitulo" onClick={() => setMostrarTabla(!mostrarTabla)}>{titulo}</button>
          <div>

            {mostrarTabla ? (<ListaVentas lista_ventas={ventas} />) : (<AgregarVenta
              crearDato={setVentas} listaVentas={ventas} />)}
          </div>
        </center>
      </div>
    </div>
  )
};
export default Ventas;



