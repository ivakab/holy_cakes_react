import React from 'react'
import { useLocalizedOptions } from '../hooks/useLocalizedOptions'
import { SpongeCakesModal } from '../SpongeCakesModal/SpongeCakesModal'

export const CupcakesModal = () => {
  const { cupcakesCount, cupcakesSponges, cupcakesFillings } =
    useLocalizedOptions()

  return (
    <SpongeCakesModal
      productKey={'cupcakes'}
      dropdowns={[
        {
          options: cupcakesCount,
          placeholderKey: 'products.placeholders.select_count',
          stateKey: 'count',
        },
        {
          options: cupcakesSponges,
          placeholderKey: 'products.placeholders.select_sponge',
          stateKey: 'sponge',
        },
        {
          options: cupcakesFillings,
          placeholderKey: 'products.placeholders.select_filling',
          stateKey: 'filling',
        },
      ]}
    />
  )
}
