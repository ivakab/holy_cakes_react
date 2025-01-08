export interface ProductOrder {
  id: string
  productKey: string
  options: Record<string, string>
  date: string | null
}

export interface OrderState {
  products: ProductOrder[]
}
