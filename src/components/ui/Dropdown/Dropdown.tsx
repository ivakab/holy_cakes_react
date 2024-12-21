import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { IDropdownProps } from './models/IDropdownProps'
import clsx from 'clsx'

export const Dropdown = ({
  options,
  value,
  onChange,
  placeholder = 'Select...',
}: IDropdownProps) => {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className={'relative w-full group'}>
        <ListboxButton
          className={clsx(
            'flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-300 rounded focus:outline-none',
            value ? 'text-gray-900' : 'text-gray-400',
          )}
        >
          {value || placeholder}
          <ChevronDownIcon className={'w-5 h-5 text-gray-400'} />
        </ListboxButton>
        <ListboxOptions
          className={
            'absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto'
          }
        >
          {options.map((option, index) => (
            <ListboxOption key={index} value={option} as={'div'}>
              {({ selected, focus }) => (
                <div
                  className={clsx(
                    'px-4 py-2 cursor-pointer',
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    selected && 'bg-gray-100 text-gray-900',
                  )}
                >
                  {option}
                </div>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}
