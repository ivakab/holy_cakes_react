import { Button } from '@headlessui/react'
import clsx from 'clsx'

interface ICoreButtonProps {
  children: React.ReactNode
  onClick?: () => void
  theme?: 'bright' | 'dark'
  className?: string
}

export const CoreButton = ({
  children,
  onClick,
  theme = 'bright',
  className,
}: ICoreButtonProps) => {
  const themeStyles =
    theme === 'bright'
      ? 'text-bright-text bg-bright-bg hover:bg-bright-hover active:bg-bright-active'
      : 'text-dark-text bg-dark-bg hover:bg-dark-hover active:bg-dark-active'

  return (
    <Button
      as={'button'}
      onClick={onClick}
      className={clsx(
        `px-4 py-2 font-bold rounded shadow active:scale-95 focus:outline-none`,
        themeStyles,
        className,
      )}
    >
      {children}
    </Button>
  )
}
