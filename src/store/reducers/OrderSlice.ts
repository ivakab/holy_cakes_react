import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OrderState, ProductOrder } from 'store/models/IOrders'

const initialState: OrderState = {
  products: [],
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductOrder>) => {
      state.products.push(action.payload)
    },
    updateProduct: (
      state,
      action: PayloadAction<{
        id: string
        key: string
        value: string | null
      }>,
    ) => {
      const { id, key, value } = action.payload
      const product = state.products.find((product) => product.id === id)

      if (product) {
        if (key === 'date') {
          product.date = value
        } else {
          product.options[key] = value as string
        }
      }
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      )
    },
    resetOrders: () => initialState,
  },
})

export const { addProduct, updateProduct, removeProduct, resetOrders } =
  orderSlice.actions

export default orderSlice.reducer
