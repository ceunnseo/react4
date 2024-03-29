import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import PrivateRoute from './route/PrivateRoute';
import MainContent from './page/MainContent';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  const [authenticate, setAuthenticate] = useState(false)
  useEffect(()=>{
    console.log("로그인 완", authenticate);
  }, [authenticate])
  return (
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path = "/" element={<MainContent/>}/>
        <Route path="/login" element={<Login setAuthenticate = {setAuthenticate}/>}/>
        <Route path="/product" element={<ProductAll/>}/>
        <Route path="/product/:id" element={<PrivateRoute authenticate ={authenticate}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
