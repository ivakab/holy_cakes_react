import { useTranslation } from 'react-i18next'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CoreButton } from 'src/components/ui/Button'

export const LanguageSelection = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  const languages = ['sr', 'ru', 'en']
  const sortedLanguages = [
    ...languages.filter((lang) => lang !== i18n.language),
  ]

  return (
    <Menu as={'div'} className={'relative flex items-center'}>
      <MenuButton
        className={`px-4 py-2 font-bold rounded shadow text-bright-text bg-bright-bg hover:bg-bright-hover active:bg-bright-active active:scale-95 focus:outline-none ml-2`}
      >
        {i18n.language.toUpperCase()}
      </MenuButton>

      <MenuItems
        className={
          'absolute left-0 -translate-x-full flex gap-2 items-center bg-transparent'
        }
      >
        {sortedLanguages.map((lang) => (
          <MenuItem key={lang}>
            {() => (
              <CoreButton onClick={() => changeLanguage(lang)}>
                {lang.toUpperCase()}
              </CoreButton>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}
