import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Category } from './interfaces'
import { CakesModal } from './CakesModal/CakesModal'
import { BentoModal } from './BentoModal/BentoModal'
import { CupcakesModal } from './CupcakesModal/CupcakesModal'
import { MacaronsModal } from './MacaronsModal/MacaronsModal'
import { Modal } from 'components/core-components/Modal'

import styles from './Products.module.scss'
import { useTelegram } from 'hooks/useTelegram'

const categories: Category[] = [
  { id: 'cakes', name: 'Cakes', image: '/images/cakes.jpg' },
  { id: 'bento', name: 'Bento', image: '/images/bento.jpg' },
  { id: 'cupcakes', name: 'Cupcakes', image: '/images/cupcakes.jpg' },
  { id: 'macarons', name: 'Macarons', image: '/images/macarons.jpg' },
]

interface ICategoryComponents {
  [key: string]: (props: any) => JSX.Element
}

const categoryComponents: ICategoryComponents = {
  cakes: CakesModal,
  bento: BentoModal,
  cupcakes: CupcakesModal,
  macarons: MacaronsModal,
}

export const Products = () => {
  const { queryId, user } = useTelegram()

  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  )

  const openModal = (category: Category) => {
    setSelectedCategory(category)
  }

  const closeModal = () => {
    setSelectedCategory(null)
  }

  const onSave = () => {
    const data = {
      info: ['addedItems', user?.username],
      sum: 2000,
      queryId,
    }
    fetch('http://localhost:8000/web-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

  const SelectedComponent = useMemo(() => {
    return selectedCategory ? categoryComponents[selectedCategory.id] : null
  }, [selectedCategory])

  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <div
          key={category.id}
          className={styles.category}
          onClick={() => openModal(category)}
        >
          <div className={styles.categoryImageWrapper}>
            <img
              src={category.image}
              alt={''}
              className={styles.categoryImage}
            />
          </div>
          {t(`products.categories.${category.id}`)}
        </div>
      ))}
      <Modal isOpen={!!selectedCategory} onClose={closeModal} onSave={onSave}>
        {SelectedComponent && <SelectedComponent />}
      </Modal>
    </div>
  )
}