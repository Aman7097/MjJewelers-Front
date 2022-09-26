import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import {logout}  from '../../actions/userActions'

import "../../App.css"
import Search from './Search'


const Header = () => {
    const alert = useAlert();
    const dispatch = useDispatch();


    const { user, loading } = useSelector(state => state.auth)
    const logoutHandler =() =>{
        dispatch(logout());
        alert.success(" Logged Out Successfully");
    }

    return (
        <Fragment>
            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand ml-5 px-2">
                        < Link to='/'>
                            <img
                                src="https://res.cloudinary.com/swift7097/image/upload/v1637054652/MJ_LOGO_1_t5acfs.jpg"
                                alt="logo" width="115" />
                        </Link>
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-2 mt-md-0">
                    <Route render={({ history }) => < Search history={history} />} />
                </div>

                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <Link to="/cart" style={{ textDecoration: 'none' }} >
                        <span id="cart" className="ml-3">Cart</span>
                        <span className="mx-1" id="cart_count">2</span>
                    </Link>
                    {user ? (
                        <div className="ml-4 dropdown d-inline">
                            <Link to="#" className=" btn dropdown-toggle text-white mx-4"
                                type="button" id="dropdownMenuButton1" data-toggle="dropdown" data-bs-toggle="dropdown" 
                                aria-haspopup="true" aria-expanded="false">


                                <figure className="avatar avatar-nav">
                                    <img
                                        src={user.avatar && user.avatar.url}
                                        alt={user && user.name}
                                        className="rounded-circle"
                                    />
                                </figure>
                                <span>{user && user.name}</span>

                            </Link>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                {user && user.role !== "admin" ? (
                                    <Link className="dropdown-item" to="/orders/me">
                                        Orders
                                    </Link>
                                ) : (
                                    <Link className="dropdown-item" to="/dashboard">
                                        Dashboard
                                    </Link>

                                )}
                                 <Link className="dropdown-item" to="/me">
                                        Profile
                                    </Link>

                                <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>
                                    Logout
                                </Link>
                            </div>


                        </div>

                    ) : !loading && <Link to="/login" className="btn mx-4" id="login_btn">Login</Link>
                    }



                </div>
            </nav>





        </Fragment>

    )
}

export default Header
