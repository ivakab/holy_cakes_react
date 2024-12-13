import { useTranslation } from 'react-i18next'

export const useLocalizedBentoOptions = () => {
  const { t } = useTranslation()

  const bentoSizes = [
    t('products.bento.sizes.m'),
    t('products.bento.sizes.l'),
    t('products.bento.sizes.heart'),
  ]

  const bentoSponges = [
    t('products.bento.sponges.choko'),
    t('products.bento.sponges.vanilla'),
    t('products.bento.sponges.carrot'),
  ]

  const bentoFillings = [
    t('products.bento.fillings.cherry'),
    t('products.bento.fillings.caramel'),
    t('products.bento.fillings.strawberry'),
  ]

  return { bentoSizes, bentoSponges, bentoFillings }
}
