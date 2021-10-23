import 'styles/gestion.css';

import React, { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

const listaUsuarios = [
    {
        nombre: "Juan Camilo",
        rol: "Administrador",
        correo: "Juan@gmail.com",
        estado: "Pendiente"
    },
]


const Gestion = () => {

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [gestion, setGestion] = useState([]);
    const [titulo, setTitulo] = useState("Gestionar Usuarios");

    useEffect(() => {
        if (mostrarTabla) {
            setTitulo("Gestionar Usuarios");
        } else {
            setTitulo("Ver lista de usuarios");
        }

    }, [mostrarTabla]);

    useEffect(() => {

        setGestion(listaUsuarios);
    }, [listaUsuarios]);


    const AgregarUsuario = ({
        crearDato,
        listaUsuarios
    }) => {
        const form = useRef(null);

        const submitFrom = (e) => {
            e.preventDefault();
            const fd = new FormData(form.current);
            const nuevoUsuario = {};

            fd.forEach((value, key) => {
                nuevoUsuario[key] = value;
            });

            setGestion([...listaUsuarios, nuevoUsuario]);


        }



        return (
            <div className="carUser">
                <div className="carUser-img">
                    <i className='bx bx-user-circle' ></i>
                </div>
                <div className="carUser-formulario">
                    <form action="" ref={form} onSubmit={submitFrom}>
                        <div className="carUser-datos">
                            <label for="nombre">Nombre</label>
                            <input type="text" id="nombre" name="nombre" placeholder="Ingrese el nombre" required />
                        </div>

                        <div className="carUser-datos">
                            <label for="nombre">Correo</label>
                            <input type="email" id="correo" name="correo" placeholder="Ingrese el correo" required />
                        </div>

                        <div className="carUser-datos">
                            <p>
                                Rol: <br />
                                <select name="rol">
                                    <option >Administrador</option>
                                    <option>Vendedor</option>
                                </select>
                            </p>
                        </div>

                        <div className="carUser-datos">
                            <p>
                                Estado: <br />
                                <select name="estado">
                                    <option >Pendiente</option>
                                    <option>Autorizado</option>
                                    <option>No Autorizado</option>
                                </select>
                            </p>
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

    const ListaUsuarios = ({ listaPersonas }) => {
        useEffect(() => {
            console.log("aca me muestra algo", listaPersonas);
        }, [listaPersonas])
        return (

            <div>
                <div className="buscador_actu">
                    <div>
                        <button type="button" name="name" id="buttom" className="Actuali_zar">Actualizar</button>
                        <input className="Busca_dor" type="text" placeholder="Buscar" required />
                        <button type="button" name="name" id="buttom" className="buscar-botonp">Buscar</button>
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
                            </tr>
                        </thead>
                        <tbody>
                            {listaPersonas.map((usuario) => {
                                return (
                                    <tr key={nanoid()}>
                                        <td>{usuario.nombre}</td>
                                        <td>{usuario.rol}</td>
                                        <td>{usuario.correo}</td>
                                        <td>{usuario.estado}</td>
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

