import { Container } from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles'

const Vault = (): JSX.Element => {
  const { rootBox, card, cardItem } = useStyles()
  return (
    <Container classes={{ root: rootBox }}>
      <div>
        <span>{'vault_overview_title'.localized()}</span>
        <div className={card}>
          <div className={cardItem}>
            <span>{'vault_column_invested_text'.localized()}</span>
            <span>$100,000,000.00</span>
          </div>
          <div className={cardItem}>
            <span>{'vault_balance_text'.localized()}</span>
            <span>$100,000,000.00</span>
          </div>
          <div className={cardItem}>
            <span>{'vault_profit_loss_text'.localized()}</span>
            <span>+$100,000.00</span>
          </div>
          <div className={cardItem}>
            <span>{'vault_gain_loss_text'.localized()}</span>
            <span>+24%</span>
          </div>
          <div className={cardItem}>
            <span>{'vault_total_gain_loss_text'.localized()}</span>
            <span>+24%</span>
          </div>
        </div>
      </div>
      <div>
        <span>{'vault_index_overview_title'.localized()}</span>
        <div className={card}>
          <div className={cardItem}>
            <span>{'vault_column_invested_text'.localized()}</span>
            <span>$100,000,000.00</span>
          </div>
          <div className={cardItem}>
            <span>{'vault_balance_text'.localized()}</span>
            <span>$100,000,000.00</span>
          </div>
          <div className={cardItem}>
            <span>{'vault_profit_loss_text'.localized()}</span>
            <span>+$100,000.00</span>
          </div>
          <div className={cardItem}>
            <span>{'vault_gain_loss_text'.localized()}</span>
            <span>+24%</span>
          </div>
          <div className={cardItem}>
            <span>{'vault_total_gain_loss_text'.localized()}</span>
            <span>+24%</span>
          </div>
        </div>
      </div>
      <div>
        <span>{'vault_total_index_title'.localized()}</span>
      </div>
      <div>
        <span>{'vault_staking_title'.localized()}</span>
        <div className={card}>
          <div className={cardItem}>
            <span>{'vault_column_invested_text'.localized()}</span>
            <span>$100,000,000.00</span>
          </div>
          <div className={cardItem}>
            <span>{'vault_balance_text'.localized()}</span>
            <span>$100,000,000.00</span>
          </div>
          <div className={cardItem}>
            <span>{'vault_profit_loss_text'.localized()}</span>
            <span>+$100,000.00</span>
          </div>
          <div className={cardItem}>
            <span>{'vault_gain_loss_text'.localized()}</span>
            <span>+24%</span>
          </div>
          <div className={cardItem}>
            <span>{'vault_total_gain_loss_text'.localized()}</span>
            <span>+24%</span>
          </div>
        </div>
      </div>
      <div>
        <span>{'vault_governance_staking_title'.localized()}</span>
        <div className={card}>
          <div className={cardItem}>
            <span>{'vault_column_invested_text'.localized()}</span>
            <span>$100,000,000.00</span>
          </div>
          <div className={cardItem}>
            <span>{'vault_balance_text'.localized()}</span>
            <span>$100,000,000.00</span>
          </div>
          <div className={cardItem}>
            <span>{'vault_profit_loss_text'.localized()}</span>
            <span>+$100,000.00</span>
          </div>
          <div className={cardItem}>
            <span>{'vault_gain_loss_text'.localized()}</span>
            <span>+24%</span>
          </div>
          <div className={cardItem}>
            <span>{'vault_total_gain_loss_text'.localized()}</span>
            <span>+24%</span>
          </div>
        </div>
      </div>
      <div>
        <span>{'vault_indices_title'.localized()}</span>
      </div>
    </Container>
  )
}

export default Vault
