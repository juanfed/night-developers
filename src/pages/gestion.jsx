import 'styles/gestion.css';
import React, { useState, useEffect, useRef } from 'react';
import { nanoid } from "nanoid";
import axios from 'axios';

const Gestion = () => {

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [gestion, setGestion] = useState([]);
    const [titulo, setTitulo] = useState("Gestionar Usuarios");


    // bonton de actualizar
    function Actualizar() {

        const options = { method: 'GET', url: 'http://localhost:5000/usuarios' };
        axios.request(options).then(function (response) {
            console.log(response.data);
            setGestion(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        alert("Usuarios actualizados");
    }

    useEffect(() => { // me renderiza para agregar o ver lista de usuarios
        if (mostrarTabla) { // actualiza cada vez que cambie la renderizacion
            setTitulo("Gestionar Usuarios");
            const options = { method: 'GET', url: 'http://localhost:5000/usuarios' };

            axios.request(options).then(function (response) {
                console.log(response.data);
                setGestion(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        } else {
            setTitulo("Ver lista de usuarios");
        }

    }, [mostrarTabla]);

    const AgregarUsuario = ({ crearDato, listaUsuarios }) => {
        const form = useRef(null);

        const submitFrom = async (e) => {
            e.preventDefault();
            const fd = new FormData(form.current);


            const nuevoUsuario = {};
            fd.forEach((value, key) => {
                nuevoUsuario[key] = value;
            });
            const options = {
                method: 'POST',
                url: 'http://localhost:5000/usuarios/nuevo',
                headers: { 'Content-Type': 'application/json' },
                data: {
                    nombre: nuevoUsuario.nombre,
                    correo: nuevoUsuario.correo,
                    rol: nuevoUsuario.rol,
                    estado: nuevoUsuario.estado
                }
            };

            await axios.request(options).then(function (response) {
                console.log(response.data);
                alert("usuario creado con exito"); // lo puse como un mensaje emergente :v
            }).catch(function (error) {
                console.error(error);
                alert("Error al crear un usuario");
            });
        };




        return (
            <div className="carUser">
                <div className="carUser-img">
                    <i className='bx bx-user-circle' ></i>
                </div>
                <div className="carUser-formulario">
                    <form action="" ref={form} onSubmit={submitFrom}>
                        <div className="carUser-datos">
                            <p class="titles_for"> Nombre <br /></p>
                            <input type="text" id="nombre" name="nombre" placeholder="Ingrese El Nombre" required />
                        </div>

                        <div className="carUser-datos">
                            <p class="titles_for"> Correo </p>
                            <input type="email" id="correo" name="correo" placeholder="Ingrese El Correo" required />
                        </div>

                        <div className="carUser-datos">
                            <p className="titles_for"> Rol: </p>
                            <select className="Select_formu" name="rol">
                                <option >Seleccione</option>
                                <option >Administrador</option>
                                <option>Vendedor</option>
                            </select>

                        </div>

                        <div className="carUser-datos">
                            <p class="titles_for"> Estado <br /></p>
                            <select className="Select_formu" name="estado">
                                <option >Seleccione</option>
                                <option >Pendiente</option>
                                <option>Autorizado</option>
                                <option>No Autorizado</option>
                            </select>

                        </div>

                        <div className="carUser-modificar">
                            <button type="submit" className="botonCarUser">Agregar</button>
                            <button type="reset" className="botonCarUser">Eliminar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    const EliminarUsuario = async (usuarioId) => {
        const options = {
            method: 'DELETE',
            url: 'http://localhost:5000/usuarios/delete',
            headers: { 'Content-Type': 'application/json' },
            data: { id: usuarioId }
        };

        await axios.request(options).then(function (response) {
            console.log(response.data);
            alert("el usuario ha sido borrado");
        }).catch(function (error) {
            console.error(error);
            alert("error al eliminar el usuario");
        });
    }

    const ListaUsuarios = ({ listaPersonas }) => {

        //Sesion de busqueda
        const [busqueda, setBusqueda] = useState('');
        const [usuariosFiltrados, setUsuariosFiltrados] = useState(listaPersonas)
        useEffect(() => {
            setUsuariosFiltrados(
                listaPersonas.filter((elemento) => {
                    return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
                }));
        }, [busqueda, listaPersonas])


        useEffect(() => {
            console.log("aca me muestra algo", listaPersonas);
        }, [listaPersonas])
        return (

            <div>
                <div className="buscador_actu">
                    <div>
                        <button type="button" name="name" id="buttom" className="Actuali_zar" onClick={Actualizar}>Actualizar</button>
                        <select className="Select_form" name="filter">
                            <option >Seleccione</option>
                            <option >Nombre</option>
                            <option >Rol</option>
                            <option>Correo</option>
                            <option>Estado</option>
                        </select>
                        <input className="Busca_dor" type="text" placeholder="Buscar" required value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />

                    </div>


                </div>
                <div className="tablaUsuarios">
                    <table className="tabla--Usuarios">
                        <thead>
                            <tr>
                                <th >Nombre </th>
                                <th >Rol</th>
                                <th >Correo</th>
                                <th >Estado</th>
                                <th >Cambios</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuariosFiltrados.map((usuario) => {
                                return (
                                    <tr key={nanoid()}>
                                        <td>{usuario.nombre}</td>
                                        <td>{usuario.rol}</td>
                                        <td>{usuario.correo}</td>
                                        <td>{usuario.estado}</td>
                                        <td>
                                            <div className="botonListaProducto">
                                                <button>Editar</button>
                                                <button onClick={() => EliminarUsuario(usuario._id)}>Eliminar</button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    return (
        <div id="contenido-gestion">
            <center>
                <button className="productoTitulo" onClick={() => setMostrarTabla(!mostrarTabla)}>{titulo}</button>
                <br />
                <div>
                    {mostrarTabla ? (<ListaUsuarios listaPersonas={gestion} />) : (<AgregarUsuario
                        crearDato={setGestion} listaUsuarios={gestion} />)}
                </div>
            </center>


        </div>
    )

}





export default Gestion;

