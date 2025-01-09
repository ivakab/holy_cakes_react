import React, { useState } from 'react'
import { LanguageSelection } from '../LanguageSelection/LanguageSelection'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { CoreButton } from '../ui/Button'
import { Modal } from '../ui/Modal'
import { OrdersCart } from '../OrdersCart/OrdersCart'
import { sendOrdersData } from '../../api/ordersApi'
import { useTelegram } from '../../hooks/useTelegram'

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const products = useSelector((state: RootState) => state.order.products)
  const { queryId, user } = useTelegram()

  const hasProducts = products.length > 0

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const onSave = async () => {
    const data = {
      products: products,
      queryId,
      user,
    }

    await sendOrdersData(data)
    closeModal()
  }

  return (
    <div
      className={
        'bg-white text-black px-5 w-full h-[10vh] flex items-center justify-between relative'
      }
    >
      <div className={'text-xl font-bold'}>HOLY CAKES</div>
      {hasProducts && (
        <CoreButton theme={'dark'} onClick={openModal}>
          Confirm order
        </CoreButton>
      )}
      <LanguageSelection />

      <Modal isOpen={isModalOpen} onClose={closeModal} onSave={onSave}>
        <OrdersCart products={products} />
      </Modal>
    </div>
  )
}
