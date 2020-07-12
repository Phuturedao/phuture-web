import "./account-modal.scss";

import React, { FunctionComponent } from "react";

import DefaultModal from "components/modals/modal/modal.componnet";
import copy from "copy-to-clipboard";

const AccountModal: FunctionComponent<any> = (props) => (
  <DefaultModal title="Account" className="account-modal" {...props}>
    <div className="label">Connected with MetaMask</div>
    <div>
      <div className="account-hash">0x9E39...6D94</div>
      <div className="actions">
        <button
          className="button alternative small"
          onClick={() => {
            copy("0x9E39...6D94");
          }}
        >
          Copy
        </button>
        <button className="button small">Change</button>
      </div>
    </div>
  </DefaultModal>
);

export default AccountModal;
