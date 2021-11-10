import { useState, createContext, useContext, useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const CartContext = createContext()

export const useCart = () => {
  return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('cart', [])
  const [total, setTotal] = useState()
  const [activePromo, setActivePromo] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const calculateTotal = (promo) => {
      const total = cart
        .reduce((prev, curr) => {
          return prev + curr.quantity * curr.price
        }, 0)
        .toFixed(2)
      if (!promo) {
        setTotal(total)
      } else {
        setTotal((total - (total * promo.discount) / 100).toFixed(2))
      }
    }

    calculateTotal(activePromo)
  }, [cart, activePromo])

  const addToCart = (product) => {
    // check if product is already in the cart
    const item = cart.find((item) => item.id === product.id)
    if (item) {
      // if so increase quantity
      const updatedCart = cart.map((item) => {
        return item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      })
      setCart(updatedCart)
    } else {
      // else add product to cart
      setCart((prev) => [...prev, { ...product, quantity: 1 }])
    }
  }

  const updateQuantity = (product, quantity) => {
    const updatedCart = cart.map((item) => {
      return item.id === product.id ? { ...item, quantity } : item
    })
    setCart(updatedCart)
  }

  const deleteFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id)
    setCart(updatedCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const value = {
    cart,
    total,
    activePromo,
    error,
    addToCart,
    updateQuantity,
    deleteFromCart,
    setActivePromo,
    setError,
    clearCart,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
