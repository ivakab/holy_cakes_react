import React, { useContext, useEffect } from 'react'
import { useLocalizedOptions } from '../hooks/useLocalizedOptions'
import { SpongeCakesModal } from '../SpongeCakesModal/SpongeCakesModal'
import { OrderContext } from '../../../Products/Category'

export const CakesModal = () => {
  const { cakesSizes, cakesFlavours } = useLocalizedOptions()
  const orderContext = useContext(OrderContext)

  const selectedSponge = orderContext?.order?.options?.sponge

  useEffect(() => {
    orderContext?.handleUpdateOrder('filling', null)
  }, [selectedSponge])

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
          options: Object.keys(cakesFlavours),
          placeholderKey: 'products.placeholders.select_flavour',
          stateKey: 'sponge',
        },
        {
          options: selectedSponge ? cakesFlavours[selectedSponge] : [],
          placeholderKey: 'products.placeholders.select_flavour',
          stateKey: 'filling',
          disabled: !selectedSponge,
        },
      ]}
    />
  )
}
