import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { Layout } from 'components/layout'
import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LANDING } from 'routes'
import 'services/i18n'
import { themeConfig } from 'utils/mui'
import Landing from './pages/landing'

export const notifyError = (): unknown => toast.error('Email is not valid')
export const notifySuccess = (): unknown => toast.success('You are subscribed')

const App = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const theme = createMuiTheme(themeConfig)
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <Route path={LANDING} component={Landing} />
              <Redirect to={LANDING} />
            </Switch>
          </Layout>
        </Router>
      </MuiThemeProvider>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
