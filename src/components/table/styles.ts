import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    table: {
      minWidth: '750px',
      padding: '0 150px',
      borderSpacing: '0 10px',
      borderCollapse: 'separate',
    },
    title: {
      border: 'none',
      color: `${colors.tableTitleColor} !important`,
      fontWeight: 500,
      fontSize: '14px',
    },
    tableName: {
      color: `${colors.tableTextColor} !important`,
      fontWeight: 600,
      fontSize: '16px',
      border: 'none',
      height: '76px',
      padding: '0px',
      width: '200px',
    },
    tableValues: {
      color: `${colors.tableTextColor} !important`,
      fontWeight: 400,
      fontSize: '16px',
      border: 'none',
      height: '76px',
      padding: '0px',
      width: '150px',
    },
    buttonButton: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '28px',
    },
  }),
)
