/* eslint-disable @typescript-eslint/no-explicit-any */
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import SortTableIcon from 'assets/icons/SortTableIcon.svg'
import NftIcon from 'assets/icons/NftIcon.svg'
import LendingIcon from 'assets/icons/LendingIcon.svg'
import ExchangeIcon from 'assets/icons/ExchangeIcon.svg'
import DefiIcon from 'assets/icons/DefiIcon.svg'
import { BottomTableButton, TableButton } from 'components/buttons'
import React, { FC, useState } from 'react'
import { colors } from 'utils/mui'
import { useStyles } from './styles'

interface Data {
  name: string
  icon: string
  liquidity: number
  volume: number
  button: string
}

function createData(name: string, icon: string, liquidity: number, volume: number, button: string): Data {
  return { name, icon, liquidity, volume, button }
}

const rows = [
  createData('NFT', NftIcon, 3.7, 67, 'button'),
  createData('Lending', LendingIcon, 25.0, 51, 'button'),
  createData('Exchange', ExchangeIcon, 16.0, 24, 'button'),
  createData('DeFi', DefiIcon, 6.0, 24, 'button'),
  createData('NFT', NftIcon, 16.0, 49, 'button'),
  createData('DeFi', DefiIcon, 4.2, 87, 'button'),
  createData('Lending', LendingIcon, 8.2, 12, 'button'),
  createData('DeFi', DefiIcon, 5.2, 11, 'button'),
  createData('NFT', NftIcon, 0.2, 22, 'button'),
]

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

type Order = 'asc' | 'desc'

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

interface HeadCell {
  disablePadding: boolean
  id: keyof Data
  label: string
  isCentered: boolean
}

const headCells: HeadCell[] = [
  { id: 'name', isCentered: true, disablePadding: false, label: `${'indices_indices_table_column_name'.localized()}` },
  {
    id: 'liquidity',
    isCentered: true,
    disablePadding: false,
    label: `${'indices_indices_table_column_price'.localized()}`,
  },
  {
    id: 'volume',
    isCentered: true,
    disablePadding: false,
    label: `${'indices_indices_table_column_gain_loss'.localized()}`,
  },
  { id: 'button', isCentered: false, disablePadding: false, label: '' },
]

interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void
  order: Order
  orderBy: string
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { classes, order, orderBy, onRequestSort } = props
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property)
  }

  const SortIcon: FC<any> = (order: string) => {
    return (
      <img style={{ transform: order === 'asc' ? 'none' : 'rotate(180deg)' }} src={SortTableIcon} alt="sort-icon" />
    )
  }

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.isCentered ? 'center' : 'right'}
            padding={'default'}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{ border: 'none' }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              hideSortIcon={true}
              IconComponent={() => SortIcon(orderBy === headCell.id ? order : 'asc')}
              classes={{ root: classes.title }}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

const PoolsTable = () => {
  const classes = useStyles()
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<keyof Data>('liquidity')
  const page = 0
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [shownAll, setShownAll] = useState(false)

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!shownAll) {
      setRowsPerPage(rows.length)
      setShownAll(true)
    } else {
      setRowsPerPage(5)
      setShownAll(false)
    }
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table className={classes.table} aria-labelledby="tableTitle" size={'medium'} aria-label="enhanced table">
            <EnhancedTableHead classes={classes} order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
            <TableBody style={{ backgroundColor: 'transparent' }}>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow style={{ backgroundColor: colors.defaultCardBg }} hover tabIndex={-1} key={row.name}>
                      <TableCell
                        classes={{ root: classes.tableName }}
                        style={{ borderRadius: '10px 0 0 10px', padding: '0 18px' }}
                        component="th"
                        align="left"
                        scope="row"
                      >
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ zIndex: 10, height: 42 }}>
                              <img src={row.icon} alt="currency-icon" />
                            </div>
                          </div>
                          <span style={{ marginLeft: '24px' }}>{row.name}</span>
                        </div>
                      </TableCell>
                      <TableCell classes={{ root: classes.tableValues }} align="center">
                        {row.liquidity}
                      </TableCell>
                      <TableCell classes={{ root: classes.tableValues }} align="center">
                        <span style={{ color: colors.tablePositiveGreenColor }}>
                          {'indices_indices_table_percent_positive'.localized({ v1: row.volume })}
                        </span>
                      </TableCell>
                      <TableCell
                        style={{ borderRadius: '0 10px 10px 0', width: '160px' }}
                        classes={{ root: classes.tableValues }}
                        align="right"
                      >
                        <div style={{ padding: '24px' }}>
                          <TableButton text={'indices_indices_table_button_text'.localized()} width={'136px'} />
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <div className={classes.buttonButton}>
          <BottomTableButton
            text={'indices_all_indices_button'.localized()}
            onClick={(e: any) => handleChangeRowsPerPage(e)}
          />
        </div>
      </Paper>
    </div>
  )
}
export default PoolsTable
