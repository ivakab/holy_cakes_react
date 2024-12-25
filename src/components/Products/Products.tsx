import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Category } from './interfaces'
import { CakesModal } from './ModalsWithForm/CakesModal/CakesModal'
import { BentoModal } from './ModalsWithForm/BentoModal/BentoModal'
import { CupcakesModal } from './ModalsWithForm/CupcakesModal/CupcakesModal'
import { MacaronsModal } from './ModalsWithForm/MacaronsModal/MacaronsModal'
import { Modal } from '../ui/Modal'
import { useTelegram } from '../../hooks/useTelegram'

interface ICategoryComponents {
  [key: string]: (props: any) => JSX.Element
}

const categories = [
  { id: 'cakes', name: 'Cakes', image: '/images/cakes.jpg' },
  { id: 'bento', name: 'Bento', image: '/images/bento.jpg' },
  { id: 'cupcakes', name: 'Cupcakes', image: '/images/cupcakes.jpg' },
  { id: 'macarons', name: 'Macarons', image: '/images/macarons.jpg' },
]

const categoryComponents: ICategoryComponents = {
  cakes: CakesModal,
  bento: BentoModal,
  cupcakes: CupcakesModal,
  macarons: MacaronsModal,
}

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  )
  const [closing, setClosing] = useState(false)
  const { queryId } = useTelegram()
  const { t } = useTranslation()

  const openModal = (category: Category) => setSelectedCategory(category)

  const closeModal = () => {
    setClosing(true)
    setTimeout(() => {
      setSelectedCategory(null)
      setClosing(false)
    }, 200)
  }

  const onSave = () => {
    const data = {
      info: ['testData'],
      sum: 2000,
      queryId,
    }

    fetch('https://holycakes.shop/api/web-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    setSelectedCategory(null)
  }

  const SelectedComponent = useMemo(() => {
    return selectedCategory ? categoryComponents[selectedCategory.id] : null
  }, [selectedCategory])

  return (
    <div className={'overflow-auto max-h-[80vh] flex flex-wrap gap-2 p-5'}>
      {categories.map((category) => (
        <div
          key={category.id}
          className={`flex-[1_1_calc(50%-5px)] max-w-[calc(50%-5px)] p-4 rounded-lg cursor-pointer text-center bg-white
            text-black shadow-md transition-transform duration-200 hover:scale-[1.02]`}
          onClick={() => openModal(category)}
        >
          <div className={'relative w-full pt-[100%] overflow-hidden mb-2'}>
            <img
              src={category.image}
              alt={''}
              className={'absolute top-0 left-0 w-full h-full object-cover'}
            />
          </div>
          {t(`products.categories.${category.id}`)}
        </div>
      ))}
      queryID: {queryId}
      <Modal
        isOpen={!!selectedCategory && !closing}
        onClose={closeModal}
        onSave={onSave}
      >
        {SelectedComponent && <SelectedComponent />}
      </Modal>
    </div>
  )
}
