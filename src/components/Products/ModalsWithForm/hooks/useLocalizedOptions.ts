import { useTranslation } from 'react-i18next'

export const useLocalizedOptions = () => {
  const { t } = useTranslation()

  const bentoSizes = [
    t('products.bento.sizes.m'),
    t('products.bento.sizes.l'),
    t('products.bento.sizes.heart'),
  ]

  const bentoSponges = [
    t('products.sponges.choko'),
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

  const cakesSizes = [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7].map(
    (count) => `${count} ${t('products.cakes.weight')}`,
  )

  const cakesFlavours = ['test value 1', 'test value 2', 'test value 3']

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
