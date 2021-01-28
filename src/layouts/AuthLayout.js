import React from 'react';
import { renderRoutes } from "react-router-config";

function AuthLayout(props) {
    const { route } = props;
    console.log(route)
    return (
        <>
            {renderRoutes(route.routes)}
        </>
    );
}

export default AuthLayout;
