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
import SideMenu from './component/SideMenu';


function App() {
  const [sidebar, setSidebar] = useState(false);
  useEffect(()=>{
    console.log("사이드바 변경", sidebar);
  }, [sidebar])
  return (
    <div className = "app">
      <Header sidebar = {sidebar} setSidebar={setSidebar}/>
      <Navbar/>
      <Routes>
        <Route path = "/" element={<MainContent/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product" element={<ProductAll/>}/>
        <Route path="/product/:id" element={<PrivateRoute/>}/>
      </Routes>
      {/*<SideMenu sidebar={sidebar} setSidebar={setSidebar}/>*/}
      <Footer/>
    </div>
  );
}

export default App;
