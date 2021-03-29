import { Container } from '@material-ui/core'
import { PrimaryButton } from 'components/buttons'
import React from 'react'
import { useStyles } from './styles'

const Vault = (): JSX.Element => {
  const {
    rootBox,
    categoryTitle,
    card,
    textBox,
    buttonsBox,
    cardItem,
    cardSector,
    cardValue,
    cardCustomValue,
  } = useStyles()
  return (
    <Container classes={{ root: rootBox }}>
      <div>
        <span className={categoryTitle}>{'vault_overview_title'.localized()}</span>
        <div className={card}>
          <div className={cardItem}>
            <span style={{ opacity: 0.4 }} className={cardSector}>
              {'vault_column_invested_text'.localized()}
            </span>
            <span className={cardValue}>$100,000,000.00</span>
          </div>
          <div className={cardItem}>
            <span style={{ opacity: 0.4 }} className={cardSector}>
              {'vault_balance_text'.localized()}
            </span>
            <span className={cardValue}>$100,000,000.00</span>
          </div>
          <div className={cardItem}>
            <span style={{ opacity: 0.4 }} className={cardSector}>
              {'vault_profit_loss_text'.localized()}
            </span>
            <span className={cardValue}>+$100,000.00</span>
          </div>
          <div className={cardItem}>
            <span style={{ opacity: 0.4 }} className={cardSector}>
              {'vault_gain_loss_text'.localized()}
            </span>
            <span className={cardCustomValue}>+24%</span>
          </div>
          <div className={cardItem}>
            <span style={{ opacity: 0.4 }} className={cardSector}>
              {'vault_total_gain_loss_text'.localized()}
            </span>
            <span className={cardCustomValue}>+24%</span>
          </div>
        </div>
      </div>
      <div>
        <span className={categoryTitle}>{'vault_index_overview_title'.localized()}</span>
        <div className={card}>
          <div className={cardItem}>
            <span style={{ opacity: 0.4 }} className={cardSector}>
              {'vault_column_invested_text'.localized()}
            </span>
            <span className={cardValue}>$100,000,000.00</span>
          </div>
          <div className={cardItem}>
            <span style={{ opacity: 0.4 }} className={cardSector}>
              {'vault_balance_text'.localized()}
            </span>
            <span className={cardValue}>$100,000,000.00</span>
          </div>
          <div className={cardItem}>
            <span style={{ opacity: 0.4 }} className={cardSector}>
              {'vault_profit_loss_text'.localized()}
            </span>
            <span className={cardValue}>+$100,000.00</span>
          </div>
          <div className={cardItem}>
            <span style={{ opacity: 0.4 }} className={cardSector}>
              {'vault_gain_loss_text'.localized()}
            </span>
            <span className={cardCustomValue}>+24%</span>
          </div>
          <div className={cardItem}>
            <span style={{ opacity: 0.4 }} className={cardSector}>
              {'vault_total_gain_loss_text'.localized()}
            </span>
            <span className={cardCustomValue}>+24%</span>
          </div>
        </div>
      </div>
      <div>
        <span className={categoryTitle}>{'vault_total_index_title'.localized()}</span>
      </div>
      <div>
        <span className={categoryTitle}>{'vault_staking_title'.localized()}</span>
        <div style={{ justifyContent: 'space-between' }} className={card}>
          <div className={textBox}>
            <div className={cardItem}>
              <span className={cardSector}>{'vault_amount_text'.localized()}</span>
              <span className={cardValue}>{'common_phtr_template'.localized({ v1: 100.0 })}</span>
            </div>
            <div className={cardItem}>
              <span className={cardSector}>{'vault_apy_text'.localized()}</span>
              <span className={cardValue}>{'common_percent_template'.localized({ v1: 100 })}</span>
            </div>
            <div className={cardItem}>
              <span className={cardSector}>{'vault_reward_text'.localized()}</span>
              <span className={cardValue}>{'common_phtr_template'.localized({ v1: 2.5 })}</span>
            </div>
          </div>
          <div className={buttonsBox}>
            <PrimaryButton width={'80px'} height={'31px'} text={'vault_staking_buttons_claim'.localized()} />
            <PrimaryButton width={'110px'} height={'31px'} text={'vault_staking_buttons_unstake'.localized()} />
          </div>
        </div>
      </div>
      <div>
        <span className={categoryTitle}>{'vault_governance_staking_title'.localized()}</span>
        <div style={{ justifyContent: 'space-between' }} className={card}>
          <div className={textBox}>
            <div className={cardItem}>
              <span className={cardSector}>{'vault_amount_text'.localized()}</span>
              <span className={cardValue}>{'common_phtr_template'.localized({ v1: 100.0 })}</span>
            </div>
            <div className={cardItem}>
              <span className={cardSector}>{'vault_apy_text'.localized()}</span>
              <span className={cardValue}>{'common_percent_template'.localized({ v1: 100 })}</span>
            </div>
            <div className={cardItem}>
              <span className={cardSector}>{'vault_reward_text'.localized()}</span>
              <span className={cardValue}>{'common_phtr_template'.localized({ v1: 2.5 })}</span>
            </div>
          </div>
          <div className={buttonsBox}>
            <PrimaryButton width={'110px'} height={'31px'} text={'vault_staking_buttons_unstake'.localized()} />
          </div>
        </div>
      </div>
      <div>
        <span className={categoryTitle}>{'vault_indices_title'.localized()}</span>
      </div>
    </Container>
  )
}

export default Vault
