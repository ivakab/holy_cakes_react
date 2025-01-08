import { useTranslation } from 'react-i18next'
import { ICategory } from './interfaces'

export const CategoryCard = ({
  category,
  onClick,
}: {
  category: ICategory
  onClick: () => void
}) => {
  const { t } = useTranslation()

  return (
    <div
      className={`flex-[1_1_calc(50%-5px)] max-w-[calc(50%-5px)] p-4 rounded-lg cursor-pointer text-center bg-white
      text-black shadow-md transition-transform duration-200 hover:scale-[1.02]`}
      onClick={onClick}
    >
      <div className={'relative w-full pt-[100%] overflow-hidden mb-2'}>
        <img
          src={category.image}
          alt={category.name}
          className={'absolute top-0 left-0 w-full h-full object-cover'}
        />
      </div>
      {t(`products.categories.${category.id}`)}
    </div>
  )
}
