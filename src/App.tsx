import { useTelegram } from './hooks/useTelegram'
import { Route, Routes } from 'react-router-dom'
import React, { useEffect } from 'react'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'
import { Products } from './components/Products/Products'

import './index.css'
import './App.css'

function App() {
  const { tg } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [tg])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path={'order'} element={<Products />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
