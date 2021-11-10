import { useRef } from 'react'
import { useCart } from '../../hooks/useCart'
import Form from '../Form/Form'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Message from '../Message/Message'
import classes from './Summary.module.css'

const Summary = () => {
  const { total, activePromo, setActivePromo, error, setError } = useCart()
  const promoRef = useRef()

  const handlePromoCode = () => {
    validatePromoCode(promoRef.current.value)
  }

  const validatePromoCode = (value) => {
    const code = value.replace(/[^0-9]/g, '')
    if (code.length < 2 || code.length > 8) {
      setError('Niepoprawny kod promocyjny')
    } else {
      setActivePromo({ promo: value, discount: code.length })
    }
  }
  return (
    <div className={classes.summary}>
      <div className={classes.header}>
        Łączna kwota: <span className={classes.total}>{`${total} zł`}</span>
      </div>
      <div className={classes['promo-section']}>
        {activePromo ? (
          <p className={classes['promo-message']}>
            Aktywny kod promocyjny: "<strong>{activePromo.promo}</strong>".
            Zniżka{' '}
            <span className={classes.discount}>{activePromo.discount}%</span>
          </p>
        ) : (
          <div className={classes['input-group']}>
            <Input
              type="text"
              placeholder="Masz kod rabatowy?"
              ref={promoRef}
            />
            {error && <Message type="error">{error}</Message>}
            <Button onClick={handlePromoCode}>Aktywuj</Button>
          </div>
        )}
      </div>
      <Form />
    </div>
  )
}

export default Summary
