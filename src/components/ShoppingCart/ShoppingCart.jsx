import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import Container from '../Container/Container'
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem'
import Summary from '../Summary/Summary'
import classes from './ShoppingCart.module.css'

const ShoppingCart = () => {
  const { cart } = useCart()

  return (
    <Container>
      {cart.length > 0 ? (
        <div className={classes.cart}>
          <ul className={classes.list}>
            {cart.map((item) => (
              <ShoppingCartItem item={item} key={item.id} />
            ))}
          </ul>
          <Summary />
        </div>
      ) : (
        <div className={classes.empty}>
          <h2>Twój koszyk jest pusty</h2>
          <Link to="/">Zobacz listę produktów &gt;&gt;&gt;</Link>
        </div>
      )}
    </Container>
  )
}

export default ShoppingCart
