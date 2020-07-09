import "./account.scss";

import React, { FunctionComponent } from "react";

import Container from "layouts/container";
import Default from "layouts/default.layout";
import Deposit from "components/sections/deposit/deposit.component";

const AccountContainer: FunctionComponent = () => (
  <Default navigation={{ account: "0x9E39...6D94", index: "DeFi" }}>
    <div className="account-module">
      <Container>
        <Deposit balance="100 ETH" />
      </Container>
    </div>
  </Default>
);

export default AccountContainer;
