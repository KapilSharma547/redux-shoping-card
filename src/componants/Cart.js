import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartslice";
const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  // console.log(quantity);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.setShowCart());
  };
  return (
    <div className="btn ">
      <h3 onClick={showCart}>Cart:{quantity} Items</h3>
    </div>

  );
};

export default Cart;

