import React from 'react'
import { ProductOrder } from 'store/models/IOrders'

interface IOrdersCartProps {
  products: ProductOrder[]
}

export const OrdersCart = ({ products }: IOrdersCartProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex justify-between mb-2">
            <span>{product.productKey}</span>
            <span>{product.date}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
