import * as React from 'react'
import {ReactElement, useState} from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core'

interface Props {
  disabled?: boolean
  title?: string
  confirmLabel?: string
  cancelLabel?: string
  content?: any
  children: ReactElement<any>
  onConfirm?: () => void
}

export const Confirm = ({children, title, content, confirmLabel, cancelLabel, onConfirm}: Props) => {

  const [open, setOpen] = useState<boolean>(false)

  const confirm = () => {
    if (onConfirm) onConfirm()
    setOpen(false)
  }

  return (
    <>
      {React.cloneElement(children, {
        onClick: () => setOpen(true)
      })}
      <Dialog open={open}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => setOpen(false)}>
            {cancelLabel || 'Cancel'}
          </Button>
          <Button color="primary" onClick={confirm}>
            {confirmLabel || 'Confirm'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}