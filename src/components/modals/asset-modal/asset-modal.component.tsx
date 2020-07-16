import "./asset-modal.scss";

import React, { FunctionComponent, useState } from "react";

import Checkbox from "react-simple-checkbox";
import DefaultModal from "components/modals/modal/modal.componnet";
import ETH from "assets/svgs/eth";
import SearchInput from "components/inputs/input-search/input-search.component";

const AssetModal: FunctionComponent<any> = (props) => {
  const [checkboxes, setCheckboxes] = useState(Array(6).fill(false));

  const clear = () => {
    setCheckboxes(Array(6).fill(false));
  };

  const onClose = () => {
    clear();
    props.onClose();
  };

  return (
    <>
      <DefaultModal
        title="Add assets to new index"
        className="asset-modal"
        {...props}
        onClose={onClose}
      >
        <div className="search">
          <label>From</label>
          <SearchInput placeholder="Search token by name or address" noborder />
        </div>

        <div className="search-result">
          <div>
            <label>Token name</label>
          </div>
          <hr />
          <div className="tokens">
            <ul>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <li
                  key={i}
                  onClick={() => {
                    const state = [...checkboxes];
                    state[i] = !checkboxes[i];

                    setCheckboxes(state);
                  }}
                >
                  <span className="name">
                    <ETH />
                    <span className="flex-column">
                      <span>Compound</span>
                      <span className="market-size">Market size: 12%</span>
                    </span>
                  </span>
                  <div className="value">
                    <Checkbox
                      className="checkbox"
                      color="#000000"
                      tickAnimationDuration={300}
                      backAnimationDuration={50}
                      checked={checkboxes[i]}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <hr />
        </div>
      </DefaultModal>
    </>
  );
};

export default AssetModal;
