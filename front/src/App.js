import React from "react";
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from "./admin/Carousel";
import AdminPanel from "./admin/adminpanel";













function App(){
  return(
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Home />}/>
<Route path="login" element={<Login />}/>
<Route path="carousel" element={<Carousel />}/>
<Route path="adminpanel" element={<AdminPanel />}/>






    </Routes>
    
    </BrowserRouter>
  )
}

export default App;