import React from 'react'
import styles from './button.module.css'

const Button = (  {children,dispatch}) => {

  return (
    <button className={styles.movieSectionButton} onClick={dispatch}>
        {children}
    </button>
  )
}

export default Button