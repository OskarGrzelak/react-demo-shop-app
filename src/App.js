import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './hooks/useCart'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import Product from './components/Product/Product'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <CartProvider>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
        <Footer />
      </Layout>
    </CartProvider>
  )
}

export default App
