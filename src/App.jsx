// dependencias 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Index from 'pages';
import Login from 'pages/login';
import Producto from 'pages/producto';
import Ventas from 'pages/ventas';
import Gestion from "pages/gestion";
import Registro from "components/registro";




function App() {
  return ( /*Aca se incluiran todas las paginas de nuestro sitio web */
    <div className="App">
      <Router>
        <Switch>

          <Route path='/registro' exact>
            <Registro/>
          </Route>

          <Route path='/index' exact>
            <Index />
          </Route>

          <Route path='/producto' exact>
            <Producto />
          </Route>

          <Route path='/ventas' exact>
            <Ventas />
          </Route>
          
          <Route path='/gestion'>
            <Gestion />
          </Route>

          <Route path='/'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
