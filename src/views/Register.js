import * as React from 'react';
import {ConfigPage} from "../componnets/ConfigPage";
import {Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {ICheck} from "../componnets/ICheck";

type Props = {

};
 const Register = (props: Props) => {
    return (
        <>
            <ConfigPage title="login page" BodyCss='hold-transition register-page' >
                <div className="register-box">
                    <div className="register-logo">
                        <Link to="/dashboard"><b>Admin</b>LTE</Link>
                    </div>

                    <div className="card">
                        <div className="card-body register-card-body">
                            <p className="login-box-msg">Register a new membership</p>
                            <Formik initialValues={{
                                name:'',
                                email: '',
                                password: '',
                                agreeTerms:false
                            }}
                                    validationSchema={Yup.object().shape({
                                        email: Yup.string().email('Invalid email address').required('Required'),
                                        password: Yup.string().min(8,'Must be 15 characters').required('Password is required'),
                                        agreeTerms: Yup.boolean()
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
                                                <Field type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} name='name' placeholder="Full name" />
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <FontAwesomeIcon icon="user" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <Field type="email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} name='email' placeholder="Email" />
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <FontAwesomeIcon icon="envelope" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <Field type="password" name="password"  className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} placeholder="Password" />
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <FontAwesomeIcon icon="lock" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <Field type="password" name="password"  className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} placeholder="Retype password" />
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <FontAwesomeIcon icon="lock" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <ICheck color="primary" id="agreeTerms" name="agreeTerms" type="checkbox" >
                                                        I agree to the <a href="#">terms</a>
                                                    </ICheck>
                                                </div>

                                                <div className="col-4">
                                                    <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>Register</button>
                                                </div>

                                            </div>
                                        </Form>
                                    ) }
                            />



                            <div className="social-auth-links text-center">
                                <p>- OR -</p>
                                <a href="#" className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2"></i>
                                    Sign up using Facebook
                                </a>
                                <a href="#" className="btn btn-block btn-danger">
                                    <i className="fab fa-google-plus mr-2"></i>
                                    Sign up using Google+
                                </a>
                            </div>

                            <Link to="/auth/login" className="text-center">I already have a membership</Link>
                        </div>

                    </div>

                </div>
            </ConfigPage>

        </>
    );
};

export default Register;
