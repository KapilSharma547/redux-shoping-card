import { authActions } from "../store/auth-slice";
import Cart from "./Cart";
import { useDispatch } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(authActions.logout());
    }
    return (
        <>
            
                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <ul className="text-decoration-none" >
                                <h2>
                                    Redux Shopping App
                                </h2>
                                <Cart />
                                <button onClick={logoutHandler} className="btn btn-danger"  >
                                    Logout
                                </button>{" "}
                            </ul>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Header;