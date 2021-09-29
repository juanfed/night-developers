
// importe de stilos de la pagina

import 'styles/resect.css';
import 'styles/stilosIndex.css';

// dependencias 

import Index from 'pages';
import Footer from 'components/Footer';


function App() {
  return ( /*Aca se incluiran todas las paginas de nuestro sitio web */
    <div className="App">
      <Index/>

      <Footer />
    </div>
  );
}

export default App;
