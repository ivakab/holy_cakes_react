import React from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import { Button } from '../Button/Button'

import styles from './Header.module.css'

const Header = () => {
  const { user, onClose } = useTelegram()

  return (
    <div className={styles.header}>
      <Button onClick={onClose}>Close</Button>
      <span className={styles.username}>{user?.userName}</span>
    </div>
  )
}
