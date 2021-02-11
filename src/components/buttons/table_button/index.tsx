import Button, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { LIQUIDITY } from 'routes'
import { useStyles } from './styles'

interface ButtonProps extends MuiButtonProps {
  text: string
  width?: string
}

const TableButton = (props: ButtonProps) => {
  const { buttonStyles } = useStyles()
  const { text, width } = props
  const history = useHistory()

  return (
    <Button
      onClick={() => history.push(LIQUIDITY)}
      style={{ width: width ? width : '87px' }}
      variant="outlined"
      classes={{ root: buttonStyles }}
      {...props}
    >
      <span>{text}</span>
    </Button>
  )
}

export default TableButton
