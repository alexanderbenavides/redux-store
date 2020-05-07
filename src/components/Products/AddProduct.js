import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { validationFormAddProductAction } from "../../actions/validationsActions";
import { addProductAction } from "../../actions/productsActions";
import { openCloseAddProductModalAction } from "../../actions/modalsActions";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export default function FormAddproduct() {
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: "",
  });

  // Inicializacion del dispach y ejecucion de las acciones.
  const dispatch = useDispatch();
  const errorForm = (state) => dispatch(validationFormAddProductAction(state));
  const addProduct = (state) => dispatch(addProductAction(state));
  const closeModal = (state) => dispatch(openCloseAddProductModalAction(state));

  // Obtener estado de la validacion del fomrulario
  const errorFormValue = useSelector(
    (state) => state.validations.errorFormAddproduct
  );
  const onChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { product, price } = formValue;

    if (!product || !price) {
      errorForm(true);
    } else {
      errorForm(false);
      addProduct({
        id: uuidv4(),
        product,
        price,
        date: moment(),
      });
      closeModal(false);
    }
  };

  return (
    <Form className="m-3" onChange={onChange} onSubmit={onSubmit}>
      <Form.Group className="text-center">
        <h1>Nuevo producto</h1>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="product"
          placeholder="Nombre del plato"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="number"
          name="price"
          placeholder="precio en dólares"
        />
      </Form.Group>
      <Button varian="primary" type="submit">
        registrar producto
      </Button>

      {errorFormValue && (
        <Alert variant="danger" className="mt-4">
          Todos los campos son obligatorios
        </Alert>
      )}
    </Form>
  );
}
