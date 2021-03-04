import { Slider, withStyles } from '@material-ui/core'
import React from 'react'
import { colors } from 'utils/mui'
export const LiquiditySlider = withStyles({
  root: {
    color: colors.primaryButtonBgColor,
    height: '6px',
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: colors.primaryButtonBgColor,
    border: `2px solid ${colors.defaultCardBg}`,
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider)
