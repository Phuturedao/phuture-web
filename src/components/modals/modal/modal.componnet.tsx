import "./modal.scss";

import React, { FunctionComponent } from "react";

import CloseIcon from "assets/svgs/close";
import Modal from "react-modal";

type Props = {
  isOpen?: boolean;
  onClose?: Function;
  title?: string;
  className?: string;
};

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: `rgba(0, 0, 0, 0.3)`,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    boxShadow: `0px 0px 5px rgba(0, 0, 0, 0.03), 0px 0px 1px rgba(0, 0, 0, 0.25)`,
    borderRadius: `10px`,
  },
};

const DefaaultModal: FunctionComponent<Props> = ({
  isOpen = false,
  onClose = () => {},
  className = "",
  title,
  children,
}) => {
  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={() => {
        onClose();
      }}
      style={customStyles}
      contentLabel="Modal"
    >
      <div className={`default-modal ${className ?? ""}`}>
        <header>
          <h2 className="heading">{title}</h2>
          <button
            className="close"
            onClick={() => {
              onClose();
            }}
          >
            <CloseIcon />
          </button>
        </header>
        <div className="content">{children}</div>
      </div>
    </Modal>
  );
};

export default DefaaultModal;
