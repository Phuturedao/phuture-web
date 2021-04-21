import { Checkbox, CheckboxProps, withStyles } from '@material-ui/core'
import { colors } from 'utils/mui'
import React from 'react'

export const CustomCheckbox = withStyles({
  root: {
    color: colors.white,
    '&$checked': {
      color: colors.white,
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />)
