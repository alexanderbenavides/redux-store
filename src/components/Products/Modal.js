import React from "react";
import { Modal as ModalB } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { openCloseAddProductModalAction } from "../../actions/modalsActions";

export default function Modal(props) {
  const { children } = props;
  // Dispatch para ejecutar nuestras acciones
  const dispatch = useDispatch();
  const closeModal = (state) => dispatch(openCloseAddProductModalAction(state));

  // useSelector para aceder a un valor en el store
  const isOpenModal = useSelector((state) => state.modals.stateModalAddProduct);
  return (
    <ModalB
      show={isOpenModal}
      onHide={() => closeModal(false)}
      size="lg"
      centered
    >
      {children}
    </ModalB>
  );
}
