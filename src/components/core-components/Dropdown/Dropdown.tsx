import React, { useMemo, useState } from 'react'

import { IDropdownProps } from './models/IDropdownProps'

import styles from './Dropdown.module.scss'

export const Dropdown = ({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  className,
}: IDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen((prevState) => !prevState)
  const handleOptionClick = (option: string) => {
    onChange(option)
    setIsOpen(false)
  }

  const filteredOptions = useMemo(
    () => options.filter((option) => option !== value),
    [options, value],
  )

  return (
    <div
      className={`${styles.dropdown} ${className}`}
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
    >
      <div className={styles.input} onClick={toggleDropdown}>
        {value || (
          <span className={styles.input__placeholder}>{placeholder}</span>
        )}
        <span className={styles.arrow}></span>
      </div>
      {isOpen && (
        <div className={styles.dropdownList}>
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className={styles.dropdownOption}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
