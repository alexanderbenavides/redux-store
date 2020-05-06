import React from "react";
import { Modal, Button } from "react-bootstrap";

const { Dialog, Header, Body, Footer, Title } = Modal;

class CreateProduct extends React.Component {
  render() {
    return (
      <div>
        <Dialog>
          <Header closeButton>
            <Title>Crear producto</Title>
          </Header>

          <Body>
            <p>Contenido del modal va aquí</p>
          </Body>

          <Footer>
            <Button variant="secondary">Cerrar</Button>
            <Button variant="primary">Guardar</Button>
          </Footer>
        </Dialog>
      </div>
    );
  }
}

export default CreateProduct;
