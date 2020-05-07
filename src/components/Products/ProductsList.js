import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteTweetAction } from "../../actions/tweetsActions";
import logo from "../../assets/food-logo.jpg";
import "./products.css";
function ProductList() {
  const tweets = useSelector((state) => state.tweets.tweets);
  return (
    <div>
      <div className="product-list">
        {tweets.map((tweet) => (
          <Product key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

function Product(props) {
  const { tweet } = props;
  const dispatch = useDispatch();
  return (
    <div className="product">
      <img src={logo}></img>
      <div>{tweet.name}</div>
      <div>$/ {tweet.tweet}</div>
      <div>
        Fecha de resgitro:{" "}
        {typeof tweet.date === "object" ? "" : tweet.date.substring(0, 10)}
      </div>
    </div>
  );
}

export default ProductList;
