import React from 'react';
import { renderRoutes } from "react-router-config";
import { Helmet } from 'react-helmet';
function AuthLayout(props) {
    const { route } = props;
    console.log(route)
    return (
        <>
            <Helmet>
                <body className="hold-transition login-page" />
            </Helmet>
            {renderRoutes(route.routes)}
        </>
    );
}

export default AuthLayout;