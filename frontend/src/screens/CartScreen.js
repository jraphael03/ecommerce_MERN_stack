import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1; // Searchs for the variable we want qty, split at = and get [1] (second value), if props.location.search does not exist default val = 1

    const dispatch = useDispatch();

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [productId, qty, dispatch])
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>ADD TO CART : ProductID: {productId} QTY: {qty} </p>
    </div>
  );
}
