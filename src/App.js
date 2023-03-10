import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/details/:id' element={ <ProductDetails/> }/>
/      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
