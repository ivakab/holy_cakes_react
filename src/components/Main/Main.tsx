import React from 'react'

import styles from './Main.module.scss'
import { useTranslation } from 'react-i18next'

export const Main = () => {
  const { t } = useTranslation()

  return <div className={styles.root}> {t('description')}</div>
}
