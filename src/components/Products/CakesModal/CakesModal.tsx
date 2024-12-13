import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { cakeSizes } from './constants/CakesOptions'
import { Dropdown } from 'components/core-components/Dropdown'

export const CakesModal = () => {
  const [selectedSize, setSelectedSize] = useState('')
  const { t } = useTranslation()

  const handleChange = (value: string) => {
    setSelectedSize(value)
  }

  return (
    <div>
      <Dropdown
        options={cakeSizes}
        value={selectedSize}
        onChange={handleChange}
        placeholder="Select size"
      />
      {selectedSize && <p>Selected: {selectedSize}</p>}
    </div>
  )
}
