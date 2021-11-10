import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import classes from './Card.module.css'
import Button from '../Button/Button'

const Card = ({ product }) => {
  const { name, description, img, price, id } = product
  const { addToCart } = useCart()

  return (
    <div className={classes.card}>
      <Link to={`/products/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/${img}`}
          alt={name}
          className={classes.image}
        />
      </Link>
      <div className={classes.content}>
        <Link to={`/products/${id}`}>
          <h2 className={classes.title}>{name}</h2>
        </Link>
        <p className={classes.description}>{description.slice(0, 80)}...</p>
        <p className={classes.price}>{`${price} zł`}</p>
      </div>
      <Button onClick={() => addToCart(product)}>Dodaj do koszyka</Button>
    </div>
  )
}

export default Card
