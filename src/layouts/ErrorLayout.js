import * as React from 'react';
import {renderRoutes} from "react-router-config";

type Props = {

};
 const ErrorLayout = (props: Props) => {
     const { route } = props;
    return (
        <div>
            {renderRoutes(route.routes)}
        </div>
    );
};

 export default ErrorLayout;
