import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItem";
import Products from "./Products";
import Header from "./Header";
const Layout = () => {
    let total = 0;
    const itemsList = useSelector((state) => state.cart.itemsList);
    // console.log(itemsList)
    itemsList.forEach((item) => {
        total += item.totalPrice;
    })

    const showCart = useSelector((state) => state.cart.showCart);
    // console.log(showCart);

    return (
        <>

            <div className="container-fluid" >
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="layout">
                            <Header />
                            <Products />
                            <div className="">
                                <h3>Total: ${total}</h3>
                                <button className="btn">Place Order</button>
                            </div>{" "}
                            {showCart && <CartItems />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Layout;