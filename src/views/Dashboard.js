// @flow
import * as React from 'react';
import {ConfigPage} from "../componnets/ConfigPage";

type Props = {

};
 const Dashboard = (props: Props) => {
    return (
        <>
            <ConfigPage title="Dashboard" BodyCss='hold-transition sidebar-mini layout-fixed' >
                <h1>HOLA MUNDO</h1>
            </ConfigPage>

        </>
    );
};

export default Dashboard;
