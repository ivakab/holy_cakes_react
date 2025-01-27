import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

import { OrdersCart } from '../../OrdersCart/OrdersCart'
import { sendOrdersData } from '../../../api/ordersApi'
import { useTelegram } from '../../../hooks/useTelegram'
import { useTranslation } from 'react-i18next'
import { formatDate } from '../../helpers/dateFormatHelper'
import { CoreButton } from 'src/components/ui/Button'
import { Modal } from 'src/components/ui/Modal'

export const ConfirmOrder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const products = useSelector((state: RootState) => state.order.products)
  const { queryId, user } = useTelegram()
  const { t } = useTranslation()

  const hasProducts = products.length > 0

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const onSave = async () => {
    const productsWithFormattedDate = products.map((product) => ({
      ...product,
      date: formatDate(product.date),
    }))

    const data = {
      products: productsWithFormattedDate,
      queryId,
      user,
    }

    await sendOrdersData(data)
    closeModal()
  }

  return (
    <>
      {hasProducts && (
        <div className={'fixed bottom-[12vh] left-0 w-full px-5'}>
          <CoreButton
            theme={'dark'}
            onClick={openModal}
            className={'w-full h-[10vh]'}
          >
            {t(`confirmation.confirmation_order_button`)}
            {products.length}
          </CoreButton>
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal} onSave={onSave}>
        <OrdersCart products={products} />
      </Modal>
    </>
  )
}
