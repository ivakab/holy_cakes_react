import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './BentoModal.module.scss'
import { Dropdown } from 'components/core-components/Dropdown'
import { useLocalizedBentoOptions } from './hooks/useLocalizedBentoOptions'

export const BentoModal = () => {
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedFilling, setSelectedFilling] = useState('')
  const [selectedSponge, setSelectedSponge] = useState('')
  const { bentoSizes, bentoSponges, bentoFillings } = useLocalizedBentoOptions()

  const { t } = useTranslation()

  return (
    <div>
      <h2 className={styles.title}>{t('products.bento.modal_header')}</h2>

      <div className={styles.form}>
        <Dropdown
          options={bentoSizes}
          value={selectedSize}
          onChange={(value: string) => setSelectedSize(value)}
          placeholder={t('products.bento.select_size')}
        />

        <Dropdown
          options={bentoSponges}
          value={selectedSponge}
          onChange={(value: string) => setSelectedSponge(value)}
          placeholder={t('products.bento.select_sponge')}
        />

        <Dropdown
          options={bentoFillings}
          value={selectedFilling}
          onChange={(value: string) => setSelectedFilling(value)}
          placeholder={t('products.bento.select_filling')}
        />
      </div>
    </div>
  )
}
