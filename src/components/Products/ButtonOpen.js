import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { openCloseAddProductModalAction } from "../../actions/modalsActions";

export default function ButtonOpen() {
  // Dispatch para ejecutar nuestras acciones.
  const dispatch = useDispatch();
  const openCloseAddTweetModal = (state) =>
    dispatch(openCloseAddProductModalAction(state));

  const openModal = () => {
    openCloseAddTweetModal(true);
  };

  return (
    <Navbar bg="white" variant="dark">
      <Container>
        <Button variant="outline-success" onClick={openModal}>
          Agregar plato
        </Button>
      </Container>
    </Navbar>
  );
}
