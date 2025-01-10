import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { ProductOrder } from 'store/models/IOrders'
import { removeProduct } from '../../store/reducers/OrderSlice'
import { CoreButton } from '../ui/Button'
import { FiX } from 'react-icons/fi'

interface IOrdersCartProps {
  products: ProductOrder[]
}

export const OrdersCart = ({ products }: IOrdersCartProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const handleRemoveProduct = (productId: string) => {
    dispatch(removeProduct(productId))
  }

  return (
    <div className={'max-h-[65vh] overflow-y-auto'}>
      <h2 className={'text-xl font-bold mb-4'}>
        {t(`confirmation.confirmation_order_modal_title`)}
      </h2>

      {products.map((product) => (
        <div
          key={product.id}
          className={'relative flex flex-col mb-4 p-4 border rounded'}
        >
          <i
            onClick={() => handleRemoveProduct(product.id)}
            className={'absolute top-2 right-2 text-xl cursor-pointer'}
          >
            <FiX />
          </i>
          <div className={'font-semibold text-lg'}>
            {t(`products.categories.${product.productKey}`)}
          </div>
          <div className={'text-sm text-gray-600'}>
            Date: {product.date || 'No date specified'}
          </div>
          <div className={'mt-2'}>
            {Object.entries(product.options).map(([key, value]) => (
              <div key={key} className={'text-sm text-gray-700'}>
                <strong>{key}:</strong> {value}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
