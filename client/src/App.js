import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Prod_descr from './pages/Prod_descr';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <BrowserRouter> 
        <Route path='/' component={Home} exact></Route>

        <Route path='/product/:id' component={Prod_descr}></Route>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
