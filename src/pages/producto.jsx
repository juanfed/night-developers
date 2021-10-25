import "styles/producto.css";
import React, { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";

const listaProductos = [
  {
    id: "54687",
    nombre: "Xiaomi note 9S",
    descripcion: "Telefono celular",
    valor: "1.250.000",
    estado: "disponible",
  },
  {
    id: "58959",
    nombre: "Google Pixel 6",
    descripcion: "Telefono celular",
    valor: "5.480.000",
    estado: "no disponible",
  },
  {
    id: "54456",
    nombre: "One Plus 6T",
    descripcion: "Telefono celular",
    valor: "3.544.999",
    estado: "disponible",
  },
];

const Producto = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Agregar Producto");

  useEffect(() => {
    if (mostrarTabla) {
      setTitulo("Agregar Producto");
    } else {
      setTitulo("Ver Lista Producto");
    }
  }, [mostrarTabla]);

  useEffect(() => {
    // aca obtendré la lista de los prouctos desde el backend
    setProductos(listaProductos);
  }, [listaProductos]);

  const AgregarProducto = ({ crearDato, listaProductos }) => {
    const form = useRef(null);

    const submitFrom = (e) => {
      e.preventDefault(); // me mostrará una advertencia para llenar los campos
      const fd = new FormData(form.current);
      const nuevoProducto = {};

      fd.forEach((value, key) => {
        nuevoProducto[key] = value;
      });

      setProductos([...listaProductos, nuevoProducto]);
    };

    return (
      <form action="" ref={form} onSubmit={submitFrom} className="formProducto">
        <input
          className="datos"
          type="text"
          name="id"
          placeholder="Ingrese el ID"
          required
        />
        <br />
        <input
          className="datos"
          type="text"
          name="nombre"
          placeholder="Ingrese el nombre"
          required
        />
        <br />
        <input
          className="datos"
          type="text"
          name="descripcion"
          placeholder="Ingrese La Descripción"
          required
        />
        <br />
        <input
          className="datos"
          type="text"
          name="valor"
          min={0}
          max={6}
          placeholder="Ingrese el Valor Unitario"
          required
        />
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

  const ListaProductos = ({ listaCelulares }) => {
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
            <input className="Actuali_zar" type="text" value="Actualizar" />
            <input
              className="Busca_dor"
              type="text"
              placeholder="Buscar"
              required
            />
            <button
              type="button"
              name="name"
              id="buttom"
              className="buscar-botonp"
            >
              Buscar
            </button>
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
            {listaCelulares.map((producto) => {
              return (
                <tr key={nanoid()}>
                  <td>{producto.id}</td>
                  <td>{producto.nombre}</td>
                  <td>{producto.descripcion}</td>
                  <td>{producto.valor}</td>
                  <td>{producto.estado}</td>
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
