import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FormsWrapper } from '../FormsWrapper/FormsWrapper'
import { Dropdown } from '../../../ui/Dropdown'

interface ISpongeCakesModalProps {
  productKey: string
  dropdowns: {
    options: string[]
    placeholderKey: string
    stateKey: string
  }[]
}

export const SpongeCakesModal = ({
  productKey,
  dropdowns,
}: ISpongeCakesModalProps) => {
  const [state, setState] = useState<Record<string, string>>({})
  const { t } = useTranslation()

  const handleChange = (key: string, value: string) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  return (
    <FormsWrapper productKey={productKey}>
      {dropdowns.map(({ options, placeholderKey, stateKey }, index) => (
        <Dropdown
          key={index}
          options={options}
          value={state[stateKey] || ''}
          onChange={(value: string) => handleChange(stateKey, value)}
          placeholder={t(placeholderKey)}
        />
      ))}
    </FormsWrapper>
  )
}
