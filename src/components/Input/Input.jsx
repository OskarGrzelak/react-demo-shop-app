import { forwardRef } from 'react'
import classes from './Input.module.css'

const Input = forwardRef(
  ({ type, placeholder, value, onChange, className }, ref) => {
    let styles = [classes.input]
    if (className) styles.push(className)
    return (
      <input
        className={styles.join(' ')}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={ref}
      />
    )
  }
)

export default Input
