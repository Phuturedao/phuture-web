import Dialog from '@material-ui/core/Dialog'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ModalCloseIcon from 'assets/icons/ModalCloseIcon.svg'
import React from 'react'
import { colors } from 'utils/mui'

const useStyles = makeStyles({
  root: {
    padding: 0,
  },
  closeButton: {
    position: 'absolute',
    right: 15,
    top: 15,
    cursor: 'pointer',
  },
  paperWidthSm: {
    backgroundColor: colors.defaultCardBg,
    boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 20,
    lineHeight: '24px',
    color: colors.white,
    margin: '24px 20px',
  },
  dialogContent: {
    padding: 0,
  },
})

type ModalWindowWrapperProps = {
  handleClose: () => void
  open: boolean
  titleText: JSX.Element | string
  children: JSX.Element
}

export const ModalWrapper = ({ handleClose, open, children, titleText }: ModalWindowWrapperProps) => {
  const { paperWidthSm, closeButton, root, title, dialogContent } = useStyles()
  return (
    <Dialog classes={{ paperWidthSm: paperWidthSm }} maxWidth="sm" onClose={handleClose} open={open}>
      <MuiDialogTitle disableTypography className={root}>
        <Typography classes={{ root: title }}>{titleText}</Typography>
        <img onClick={handleClose} className={closeButton} src={ModalCloseIcon} alt="close-modal" />
      </MuiDialogTitle>
      <MuiDialogContent classes={{ root: dialogContent }}>{children}</MuiDialogContent>
    </Dialog>
  )
}
