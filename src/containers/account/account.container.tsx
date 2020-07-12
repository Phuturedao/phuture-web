import "./account.scss";

import React, { FunctionComponent } from "react";

import AssetStats from "components/sections/asset-stats/asset-stats.component";
import Container from "layouts/container";
import Default from "layouts/default.layout";
import Deposit from "components/sections/deposit/deposit.component";
import Table from "components/table/table.component";

const AccountContainer: FunctionComponent = () => (
  <Default
    navigation={{
      account: "0x9E39...6D94",
      index: "DeFi",
      isAccountModal: true,
    }}
  >
    <div className="account-module">
      <Container>
        <AssetStats />
        <Deposit balance="100 ETH" />
        <Table type="assets" />
      </Container>
    </div>
  </Default>
);

export default AccountContainer;
