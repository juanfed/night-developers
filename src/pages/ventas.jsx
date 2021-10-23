import 'styles/ventas.css';
import React, { useState, useEffect, useRef } from 'react';

const lista_Ventas = [
  {
    id: "58959",
    precio: "560.000",
    cantidad: "3",
    comprador: "Juan",
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
        <input className="datos" type="text" name='cantidad' placeholder="Ingrese La Descripción" required />
        <br />
        <input className="datos" type="text" name='comprador' min={0} max={6} placeholder="Ingrese el Valor Unitario" required />
        <br />
        <select className="multi" name='estado' required>


          <option>Seleccione</option>
          <option>En proceso</option>
          <option>Entregado</option>

        </select>

        <br/>
        <br/>



        <button className="botoness" type="submit">Registrar</button>
        <button className="botoness" type="reset">Limpiar</button>
      </form>
    )
  }

  const ListaVentas = ({ lista_ventas }) => {
    useEffect(() => {
      console.log("se supone que deberia de mostrarse en consola", lista_ventas);
    }, [lista_ventas])
    return (
        
      <div>
        <div className="buscador_actu">
        <div>
          <input className="Actuali_zar" type="text" value="Actualizar" />
          <input className="Busca_dor" type="text" placeholder="Buscar" required />
          <button type="button" name="name" id="buttom" className="buscar-botonp">Buscar</button>
        </div>

        
        </div>
        
        <table>
          <tr>
            <th >ID</th>
            <th >Precio</th>
            <th >Cantidad</th>
            <th >Comprador</th>
            <th >Estado</th>
          </tr>
          <tbody>
            {lista_ventas.map((Venta) => {
              return (
                <tr>
                  <td>{Venta.id}</td>
                  <td>{Venta.precio}</td>
                  <td>{Venta.cantidad}</td>
                  <td>{Venta.comprador}</td>
                  <td>{Venta.estado}</td>
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



