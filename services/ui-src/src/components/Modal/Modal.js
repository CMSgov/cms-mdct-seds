import React, { useState } from "react";
import classnames from "classnames";

import styles from "./Modal.scss";

/** Modal UI component */
export const Modal = ({ title, children, actions, className }) => {
  const classes = classnames(styles.modal, className);

  return (
    <div data-testid="modal" className={classes}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{children}</div>
      <div className={styles.actions}>{actions}</div>
    </div>
  );
};

/** Overlay UI component (grey background) */
export const Overlay = () => <div className={styles.overlay} />;

/** Modal positioning component */
export const ModalContainer = ({ children }) => {
  return <div className={styles.modalContainer}>{children}</div>;
};

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
};
