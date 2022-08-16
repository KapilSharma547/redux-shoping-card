import React from "react";
import { useDispatch } from "react-redux"
// import { authActions } from "../store/auth-slice";
import { authActions } from '../store/auth-slice';
const Auth = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        //dispatch 
        dispatch(authActions.login())
        // console.log(authActions.login())
    }
    return (
        <>
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-4 mx-auto">
                        <h1>Login</h1>
                        <form onSubmit={handleSubmit}>
                            <lable>Id</lable><br></br>
                            <input type="text" name="id" /><br></br>
                            <lable>Password</lable><br></br>
                            <input name="password" type="password" /><br></br>
                            <button className="btn mt-2">
                                Login
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Auth;