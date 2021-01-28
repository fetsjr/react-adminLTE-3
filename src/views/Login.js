import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {ConfigPage} from "../componnets/ConfigPage";
import '../../node_modules/icheck-bootstrap/icheck-bootstrap.min.css'
import {Link} from "react-router-dom";
import {ICheck} from "../componnets/ICheck";
Login.propTypes = {
 logo:''
};

function Login(props) {
    return (
        <>
            <ConfigPage title="login page" BodyCss='hold-transition login-page' >
                <div className="login-box">
                    <div className="login-logo">
                        <Link to="../../index2.html"><b>Admin</b>LTE</Link>
                    </div>

                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            <Formik initialValues={{
                                email: '',
                                password: '',
                                remember:false
                            }}
                                    validationSchema={Yup.object().shape({
                                        email: Yup.string().email('Invalid email address').required('Required'),
                                        password: Yup.string().min(8,'Must be 15 characters').required('Password is required'),
                                        remember: Yup.boolean()
                                    })}
                                    onSubmit={({ email, password,remember }, { setStatus, setSubmitting }) => {
                                        setTimeout(() => {
                                            alert(JSON.stringify(`email: ${email}, password: ${password}, remember: ${remember} `, null, 2));
                                            setSubmitting(false);
                                        }, 400);

                                    }}
                                    render ={({ errors, status,isSubmitting,touched }) => (
                                        <Form >
                                            <div className="input-group mb-3">
                                                <Field type="email" name="email" className={"form-control" + (errors.email && touched.email ? ' is-invalid' : '')} placeholder="Email" />
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <FontAwesomeIcon icon="envelope" />
                                                        {/*<span className="fas fa-envelope"></span>*/}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <Field type="password" name="password"  className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} placeholder="Password" />
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <FontAwesomeIcon icon="lock" />
                                                        {/*<span className="fas fa-lock"></span>*/}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <ICheck color="primary" id="remember" name="remember" type="checkbox" >Remember Me</ICheck>
                                                </div>

                                                <div className="col-4">
                                                    <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>Sign In</button>
                                                </div>

                                            </div>
                                            {status &&
                                            <div className={'alert alert-danger'}>{status}</div>
                                            }
                                        </Form>
                                    ) }
                            />


                            <div className="social-auth-links text-center mb-3">
                                <p>- OR -</p>
                                <Link to="#" className="btn btn-block btn-primary">
                                    <FontAwesomeIcon icon={["fab","facebook"]} className="mr-2" /> Sign in using Facebook
                                </Link>
                                <Link to="#" className="btn btn-block btn-danger">
                                    <FontAwesomeIcon icon={["fab", "google-plus"]} className="mr-2" />  Sign in using Google+
                                </Link>
                            </div>


                            <p className="mb-1">
                                <Link to="forgot-password.html">I forgot my password</Link>
                            </p>
                            <p className="mb-0">
                                <Link to="/auth/register" className="text-center">Register a new membership</Link>
                            </p>
                        </div>

                    </div>
                </div>
            </ConfigPage>






        </>
    );
}

export default Login;
