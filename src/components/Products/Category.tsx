import React, { useState, createContext } from 'react'
import { CakesModal } from './ModalsWithForm/CakesModal/CakesModal'
import { BentoModal } from './ModalsWithForm/BentoModal/BentoModal'
import { CupcakesModal } from './ModalsWithForm/CupcakesModal/CupcakesModal'
import { MacaronsModal } from './ModalsWithForm/MacaronsModal/MacaronsModal'

import { useDispatch } from 'react-redux'
import { addProduct } from 'src/store/reducers/OrderSlice'
import { ProductOrder } from 'src/store/models/IOrders'
import { nanoid } from 'nanoid'
import { CategoryCard } from './CategoryCard'
import { ICategory } from './interfaces'
import { Modal } from 'src/components/ui/Modal'

interface ICategoryComponents {
  [key: string]: () => JSX.Element
}

const categories = [
  { id: 'cakes', name: 'Cakes', image: '/images/cakes.webp' },
  { id: 'bento', name: 'Bento', image: '/images/bento.webp' },
  { id: 'cupcakes', name: 'Cupcakes', image: '/images/cupcakes.webp' },
  { id: 'macarons', name: 'Macarons', image: '/images/macarons.webp' },
]

const categoryComponents: ICategoryComponents = {
  cakes: CakesModal,
  bento: BentoModal,
  cupcakes: CupcakesModal,
  macarons: MacaronsModal,
}

interface OrderContextType {
  order: ProductOrder | null
  handleUpdateOrder: (key: string, value: string | Date | null) => void
}

export const OrderContext = createContext<OrderContextType | undefined>(
  undefined,
)

export const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
    null,
  )
  const dispatch = useDispatch()
  const [order, setOrder] = useState<ProductOrder | null>(null)

  const SelectedComponent =
    selectedCategory && categoryComponents[selectedCategory.id]

  const handleUpdateOrder = (key: string, value: string | Date | null) => {
    setOrder((prevOrder) => {
      if (!prevOrder) {
        return prevOrder
      }

      if (key === 'date' && value instanceof Date) {
        return {
          ...prevOrder,
          date: value.toISOString(),
        }
      }

      if (typeof value === 'string' || value === null) {
        return {
          ...prevOrder,
          options: {
            ...prevOrder.options,
            [key]: value,
          },
        }
      }

      return prevOrder
    })
  }

  const openModal = (category: ICategory) => {
    setSelectedCategory(category)
    setOrder({
      id: nanoid(),
      productKey: category.id,
      options: {},
      date: null,
    })
  }

  const closeModal = () => {
    setSelectedCategory(null)
  }

  const onSave = async () => {
    if (!order) {
      return
    }

    try {
      dispatch(addProduct(order))
    } catch (err) {
      console.error('Error saving data:', err)
    } finally {
      closeModal()
    }
  }

  return (
    <div className={'overflow-auto max-h-[80vh] flex flex-wrap gap-2 p-5'}>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          onClick={() => openModal(category)}
        />
      ))}
      <Modal isOpen={!!selectedCategory} onClose={closeModal} onSave={onSave}>
        <OrderContext.Provider value={{ order, handleUpdateOrder }}>
          {SelectedComponent && <SelectedComponent />}
        </OrderContext.Provider>
      </Modal>
    </div>
  )
}
