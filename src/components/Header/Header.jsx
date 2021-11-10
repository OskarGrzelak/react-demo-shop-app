import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import Container from '../Container/Container'
import { ReactComponent as CartIcon } from '../../images/icon-cart.svg'
import classes from './Header.module.css'

const Header = () => {
  const { cart } = useCart()
  return (
    <header className={classes.header}>
      <Container>
        <nav className={classes.nav}>
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
          </Link>
          <Link to="/cart">
            <div className={classes['cart-button']}>
              <CartIcon className={classes.icon} />
              {cart.length > 0 && (
                <span className={classes.quantity}>
                  {cart.reduce((prev, curr) => {
                    return prev + curr.quantity
                  }, 0)}
                </span>
              )}
            </div>
          </Link>
        </nav>
      </Container>
    </header>
  )
}

export default Header
