import { useParams } from 'react-router-dom'
import { useProducts } from '../../hooks/useProducts'
import { useCart } from '../../hooks/useCart'
import Container from '../Container/Container'
import Loader from '../Loader/Loader'
import Button from '../Button/Button'
import classes from './Product.module.css'

const Product = () => {
  const { id } = useParams()
  const { products, loading } = useProducts(id)
  const [product] = products || []
  const { addToCart } = useCart()
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        product && (
          <div className={classes.product}>
            <div className={classes.image}>
              <img
                src={`${process.env.PUBLIC_URL}/${product.img}`}
                alt={product.name}
              />
            </div>
            <div className={classes.content}>
              <h2 className={classes.title}>{product.name}</h2>
              {product.description.split('\n').map((paragraph, index) => (
                <p className={classes.description} key={index}>
                  {paragraph}
                </p>
              ))}
              <p className={classes.price}>{product.price} zł</p>
              <Button onClick={() => addToCart(product)}>
                Dodaj do koszyka
              </Button>
            </div>
          </div>
        )
      )}
    </Container>
  )
}

export default Product
