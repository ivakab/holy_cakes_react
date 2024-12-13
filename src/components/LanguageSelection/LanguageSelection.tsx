import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Button } from 'components/core-components/Button'

import styles from './LanguageSelection.module.scss'

export const LanguageSelection = () => {
  const { i18n } = useTranslation()

  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
    setIsPanelOpen(false)
  }

  const languages = ['sr', 'ru', 'en']
  const sortedLanguages = [
    ...languages.filter((lang) => lang !== i18n.language),
    i18n.language,
  ]

  return (
    <div className={styles.root}>
      {isPanelOpen ? (
        <div className={styles.languagePanel}>
          {sortedLanguages.map((lang) => (
            <Button
              key={lang}
              color={'bright'}
              onClick={() => changeLanguage(lang)}
            >
              {lang.toUpperCase()}
            </Button>
          ))}
        </div>
      ) : (
        <Button color={'bright'} onClick={() => setIsPanelOpen(true)}>
          {i18n.language.toUpperCase()}
        </Button>
      )}
    </div>
  )
}
