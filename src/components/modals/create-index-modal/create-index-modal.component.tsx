import "./create-index-modal.scss";

import React, { FunctionComponent, useState } from "react";

import AssetModal from "components/modals/asset-modal/asset-modal.component";
import DefaultModal from "components/modals/modal/modal.componnet";
import SearchInput from "components/inputs/input-search/input-search.component";

const CreateIndexModal: FunctionComponent<any> = (props) => {
  const [isAssetModalOpen, setIsAssetModalOpen] = useState(false);

  return (
    <>
      <DefaultModal
        title="Create Index"
        className="create-index-modal"
        {...props}
      >
        <label>Name index</label>
        <SearchInput placeholder="Create name for new Index" noborder />

        <button
          className="button large"
          onClick={() => {
            setIsAssetModalOpen(true);
          }}
        >
          Continue
        </button>
      </DefaultModal>

      <AssetModal
        isOpen={isAssetModalOpen}
        onClose={() => {
          setIsAssetModalOpen(false);
          props.onClose();
        }}
      />
    </>
  );
};

export default CreateIndexModal;
