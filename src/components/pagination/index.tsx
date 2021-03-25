/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { FC } from 'react'
import { colors } from 'utils/mui'
import PaginationIcon from 'assets/icons/PaginationIcon.svg'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '200px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pageTitle: {
    fontFamily: `'Rubik', sans-serif`,
    fontSize: '16px',
    lineHeight: '28px',
    color: colors.white,
    opacity: 0.4,
  },
  iconContainer: {
    height: '16px',
    width: '16px',
  },
})

interface PaginationProps {
  page: number
  maxPage: number
  onChange: (value: number) => void
}

export const Pagination: FC<PaginationProps> = ({ page, maxPage, onChange }: PaginationProps) => {
  const { container, pageTitle, iconContainer } = useStyles({})
  return (
    <div className={container}>
      <Typography classes={{ root: pageTitle }}>
        {'common_pagination_template'.localized({ v1: page, v2: maxPage })}
      </Typography>
      <div>
        <IconButton
          style={{ opacity: page === 1 ? 0.4 : 1 }}
          disabled={page === 1}
          onClick={() => (page !== 1 ? onChange(page - 1) : undefined)}
        >
          <img className={iconContainer} style={{ transform: 'rotate(180deg)' }} src={PaginationIcon} />
        </IconButton>
        <IconButton
          style={{ opacity: page === maxPage ? 0.4 : 1 }}
          disabled={page === maxPage}
          onClick={() => (page !== maxPage ? onChange(page + 1) : undefined)}
        >
          <img className={iconContainer} src={PaginationIcon} />
        </IconButton>
      </div>
    </div>
  )
}
