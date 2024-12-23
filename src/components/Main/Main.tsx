import React from 'react'
import { useTranslation } from 'react-i18next'

export const Main = () => {
  const { t } = useTranslation()

  return (
    <div className={'flex justify-center w-full p-5'}>{t('description')}</div>
  )
}
