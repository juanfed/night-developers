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




function App() {
  return ( /*Aca se incluiran todas las paginas de nuestro sitio web */
    <div className="App">
      <Router>
        <Switch>
          <Route path='/index'>
            <Index />
          </Route>

          <Route path='/producto'>
            <Producto />
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
