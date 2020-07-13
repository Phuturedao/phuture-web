import "./wallet-modal.scss";

import React, { FunctionComponent } from "react";

import DefaultModal from "components/modals/modal/modal.componnet";
import ETH from "assets/svgs/eth";

const WalletModal: FunctionComponent<any> = (props) => {
  return (
    <DefaultModal title="Back" className="wallet-modal" {...props}>
      <label>Select a wallet</label>
      <ul>
        {[0, 1, 2, 3, 4].map((i) => (
          <li
            className={`${i === 0 ? "selected" : ""}`}
            onClick={() => {
              props.onClose();
            }}
          >
            <span className="title">Metamask</span>
            <ETH />
          </li>
        ))}
      </ul>
    </DefaultModal>
  );
};

export default WalletModal;
