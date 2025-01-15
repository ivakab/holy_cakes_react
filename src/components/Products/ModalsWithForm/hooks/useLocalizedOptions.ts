import { useTranslation } from 'react-i18next'

export const useLocalizedOptions = () => {
  const { t } = useTranslation()

  const bentoSizes = [
    t('products.bento.sizes.m'),
    t('products.bento.sizes.l'),
    t('products.bento.sizes.heart'),
  ]

  const bentoSponges = [
    t('products.sponges.choco'),
    t('products.sponges.vanilla'),
    t('products.sponges.carrot'),
  ]

  const bentoFillings = [
    t('products.fillings.cherry'),
    t('products.fillings.caramel'),
    t('products.fillings.strawberry'),
  ]

  const cupcakesCount = [6, 12].map(
    (count) => `${count} ${t('products.cupcakes.piece')}`,
  )

  const cupcakesSponges = [...bentoSponges, t('products.sponges.red_velvet')]

  const cupcakesFillings = [
    ...bentoFillings,
    t('products.fillings.raspberry'),
    t('products.fillings.orange_curd'),
  ]

  const cakesSizes = [
    'mini (1.2 kg)',
    '2 kg',
    '2.5 kg',
    '3 kg',
    '3.5 kg',
    '4 kg',
  ]

  const cakesFlavours = {
    [t('products.sponges.choco')]: [
      t('products.fillings.cherry'),
      t('products.fillings.caramel'),
    ],
    [t('products.sponges.vanilla')]: [
      t('products.fillings.strawberry'),
      t('products.fillings.cherry'),
    ],
    [t('products.sponges.carrot')]: [t('products.fillings.caramel')],
  }

  const macaronsTastes = [
    t('products.macarons.tastes.strawberry'),
    t('products.macarons.tastes.mango'),
  ]

  return {
    bentoSizes,
    bentoSponges,
    bentoFillings,
    cupcakesCount,
    cupcakesSponges,
    cupcakesFillings,
    cakesSizes,
    cakesFlavours,
    macaronsTastes,
  }
}
