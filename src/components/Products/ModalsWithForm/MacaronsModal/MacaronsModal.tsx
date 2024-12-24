import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocalizedOptions } from '../hooks/useLocalizedOptions'
import { FormsWrapper } from '../FormsWrapper/FormsWrapper'
import { Dropdown } from '../../../ui/Dropdown'

export const MacaronsModal = () => {
  const [selectedCount, setSelectedCount] = useState('')
  const [selectedTaste, setSelectedTaste] = useState('')

  const { macaronsTastes } = useLocalizedOptions()

  const { t } = useTranslation()

  const macaronsCount = Array.from({ length: 100 }, (_, index) =>
    String(index + 1),
  )

  return (
    <FormsWrapper productKey={'macarons'}>
      <Dropdown
        options={macaronsCount}
        value={selectedCount}
        onChange={(value: string) => setSelectedCount(value)}
        placeholder={t('products.placeholders.select_count')}
      />

      <Dropdown
        options={macaronsTastes}
        value={selectedTaste}
        onChange={(value: string) => setSelectedTaste(value)}
        placeholder={t('products.placeholders.select_taste')}
      />
    </FormsWrapper>
  )
}
