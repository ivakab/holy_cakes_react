import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocalizedOptions } from '../hooks/useLocalizedOptions'
import { FormsWrapper } from '../FormsWrapper/FormsWrapper'

import { OrderContext } from '../../Category'
import { Dropdown } from 'src/components/ui/Dropdown'

export const MacaronsModal = () => {
  const { macaronsTastes } = useLocalizedOptions()
  const orderContext = useContext(OrderContext)

  const { t } = useTranslation()

  const macaronsCount = Array.from({ length: 100 }, (_, index) =>
    String(index + 1),
  )

  return (
    <FormsWrapper productKey={'macarons'}>
      <Dropdown
        options={macaronsCount}
        value={orderContext?.order?.options['count'] || ''}
        onChange={(value: string) =>
          orderContext?.handleUpdateOrder('count', value)
        }
        placeholder={t('products.placeholders.select_count')}
      />

      <Dropdown
        options={macaronsTastes}
        value={orderContext?.order?.options['taste'] || ''}
        onChange={(value: string) =>
          orderContext?.handleUpdateOrder('taste', value)
        }
        placeholder={t('products.placeholders.select_taste')}
      />
    </FormsWrapper>
  )
}
