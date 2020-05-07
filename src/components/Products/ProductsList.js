import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteTweetAction } from "../../actions/productsActions";
import logo from "../../assets/food-logo.jpg";
import "./products.css";
function ProductList() {
  const products = useSelector((state) => state.products.products);
  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function Product(props) {
  const { product } = props;
  const dispatch = useDispatch();
  return (
    <div className="product">
      <img src={logo}></img>
      <div>{product.product}</div>
      <div>$/ {product.price}</div>
      <div>
        Fecha de resgitro:{" "}
        {typeof product.date === "object" ? "" : product.date.substring(0, 10)}
      </div>
    </div>
  );
}

export default ProductList;
