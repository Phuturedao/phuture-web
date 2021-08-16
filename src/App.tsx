import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { Layout } from 'components/layout'
import React from 'react'
import { Helmet } from 'react-helmet'
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
      <Helmet>
        <title>Phuture</title>
        <meta
          name="description"
          content="Decentralised protocol built for the creation and investment of passive index strategies."
        />
        <meta name="theme-color" content="#000000" />
        <meta property="og:url" content="https://www.phuture.finance" />
        <meta property="og:title" content="Phuture" />
        <meta property="og:image" content="%PUBLIC_URL%/PhutureIcon.png" />
        <meta property="og:url" content="https://www.phuture.finance/" />
        <meta
          property="og:description"
          content="Decentralised protocol built for the creation and investment of passive index strategies."
        />
      </Helmet>
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
