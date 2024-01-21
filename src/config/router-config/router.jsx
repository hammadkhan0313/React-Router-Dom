import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../screens/About/Home/Home'
import About from '../../screens/About/About'
import Contact from '../../screens/About/Contact/Contact/'
import Product from '../../screens/About/Product/product/'
import Navbar from '../../components/Navbar'
import SingleProduct from '../../screens/About/SingleProduct/SingleProduct'

const Routers = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='About' element={<About />} />
                <Route path='Contact' element={<Contact />} />
                <Route path='Product' element={<Product />} />
                <Route path='singleproduct/:id' element={<SingleProduct/>} />

            </Routes>
        </BrowserRouter>
    )
}

export default Routers