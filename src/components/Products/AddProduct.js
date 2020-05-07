import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { validationFormAddTweetAction } from "../../actions/validationsActions";
import { addTweetAction } from "../../actions/tweetsActions";
import { openCloseAddProductModalAction } from "../../actions/modalsActions";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export default function FormAddTweet() {
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: "",
  });

  // Inicializacion del dispach y ejecucion de las acciones.
  const dispatch = useDispatch();
  const errorForm = (state) => dispatch(validationFormAddTweetAction(state));
  const addTweet = (state) => dispatch(addTweetAction(state));
  const closeModal = (state) => dispatch(openCloseAddProductModalAction(state));

  // Obtener estado de la validacion del fomrulario
  const errorFormValue = useSelector(
    (state) => state.validations.errorFormAddTweet
  );
  const onChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, tweet } = formValue;

    if (!name || !tweet) {
      errorForm(true);
    } else {
      errorForm(false);
      addTweet({
        id: uuidv4(),
        name,
        tweet,
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
        <Form.Control type="text" name="name" placeholder="Nombre del plato" />
      </Form.Group>
      <Form.Group>
        <Form.Control type="number" name="tweet" row="3" placeholder="precio" />
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
