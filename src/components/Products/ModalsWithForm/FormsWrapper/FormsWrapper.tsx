import React, { ReactNode, useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { useTranslation } from 'react-i18next'
import { enUS } from 'date-fns/locale/en-US'
import { ru } from 'date-fns/locale/ru'
import { sr } from 'date-fns/locale/sr'
import styles from './FormsWrapper.module.scss'
import 'react-datepicker/dist/react-datepicker.css'

interface IFormsWrapperProps {
  productKey: string
  children: ReactNode
}

registerLocale('en', enUS)
registerLocale('ru', ru)
registerLocale('sr', sr)

export const FormsWrapper = ({ productKey, children }: IFormsWrapperProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const { t, i18n } = useTranslation()
  const currentLocale = i18n.language

  return (
    <div>
      <h2 className={styles.title}>
        {t('products.placeholders.modal_header', {
          product: t(`products.categories.${productKey}`),
        })}
      </h2>

      <div className={styles.form}>
        {children}

        <div>
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            placeholderText={t('products.placeholders.select_date')}
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
