import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Shop from "./pages/shop"
import LoginSignup from "./pages/LoginSignup"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import ShopCategory from "./pages/ShopCategory"


export default function  App() {
  return (
    <main>
      <BrowserRouter>
      <Navbar />    
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory className="shopCategory-banner"  category="men"/>} />
          <Route path="/womens" element={<ShopCategory  category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid"/>} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="login" element={<LoginSignup />} />
        
        </Routes>
        
        
      
      </BrowserRouter>
      
    </main>
  )
}
