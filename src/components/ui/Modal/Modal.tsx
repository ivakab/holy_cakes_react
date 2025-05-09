import React, { Fragment } from 'react'
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'

import { IModalProps } from './models/IModalProps'
import { CoreButton } from '../Button'

export const Modal = ({ isOpen, onClose, onSave, children }: IModalProps) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as={'div'} className={'relative z-50'} onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter={'ease-out duration-300'}
          enterFrom={'opacity-0'}
          enterTo={'opacity-100'}
        >
          <div className={'fixed inset-0 bg-black bg-opacity-50'} />
        </TransitionChild>

        <div className={'fixed inset-0 flex items-center justify-center'}>
          <TransitionChild
            as={Fragment}
            enter={'ease-out duration-300'}
            enterFrom={'opacity-0 scale-95'}
            enterTo={'opacity-100 scale-100'}
          >
            <DialogPanel
              className={
                'bg-white rounded-lg shadow-lg w-full w-[90vw] max-w-lg p-6'
              }
            >
              {children}

              <div className={'flex justify-end gap-3 border-t pt-4 mt-4'}>
                <CoreButton onClick={onClose}>Close</CoreButton>
                {onSave && (
                  <CoreButton onClick={onSave} theme={'dark'}>
                    Confirm
                  </CoreButton>
                )}
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  )
}
