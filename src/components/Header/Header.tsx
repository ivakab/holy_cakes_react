import { LanguageSelection } from '../LanguageSelection/LanguageSelection'

import React from 'react'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.text}>HOLY CAKES</div>
      <LanguageSelection />
    </div>
  )
}
