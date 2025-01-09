import { Routes,Route } from "react-router-dom";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/PureSilkSaree";
import Contact from "./pages/Kurtis";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import SilkSaree from "./pages/PureSilkSaree";
import BestSelling from "./pages/Kurtis";

import "../src/index.css"
import PureSilkSaree from "./pages/PureSilkSaree";
import Kurtis from "./pages/Kurtis";

export default function App() {
  // State to track the active status of the cart

  return (
    <div>
      {/* <h1>Hello, world!</h1> */}
      <Navbar/>
      <SearchBar/>
      {/* <CartNotify /> */}

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/collection' element={<Collection/>}></Route>
        <Route path='/puresilksaree' element={<PureSilkSaree/>}></Route>
        <Route path='/kurtis' element={<Kurtis/>}></Route>
        <Route path='/product/:productId' element={<Product/>}></Route>
        {/* <Route path='/cart' element={<Cart/>}></Route> */}
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/cart-notify" element={<CartNotify />} /> */}
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/place-order' element={<PlaceOrder/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>

      </Routes>
      <Footer/>
    </div>
  );
}



