import React from 'react'
import { LanguageSelection } from '../LanguageSelection/LanguageSelection'

export const Header = () => {
  return (
    <div
      className={
        'bg-white text-black px-5 w-full h-[10vh] flex items-center justify-between relative'
      }
    >
      <div className={'text-xl font-bold'}>HOLY CAKES</div>
      <LanguageSelection />
    </div>
  )
}
