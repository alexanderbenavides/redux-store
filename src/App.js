import React from "react";
import { Button } from "react-bootstrap";
import Header from "./components/Header";
import CreateProduct from "./components/Products";
import ProductsList from "./components/Products/ProductsList";
function App() {
  return (
    <div className="main">
      <Header></Header>
      <div className="button-container">
        <Button>Crear producto</Button>
      </div>
      <CreateProduct></CreateProduct>
      <ProductsList></ProductsList>
    </div>
  );
}

export default App;
