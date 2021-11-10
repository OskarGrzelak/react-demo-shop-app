import { useState } from 'react'

export const useTimeout = (callback, delay) => {
  const [timer, setTimer] = useState()
  const runTimer = () => {
    const timer = setTimeout(() => {
      callback()
    }, delay)
    setTimer(timer)
  }

  const clearTimer = () => {
    clearTimeout(timer)
  }

  return [timer, runTimer, clearTimer]
}
