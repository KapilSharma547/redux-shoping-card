import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartslice";
import './page.css';
const Product = ({ name, imgURL, price, id }) => {
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(cartActions.addToCart({
            name,
            id,
            price,
        }))
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10">
                        <div className="card">
                            <img src={imgURL} alt={name} style={{ width: 245 }} />
                            <h2>{name} </h2>
                            <p>$ {price} </p>
                            <button className="btn " onClick={addToCart}> Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product;