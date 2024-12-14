import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Dropdown } from 'components/core-components/Dropdown'
import { useLocalizedBentoOptions } from './hooks/useLocalizedBentoOptions'
import DatePicker from 'react-datepicker'
import { registerLocale } from 'react-datepicker'
import { sr } from 'date-fns/locale/sr'
import { enUS } from 'date-fns/locale/en-US'
import { ru } from 'date-fns/locale/ru'
import 'react-datepicker/dist/react-datepicker.css'

import styles from './BentoModal.module.scss'

registerLocale('sr', sr)
registerLocale('en', enUS)
registerLocale('ru', ru)

export const BentoModal = () => {
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedFilling, setSelectedFilling] = useState('')
  const [selectedSponge, setSelectedSponge] = useState('')
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const { bentoSizes, bentoSponges, bentoFillings } = useLocalizedBentoOptions()

  const { t, i18n } = useTranslation()

  const currentLocale = i18n.language

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

        <div>
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            placeholderText={t('products.bento.select_date_placeholder')}
            dateFormat={'dd/MM/yyyy'}
            minDate={new Date()}
            locale={currentLocale}
            className={styles.customInput}
          />
        </div>
      </div>
    </div>
  )
}
