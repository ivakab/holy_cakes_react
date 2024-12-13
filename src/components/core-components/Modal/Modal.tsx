import React from 'react'
import { IModalProps } from './models/IModalProps'
import { Button } from 'components/core-components/Button'

import styles from './Modal.module.scss'

export const Modal = ({ isOpen, onClose, children, onSave }: IModalProps) => {
  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {children}
        <div className={styles.modalFooter}>
          {onSave && (
            <Button
              onClick={onSave}
              color={'bright'}
              className={styles.saveBtn}
            >
              Save
            </Button>
          )}
          <Button onClick={onClose} color={'dark'}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
