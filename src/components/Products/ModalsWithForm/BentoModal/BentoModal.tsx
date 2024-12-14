import React from 'react'
import { useLocalizedOptions } from '../hooks/useLocalizedOptions'

import { SpongeCakesModal } from '../SpongeCakesModal/SpongeCakesModal'

export const BentoModal = () => {
  const { bentoSizes, bentoSponges, bentoFillings } = useLocalizedOptions()

  return (
    <SpongeCakesModal
      productKey={'bento'}
      dropdowns={[
        {
          options: bentoSizes,
          placeholderKey: 'products.placeholders.select_size',
          stateKey: 'size',
        },
        {
          options: bentoSponges,
          placeholderKey: 'products.placeholders.select_sponge',
          stateKey: 'sponge',
        },
        {
          options: bentoFillings,
          placeholderKey: 'products.placeholders.select_filling',
          stateKey: 'filling',
        },
      ]}
    />
  )
}
