import "./account-modal.scss";

import React, { FunctionComponent, useState } from "react";

import DefaultModal from "components/modals/modal/modal.componnet";
import WalletModal from "components/modals/wallet-modal/wallet-modal.component";
import copy from "copy-to-clipboard";

const AccountModal: FunctionComponent<any> = (props) => {
  const [isOpenWalletModal, setIsOpenWalletModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const onClose = () => {
    props.onClose();
    setIsCopied(false);
  };

  return (
    <>
      <DefaultModal
        title="Account"
        className="account-modal"
        {...props}
        onClose={onClose}
      >
        <div className="label">Connected with MetaMask</div>
        <div>
          <div className="account-hash">0x9E39...6D94</div>
          <div className="actions">
            <button
              className={`button alternative small ${
                isCopied ? "success" : ""
              }`}
              onClick={() => {
                copy("0x9E39...6D94");
                setIsCopied(true);
              }}
            >
              {isCopied ? "Copied" : "Copy"}
            </button>
            <button
              className="button small"
              onClick={() => {
                setIsOpenWalletModal(true);
              }}
            >
              Change
            </button>
          </div>
        </div>
      </DefaultModal>

      <WalletModal
        isOpen={isOpenWalletModal}
        onClose={() => {
          setIsOpenWalletModal(false);
        }}
      />
    </>
  );
};

export default AccountModal;
