import React from "react";
import { Provider } from "react-redux";

// Redux
import store from "./store";
import Header from "./components/Header";
import ModalProduct from "./components/Products/Modal";
import ProductsList from "./components/Products/ProductsList";
import ButtonOpen from "./components/Products/ButtonOpen";
import AddProduct from "./components/Products/AddProduct";
function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <Header />
        <ButtonOpen />
        <ModalProduct>
          <AddProduct />
        </ModalProduct>
        <h2>Lista de platos favoritos</h2>
        <ProductsList />
      </div>
    </Provider>
  );
}

export default App;
