import 'styles/ventas.css';
import React, { useState, useEffect, useRef } from 'react';
import { nanoid } from "nanoid";
import axios from 'axios';




const Ventas = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [ventas, setVentas] = useState([]);
  const [titulo, setTitulo] = useState('Agregar Venta');

  useEffect(() => {
    if (mostrarTabla) {
      setTitulo('Agregar venta');
      const options = { method: 'GET', url: 'http://localhost:5000/ventas' };

      axios.request(options).then(function (response) {
        console.log(response.data);
        setVentas(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    } else {
      setTitulo('Ver Lista de Ventas');
    }

  }, [mostrarTabla]);

  const AgregarVenta = ({ crearDato, listaVentas }) => {
    const form = useRef(null);

    const submitFrom = async (e) => {
      e.preventDefault(); // me mostrará una advertencia para llenar los campos
      const fd = new FormData(form.current);


      const nuevoVenta = {};
      fd.forEach((value, key) => {
        nuevoVenta[key] = value;
      });

      const options = {
        method: 'POST',
        url: 'http://localhost:5000/ventas/nuevo',
        headers: { 'Content-Type': 'application/json' },
        data: {
          valorTotal: nuevoVenta.valorTotal,
          cantidad: nuevoVenta.cantidad,
          valorUnidad: nuevoVenta.valorUnidad,
          fechaVenta: nuevoVenta.fechaVenta,
          idCliente: nuevoVenta.idCliente,
          nombreCliente: nuevoVenta.nombreCliente,
          estado: nuevoVenta.estado
        }
      };

      await axios.request(options).then(function (response) {
        console.log(response.data);
        alert("venta creada con exito"); // lo puse como un mensaje emergente :v
      }).catch(function (error) {
        console.error(error);
        alert("Error al crear una venta nueva");
      });

      //setMostrarTabla(true); // si no funiona quitar

    };


    return (
      <form action="" ref={form} onSubmit={submitFrom}>
        <input className="datos" type="text" name='valorTotal' placeholder="Valor total de venta" required />
        <br />
        <input className="datos" type="text" name='cantidad' placeholder="Ingrese La Cantidad" required />
        <br />
        <input className="datos" type="text" name='valorUnidad' placeholder="Valor Unidad" required />
        <br />
        <input className="datos" type="date" name='fechaVenta' placeholder="Fecha de venta" required />
        <br />
        <input className="datos" type="number" name='idCliente' placeholder="Id Cliente" required />
        <br />
        <input className="datos" type="text" name='nombreCliente' placeholder="Nombre Cliente" required />
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
            <th >Valor Total</th>
            <th >Cantidad</th>
            <th >Valor Und</th>
            <th >Fecha Vent</th>
            <th >Id Clienten</th>
            <th>Nombre Client</th>
            <th>Cambios</th>
          </tr>
          <tbody>
            {ventasFiltradas.map((Ventas) => {
              return (
                <tr key={nanoid()}>
                  <td>{Ventas._id.slice(19)}</td>
                  <td>{Ventas.valorTotal}</td>
                  <td>{Ventas.cantidad}</td>
                  <td>{Ventas.valorUnidad}</td>
                  <td>{Ventas.fechaVenta}</td>
                  <td>{Ventas.idCliente}</td>
                  <td>{Ventas.nombreCliente}</td>
                  <td>{Ventas.estado}</td>
                  <td>
                    <div className="botonListaProducto">
                      <button >Editar</button>
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
