import classes from './Message.module.css'

const Message = ({ children, type }) => {
  let styles = [classes.message]
  if (type) styles.push(classes[type])

  return <p className={styles.join(' ')}>{children}</p>
}

export default Message
