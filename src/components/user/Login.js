
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../layout//Loader'
import Metadata from '../layout/Metadata'
import { useSelector, useDispatch } from 'react-redux'
import { useAlert } from 'react-alert'

import { login, clearErrors } from '../../actions/userActions'

const Login = ({ history }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth)

    useEffect(() => {

        if (isAuthenticated) {
            history.push('/')
        }

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

    }, [dispatch, alert, isAuthenticated, error, history])

    const submitHandler =(e)=>{
        e.preventDefault();
        dispatch(login(email,password));
    }
    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <Metadata title={'Login'} />
                    <div className="row wrapper">
                        <div className="col-10 col-lg-5">
                            <form className="shadow-lg" onSubmit={submitHandler}>
                                <h1 className="mb-3">Login</h1>
                                <div className="form-group">
                                    <label htmlFor="email_field">Email</label>
                                    <input
                                        type="email"
                                        id="email_field"
                                        className="form-control"
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value) }
                                    />
                                </div>

                                <div className="form-group">
                                    <label for="password_field">Password</label>
                                    <input
                                        type="password"
                                        id="password_field"
                                        className="form-control"
                                        value={password}
                                        onChange={(e)=> setPassword(e.target.value) }
                                    />
                                </div>

                                <Link to='/password/forgot' href="#" className="float-end  d-block">Forgot Password?</Link>

                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-lg btn-block px-5 float-none  ml-2 mx-5 d-block"
                                >
                                    LOGIN
                                </button>

                                <Link to="/register" href="#" className="float-end  mt-3 d-block">New User?</Link>
                            </form>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Login
