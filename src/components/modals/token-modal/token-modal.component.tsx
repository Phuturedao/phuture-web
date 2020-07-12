import "./token-modal.scss";

import React, { FunctionComponent } from "react";

import DefaultModal from "components/modals/modal/modal.componnet";
import ETH from "assets/svgs/eth";
import InputSearch from "components/inputs/input-search/input-search.component";

const TokenModal: FunctionComponent<any> = (props) => {
  return (
    <DefaultModal title="Select a token" className="token-modal" {...props}>
      <div className="search">
        <label>From</label>
        <InputSearch />
      </div>

      <div className="search-result">
        <div>
          <label>Token name</label>
        </div>
        <hr />
        <div className="tokens">
          <ul>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <li key={i}>
                <span className="name">
                  <ETH />
                  <span>Compound</span>
                </span>
                <span className="value">0.1234</span>
              </li>
            ))}
          </ul>
        </div>
        <hr />
      </div>
    </DefaultModal>
  );
};

export default TokenModal;
