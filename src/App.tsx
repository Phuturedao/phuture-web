import { Web3Provider } from '@ethersproject/providers'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { Web3ReactProvider } from '@web3-react/core'
import { Layout } from 'components/layout'
import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { GOVERNANCE, INDICES, LIQUIDITY, STAKING, VAULT } from 'routes'
import 'services/i18n'
import { themeConfig } from 'utils/mui'
import Staking from './pages/staking'
import Liquidity from './pages/liquidity'
import Indices from './pages/indices'
import Vault from './pages/vault'
import Governance from './pages/governance'

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
        <Router>
          <Layout>
            <Switch>
              <Route exact path={INDICES} component={Indices} />
              <Route exact path={STAKING} component={Staking} />
              <Route exact path={LIQUIDITY} component={Liquidity} />
              <Route exact path={GOVERNANCE} component={Governance} />
              <Route exact path={VAULT} component={Vault} />
              <Redirect to={INDICES} />
            </Switch>
          </Layout>
        </Router>
      </MuiThemeProvider>
    </Web3ReactProvider>
  )
}

export default App
