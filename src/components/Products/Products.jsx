import { useProducts } from '../../hooks/useProducts'
import Container from '../Container/Container'
import Loader from '../Loader/Loader'
import Card from '../Card/Card'
import classes from './Products.module.css'

const Products = () => {
  const { products, loading } = useProducts()
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        products && (
          <div className={classes.products}>
            {products.map((product) => (
              <Card product={product} key={product.id} />
            ))}
          </div>
        )
      )}
    </Container>
  )
}

export default Products
