import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Category } from './interfaces'
import { CakesModal } from './ModalsWithForm/CakesModal/CakesModal'
import { BentoModal } from './ModalsWithForm/BentoModal/BentoModal'
import { CupcakesModal } from './ModalsWithForm/CupcakesModal/CupcakesModal'
import { MacaronsModal } from './ModalsWithForm/MacaronsModal/MacaronsModal'
import { Modal } from 'components/ui/Modal'
import { useTelegram } from 'hooks/useTelegram'

import styles from './Products.module.scss'

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
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  )
  const [closing, setClosing] = useState(false)
  const { queryId } = useTelegram()

  const { t } = useTranslation()

  const openModal = (category: Category) => {
    setSelectedCategory(category)
  }

  const closeModal = () => {
    // Set closing to true to indicate the modal is closing
    setClosing(true)
    setTimeout(() => {
      // Remove the SelectedComponent after the close animation completes
      setSelectedCategory(null)
      setClosing(false)
    }, 200)
  }

  const onSave = () => {
    const data = {
      info: ['addedItems'],
      sum: 2000,
      queryId,
    }

    fetch('http://46.101.228.214:8000/web-data', {
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
