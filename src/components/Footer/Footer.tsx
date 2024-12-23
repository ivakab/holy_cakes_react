import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const linkStyles = `flex justify-center items-center min-w-[20vw] max-w-[30vw] text-black text-center
  font-bold no-underline h-full rounded hover:text-[var(--tg-theme-hint-color)]`

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <nav
      className={
        'fixed bottom-0 left-0 w-full h-[10vh] bg-white flex justify-around items-center z-1000'
      }
    >
      <Link to="/" className={linkStyles}>
        {t('footer.about')}
      </Link>
      <Link to="/works" className={linkStyles}>
        {t('footer.works')}
      </Link>
      <Link to="/order" className={linkStyles}>
        {t('footer.order')}
      </Link>
      <Link to="/events" className={linkStyles}>
        {t('footer.events')}
      </Link>
    </nav>
  )
}
