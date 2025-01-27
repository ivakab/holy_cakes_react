import React, { ReactNode, useContext } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { useTranslation } from 'react-i18next'
import { enUS } from 'date-fns/locale/en-US'
import { ru } from 'date-fns/locale/ru'
import { sr } from 'date-fns/locale/sr'
import 'react-datepicker/dist/react-datepicker.css'
import { OrderContext } from '../../Category'
import clsx from 'clsx'

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
    <div className={'p-4'} id={'main-form'}>
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
          onChange={(date: Date | null) => {
            if (date) {
              const updatedDate = new Date(date)
              updatedDate.setHours(11)
              updatedDate.setMinutes(0)
              orderContext?.handleUpdateOrder('date', updatedDate)
            }
          }}
          placeholderText={t('products.placeholders.select_date')}
          dateFormat={'dd/MM/yyyy'}
          minDate={new Date()}
          locale={currentLocale}
          className={'w-full p-2 border border-gray-300 rounded outline-none'}
          portalId={'main-form'}
        />

        <DatePicker
          selected={
            orderContext?.order?.date ? new Date(orderContext.order.date) : null
          }
          onChange={(time: Date | null) => {
            if (time && orderContext?.order?.date) {
              const updatedDate = new Date(orderContext.order.date)
              updatedDate.setHours(time.getHours())
              updatedDate.setMinutes(time.getMinutes())
              orderContext?.handleUpdateOrder('date', updatedDate)
            }
          }}
          placeholderText={t('products.placeholders.select_time')}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={60}
          timeCaption={t('products.placeholders.time')}
          dateFormat={'HH:mm'}
          disabled={!orderContext?.order?.date}
          timeClassName={(time) => {
            const hour = time.getHours()
            return hour < 10 || hour > 21 ? 'hidden' : ''
          }}
          locale={currentLocale}
          className={clsx(
            'w-full p-2 border rounded outline-none',
            orderContext?.order?.date
              ? 'border-gray-300'
              : 'border-gray-200 bg-gray-100 cursor-not-allowed',
          )}
          portalId={'main-form'}
        />
      </div>
    </div>
  )
}
