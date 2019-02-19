import * as React from 'react'
import {ReactNode, useState} from 'react'
import {
  Button,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core'

interface Props {
  disabled?: boolean
  title?: string
  confirmLabel?: string
  cancelLabel?: string
  content?: any
  children?: ReactNode
  onConfirm?: () => void
}

export const Confirm = ({children, title, content, confirmLabel, cancelLabel}: Props) => {

  const [open, setOpen] = useState(false)

  const confirm = () => {
    this.props.onConfirm()
    this.setState({open: false})
  }

  return (
    <>
      {React.cloneElement(children as any, {
        onClick: () => this.setState({open: true})
      })}
      <Dialog open={this.state.open}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => this.setState({open: false})}>
            {cancelLabel || 'Cancel'}
          </Button>
          <Button color="primary" onClick={this.confirm}>
            {confirmLabel || 'Confirm'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )

}
