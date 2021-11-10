import { useRef, useState } from 'react'
import { useModal } from '../../hooks/useModal'
import { useCart } from '../../hooks/useCart'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Message from '../Message/Message'
import Modal from '../Modal/Modal'
import classes from './Form.module.css'

const Form = () => {
  const { cart, clearCart, setActivePromo } = useCart()
  const [formData, setFormData] = useState()
  const [error, setError] = useState()
  const [modalOpen, setModalOpen, toggleModal] = useModal()
  const emailRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateEmail(emailRef.current.value)) {
      setFormData({
        email: emailRef.current.value,
        order: cart.map(({ id, quantity }) => {
          return { id, quantity }
        }),
      })
      setError('')
      setModalOpen(true)
    } else {
      setError('Nieprawidłowy email')
    }
  }

  const validateEmail = (value) => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
  }

  const handleModal = () => {
    clearCart()
    setActivePromo(null)
    toggleModal()
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={classes.group}>
          <Input type="email" placeholder="Podaj email" ref={emailRef} />
          {error && <Message type="error">{error}</Message>}
        </div>
        <Button>Zamów teraz</Button>
      </form>
      {modalOpen && <Modal onClick={handleModal} email={formData.email} />}
    </>
  )
}

export default Form
