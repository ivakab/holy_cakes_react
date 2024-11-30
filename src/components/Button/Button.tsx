import React, { ReactNode } from 'react'
import styles from './Button.module.css'

interface IProps {
  onClick: () => void
  children?: ReactNode
  className?: string
}

export const Button = (props: IProps) => {
  return <button {...props} className={styles.button + props.className} />
}
