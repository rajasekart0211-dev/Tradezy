import Navbar from "./Components/Navbar/Navbar"
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import Shop from './Pages/Shop.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
import Product from './Pages/Product.jsx' 
import Cart from './Pages/Cart.jsx'
import Login from './Pages/Login.jsx'
import Footer from './Components/Footer/Footer.jsx'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kid_banner from './assets/banner_kids.png'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App