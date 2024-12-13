import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import styles from './Footer.module.scss'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <nav className={styles.footer}>
      <Link to="/" className={styles.navLink}>
        {t('footer.about')}
      </Link>
      <Link to="/works" className={styles.navLink}>
        {t('footer.works')}
      </Link>
      <Link to="/order" className={styles.navLink}>
        {t('footer.order')}
      </Link>
      <Link to="/events" className={styles.navLink}>
        {t('footer.events')}
      </Link>
    </nav>
  )
}
