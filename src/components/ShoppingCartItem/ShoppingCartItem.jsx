import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { useTimeout } from '../../hooks/useTimeout'
import Input from '../Input/Input'
import { ReactComponent as TimesIcon } from '../../images/icon-times.svg'
import { ReactComponent as TrashIcon } from '../../images/icon-trash.svg'
import classes from './ShoppingCartItem.module.css'

const ShoppingCartItem = ({ item }) => {
  const { updateQuantity, deleteFromCart } = useCart()
  const [timer, runTimer, clearTimer] = useTimeout(
    () => deleteFromCart(item),
    1500
  )

  const handleChange = (e, item) => {
    if (timer) clearTimer()
    const quantity = parseInt(e.target.value)
    if (quantity > 0) {
      updateQuantity(item, quantity)
    } else if (quantity === 0 || isNaN(quantity)) {
      updateQuantity(item, '')
      runTimer()
    }
  }

  return (
    <li className={classes.item}>
      <div>
        <div className={classes.image}>
          <Link to={`/products/${item.id}`}>
            <img
              src={`${process.env.PUBLIC_URL}/${item.img}`}
              alt={item.name}
            />
          </Link>
        </div>
        <Link to={`/products/${item.id}`}>
          <h3 className={classes.title}>{item.name}</h3>
        </Link>
      </div>
      <div>
        <p>{`${item.price} zł`}</p>
        <TimesIcon className={classes['icon-times']} />
        <Input
          type="number"
          value={item.quantity}
          onChange={(e) => handleChange(e, item)}
          className={classes.quantity}
        />
        <TrashIcon
          className={classes['icon-delete']}
          onClick={() => deleteFromCart(item)}
        />
      </div>
    </li>
  )
}

export default ShoppingCartItem
