import { Web3Provider } from '@ethersproject/providers'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { Web3ReactProvider } from '@web3-react/core'
import { CenteredContent } from 'components/center_content'
import { CustomCircularProgress } from 'components/custom_progress'
import { Layout } from 'components/layout'
import React, { lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { INDEXES, LANDING, POOLS, STATS, SWAP } from 'routes'
import 'services/i18n'
import { themeConfig } from 'utils/mui'

const Indexes = lazy(() => import('./pages/indexes'))
const Pools = lazy(() => import('./pages/pools'))
const Swap = lazy(() => import('./pages/swap'))
const Stats = lazy(() => import('./pages/stats'))
const Landing = lazy(() => import('./pages/landing'))

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getLibrary = (provider: any): Web3Provider => {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
  }
  const theme = createMuiTheme(themeConfig)
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MuiThemeProvider theme={theme}>
        <React.Suspense
          fallback={
            <CenteredContent>
              <CustomCircularProgress />
            </CenteredContent>
          }
        >
          <Router>
            <Layout>
              <Switch>
                <Route exact path={INDEXES} component={Indexes} />
                <Route exact path={POOLS} component={Pools} />
                <Route exact path={SWAP} component={Swap} />
                <Route exact path={STATS} component={Stats} />
                <Route path={LANDING} component={Landing} />
                <Redirect to={LANDING} />
              </Switch>
            </Layout>
          </Router>
        </React.Suspense>
      </MuiThemeProvider>
    </Web3ReactProvider>
  )
}

export default App
