import React from 'react'
import { useLocalizedOptions } from '../hooks/useLocalizedOptions'
import { SpongeCakesModal } from '../SpongeCakesModal/SpongeCakesModal'

export const CakesModal = () => {
  const { cakesSizes, cakesFlavours } = useLocalizedOptions()

  return (
    <SpongeCakesModal
      productKey={'cakes'}
      dropdowns={[
        {
          options: cakesSizes,
          placeholderKey: 'products.placeholders.select_size',
          stateKey: 'size',
        },
        {
          options: cakesFlavours,
          placeholderKey: 'products.placeholders.select_flavour',
          stateKey: 'flavour',
        },
      ]}
    />
  )
}
