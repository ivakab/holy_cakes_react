import React, { useEffect, useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import styles from './Form.module.css'

export const Form = () => {
  const [country, setCountry] = useState('')
  const [street, setStreet] = useState('')
  const [subject, setSubject] = useState('physical')
  const { tg } = useTelegram()

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Send data',
    })
  }, [tg.MainButton])

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }, [country, street, tg.MainButton])

  const onChangeCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value)
  }

  const onChangeStreet = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value)
  }

  const onChangeSubject = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubject(e.target.value)
  }

  return (
    <div className={styles.form}>
      <h3>Enter name</h3>
      <input
        className={styles.input}
        type="text"
        placeholder={'Страна'}
        value={country}
        onChange={onChangeCountry}
      />
      <input
        className={styles.input}
        type="text"
        placeholder={'Улица'}
        value={street}
        onChange={onChangeStreet}
      />
      <select
        value={subject}
        onChange={onChangeSubject}
        className={styles.select}
      >
        <option value={'physical'}>Phys</option>
        <option value={'legal'}>Legal</option>
      </select>
    </div>
  )
}
