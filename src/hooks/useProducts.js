import { useState, useEffect } from 'react'

export const useProducts = (id) => {
  const [products, setProducts] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getProducts = async (id) => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/products.json`)
        const data = await response.json()
        if (!id) {
          setProducts(data)
        } else {
          setProducts(data.filter((product) => product.id === parseInt(id)))
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    getProducts(id)
  }, [id])

  return { products, loading, error }
}
