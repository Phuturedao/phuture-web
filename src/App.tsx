import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import PrivacyPolicy from 'pages/privacy_policy'
import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LANDING, PRIVACY_POLICY } from 'routes'
import 'services/i18n'
import { themeConfig } from 'utils/mui'
import Landing from './pages/landing'

export const notifyError = (): unknown => toast.error('Email is not valid')
export const notifySuccess = (): unknown => toast.success('You are subscribed')

const App = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const theme = createMuiTheme(themeConfig)
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path={LANDING} component={Landing} />
          <Route path={PRIVACY_POLICY} component={PrivacyPolicy} />
          <Redirect to={LANDING} />
        </Switch>
      </Router>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </MuiThemeProvider>
  )
}

export default App
