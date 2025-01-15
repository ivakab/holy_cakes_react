import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { FormsWrapper } from '../FormsWrapper/FormsWrapper'
import { Dropdown } from '../../../ui/Dropdown'
import { OrderContext } from '../../Category'

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
