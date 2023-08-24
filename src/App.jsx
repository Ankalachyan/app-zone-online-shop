import "./App.css";
import Header from "./layouts/Header/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./layouts/Footer/Footer";
import Error from "./pages/Error/Error";
import MainProducts from "./pages/MainProducts/MainProducts";
import MainTypes from "./pages/MainType/MainType";
import ProductCart from "./pages/ProductType/ProductCart";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products/:id" element={<MainProducts/>}/>
                <Route path='/products/:id/:id' element={<MainTypes/>}/>   
                <Route path="/cart" element={<ProductCart/>}/>
                <Route path="*" element= {<Error/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
