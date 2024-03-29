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
  const [authenticate, setAuthenticate] = useState(false)
  const [sidebar, setSidebar] = useState(false);
  console.log("===== 새로고침 =====")
  console.log(authenticate, sidebar)
  useEffect(()=>{
    console.log("로그인 완", authenticate);
    console.log("사이드바 변경", sidebar);
  }, [authenticate, sidebar])
  return (
    <div className = "app">
      <Header authenticate={authenticate} setAuthenticate = {setAuthenticate} sidebar = {sidebar} setSidebar={setSidebar}/>
      <Navbar/>
      <Routes>
        <Route path = "/" element={<MainContent/>}/>
        <Route path="/login" element={<Login setAuthenticate = {setAuthenticate}/>}/>
        <Route path="/product" element={<ProductAll/>}/>
        <Route path="/product/:id" element={<PrivateRoute authenticate ={authenticate}/>}/>
      </Routes>
      {/*<SideMenu sidebar={sidebar} setSidebar={setSidebar}/>*/}
      <Footer/>
    </div>
  );
}

export default App;
