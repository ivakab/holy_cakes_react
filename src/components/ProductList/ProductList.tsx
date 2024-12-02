import React, { useCallback, useEffect, useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import { IProduct } from '../interfaces'
import { ProductItem } from '../ProductItem/ProductItem'
import styles from './ProductList.module.css'
import { Button } from '../Button/Button'
import { useTranslation } from 'react-i18next'

export const products = [
  {
    id: '1',
    title: 'Джинсы',
    price: 5000,
    description: 'Синего цвета, прямые',
  },
  {
    id: '2',
    title: 'Куртка',
    price: 12000,
    description: 'Зеленого цвета, теплая',
  },
  {
    id: '3',
    title: 'Джинсы 2',
    price: 5000,
    description: 'Синего цвета, прямые',
  },
  {
    id: '4',
    title: 'Куртка 8',
    price: 122,
    description: 'Зеленого цвета, теплая',
  },
  {
    id: '5',
    title: 'Джинсы 3',
    price: 5000,
    description: 'Синего цвета, прямые',
  },
  {
    id: '6',
    title: 'Куртка 7',
    price: 600,
    description: 'Зеленого цвета, теплая',
  },
  {
    id: '7',
    title: 'Джинсы 4',
    price: 5500,
    description: 'Синего цвета, прямые',
  },
  {
    id: '8',
    title: 'Куртка 5',
    price: 12000,
    description: 'Зеленого цвета, теплая',
  },
]

const getTotalPrice = (items: IProduct[] = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price)
  }, 0)
}

export const ProductList = () => {
  const [addedItems, setAddedItems] = useState<IProduct[]>([])
  const { i18n } = useTranslation()
  const { tg, queryId } = useTelegram()

  const onSendData = useCallback(() => {
    const data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
      queryId,
    }
    fetch('http://85.119.146.179:8000/web-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }, [addedItems, queryId])

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [onSendData, tg])

  const onAdd = (product: IProduct) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id)
    let newItems = []

    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id)
    } else {
      newItems = [...addedItems, product]
    }

    setAddedItems(newItems)

    if (newItems.length === 0) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Buy ${getTotalPrice(newItems)}`,
      })
    }
  }

  return (
    <div>
      <Button onClick={() => changeLanguage('sr')}>SR</Button>
      <Button onClick={() => changeLanguage('ru')}>RU</Button>
      <Button onClick={() => changeLanguage('en')}>EN</Button>
      <div className={styles.list}>
        {products.map((item) => (
          <ProductItem product={item} onAdd={onAdd} className={styles.item} />
        ))}
      </div>
    </div>
  )
}
