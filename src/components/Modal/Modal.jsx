import classes from './Modal.module.css'

const Modal = ({ email, onClick }) => {
  return (
    <div className={classes.modal} onClick={onClick}>
      <div className={classes.content}>
        <h2>Gratulacje!</h2>
        <p>Twoje zamówienie zostało przyjęte do realizacji.</p>
        <p>
          Szczegóły wysłaliśmy na adres email <strong>{email}</strong>.
        </p>
      </div>
    </div>
  )
}

export default Modal
