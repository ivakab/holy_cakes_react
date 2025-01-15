import { useTelegram } from './hooks/useTelegram'
import { Route, Routes } from 'react-router-dom'
import React, { useEffect } from 'react'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'
import { Footer } from './components/Footer/Footer'
import { Category } from './components/Products/Category'

import './App.css'
import './index.css'

function App() {
  const { tg } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [tg])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<About />} />
        <Route path={'order'} element={<Category />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
