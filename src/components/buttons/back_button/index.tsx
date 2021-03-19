// import Button, IconButton, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button'
import React from 'react'
import { useStyles } from './styles'
import BackArrow from 'assets/icons/BackArrow.svg'
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton'

interface ButtonProps extends IconButtonProps {
  text: string
  navigate: () => void
  width: number
}

const BackButton = (props: ButtonProps) => {
  const { buttonStyles, buttonContainer, textContainer } = useStyles()
  const { text, navigate } = props

  return (
    <div style={{ width: `${props.width}px` }} className={buttonContainer}>
      <IconButton onClick={navigate} classes={{ root: buttonStyles }} {...props}>
        <img src={BackArrow} alt="back-icon" />
      </IconButton>
      <span className={textContainer}>{text}</span>
    </div>
  )
}

export default BackButton
