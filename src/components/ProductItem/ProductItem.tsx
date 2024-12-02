import React from 'react'
import { Button } from '../Button/Button'
import { IProduct } from '../interfaces'
import styles from './ProductItem.module.css'

interface IProps {
  product: IProduct
  onAdd: (value: IProduct) => void
  className?: string
}

export const ProductItem = ({ product, className, onAdd }: IProps) => {
  const onAddHandler = () => {
    onAdd(product)
  }

  return (
    <div className={`${styles.product} ${className}`}>
      <div className={styles.img} />
      <div className={styles.title}>{product.title}</div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.price}>
        <span>
          Price: <b>{product.price}</b>
        </span>
      </div>
      <Button className={'add-btn'} onClick={onAddHandler}>
        Add prdouct
      </Button>
    </div>
  )
}
