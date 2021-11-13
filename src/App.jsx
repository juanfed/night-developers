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
import Login from "pages/login";
import Registro from "components/registro";
import LayoutPublico from "layouts/LayoutPublico";
import HeaderPublico from "components/HeaderPublico";
// importacion para implementar la autenticacion con auth0
import { Auth0Provider } from "@auth0/auth0-react";





function App() {
  return ( /*Aca se incluiran todas las paginas de nuestro sitio web */
    <Auth0Provider
      domain='proyecto-tic.us.auth0.com'
      clientId='lh4lg09pxtnK7z21S0B4umftdiRP3iJZ'
      redirectUri='https://shielded-river-27357.herokuapp.com/admin' // ruta de heroku
    >
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
          <Route path={['/']}>
            <LayoutPublico>
              <Switch>
                <Route path='/'>
                  <HeaderPublico />
                </Route>
              </Switch>
            </LayoutPublico>
          </Route>
        </Switch>
      </Router>
    </Auth0Provider>
  );
}

export default App;
