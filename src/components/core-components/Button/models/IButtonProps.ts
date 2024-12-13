import { ReactNode } from 'react'

export interface IButtonProps {
  onClick: () => void
  children?: ReactNode
  className?: string
  color?: 'bright' | 'dark'
}
