// dependencias 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LayoutPrivado from "layouts/LayoutPrivado";
import LayoutRegistro from "layouts/LayoutRegistro";
import Producto from "pages/producto";
import Ventas from "pages/ventas";
import Gestion from "pages/gestion";
import Admin from "pages/Admin";
import Login from "pages/Login";
import Registro from "components/registro";





function App() {
  return ( /*Aca se incluiran todas las paginas de nuestro sitio web */
    <Router>
      <Switch>
        <Route path={['/admin', '/admin/producto', '/admin/ventas', '/admin/gestionUsuarios']}>
          <LayoutPrivado>
            <Switch>
              <Route path="/admin/producto">
                <Producto />
              </Route>
              <Route path="/admin/ventas">
                <Ventas />
              </Route>
              <Route path="/admin/gestionUser">
                <Gestion />
              </Route>
              <Route path="/admin">
                <Admin />
              </Route>
            </Switch>
          </LayoutPrivado>
        </Route>
        <Route path={['/login', '/registro']}>
          <LayoutRegistro>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/registro">
                <Registro />
              </Route>
            </Switch>
          </LayoutRegistro>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
