import React from 'react'

import { IButtonProps } from './models/IButtonProps'

import styles from './Button.module.scss'

export const Button = ({
  color = 'bright',
  className,
  onClick,
  children,
}: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[`button--${color}`]} ${className || ''}`}
    >
      {children}
    </button>
  )
}
