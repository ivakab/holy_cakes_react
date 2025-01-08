import React, { ReactNode, useContext } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { useTranslation } from 'react-i18next'
import { enUS } from 'date-fns/locale/en-US'
import { ru } from 'date-fns/locale/ru'
import { sr } from 'date-fns/locale/sr'
import 'react-datepicker/dist/react-datepicker.css'
import { OrderContext } from '../../Category'

interface IFormsWrapperProps {
  productKey: string
  children: ReactNode
}

registerLocale('en', enUS)
registerLocale('ru', ru)
registerLocale('sr', sr)

export const FormsWrapper = ({ productKey, children }: IFormsWrapperProps) => {
  const { t, i18n } = useTranslation()
  const currentLocale = i18n.language
  const orderContext = useContext(OrderContext)

  return (
    <div className={'p-4'}>
      <h2 className={'text-2xl font-bold text-center mb-5'}>
        {t('products.placeholders.modal_header', {
          product: t(`products.categories.${productKey}`),
        })}
      </h2>

      <div className={'flex flex-col gap-4'}>
        {children}

        <DatePicker
          selected={
            orderContext?.order?.date ? new Date(orderContext.order.date) : null
          }
          onChange={(date: Date | null) =>
            orderContext?.handleUpdateOrder('date', date)
          }
          placeholderText={t('products.placeholders.select_date')}
          dateFormat={'dd/MM/yyyy'}
          minDate={new Date()}
          locale={currentLocale}
          className={'w-full p-2 border border-gray-300 rounded outline-none'}
        />
      </div>
    </div>
  )
}
