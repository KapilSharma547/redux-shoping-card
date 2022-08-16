import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartslice";

const CartItem = ({ name, quantity, total, price, id }) => {
    const dispatch = useDispatch();
    const incrementCartItem = () => {
        dispatch(
            cartActions.addToCart({
                name,
                id,
                price,
            })
        )
    }
    const decrementCartItem = () => {
        dispatch(cartActions.removeFromCart(id));
    };
    // console.log(name)

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <div className="" style={{ width: 1000, border: '1px solid red' }}>
                            <h2> {name}</h2>
                            <p>${price} /-</p>
                            <p className="p">x{quantity}</p>
                            <article>Total ${total}</article>
                            <div>
                                <button className="btn" onClick={incrementCartItem}>
                                    -
                                </button>

                                <button className="btn" onClick={decrementCartItem}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItem;