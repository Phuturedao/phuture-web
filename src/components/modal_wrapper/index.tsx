import { IconButton } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import InfoIcon from 'assets/icons/InfoIcon.svg'
import React from 'react'
import { colors } from 'utils/mui'

const useStyles = makeStyles({
  root: {
    padding: 0,
  },
  closeButton: {
    position: 'absolute',
    right: 5,
    top: 5,
    padding: '4px !important',
  },
  paperWidthSm: {
    width: '434px',
    backgroundColor: colors.defaultCardBg,
    border: `1px solid ${colors.primaryButtonBgColor}`,
    boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: '29px',
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
        <IconButton classes={{ root: closeButton }}>
          <img src={InfoIcon} />
        </IconButton>
      </MuiDialogTitle>
      <MuiDialogContent classes={{ root: dialogContent }}>{children}</MuiDialogContent>
    </Dialog>
  )
}
