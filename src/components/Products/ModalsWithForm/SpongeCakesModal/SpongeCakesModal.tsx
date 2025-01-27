import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { FormsWrapper } from '../FormsWrapper/FormsWrapper'

import { OrderContext } from '../../Category'
import { Dropdown } from 'src/components/ui/Dropdown'

interface ISpongeCakesModalProps {
  productKey: string
  dropdowns: {
    options: string[]
    placeholderKey: string
    stateKey: string
    disabled?: boolean
  }[]
}

export const SpongeCakesModal = ({
  productKey,
  dropdowns,
}: ISpongeCakesModalProps) => {
  const { t } = useTranslation()
  const orderContext = useContext(OrderContext)

  return (
    <FormsWrapper productKey={productKey}>
      {dropdowns.map(({ options, placeholderKey, stateKey, disabled }) => (
        <Dropdown
          key={stateKey}
          options={options}
          value={orderContext?.order?.options[stateKey] || ''}
          onChange={(value: string) =>
            orderContext?.handleUpdateOrder(stateKey, value)
          }
          placeholder={t(placeholderKey)}
          disabled={disabled}
        />
      ))}
    </FormsWrapper>
  )
}
