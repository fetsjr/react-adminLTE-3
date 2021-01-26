// @flow
import * as React from 'react';

type Props = {

};

export function Footer(props: Props) {
    return (
        <div>
            <footer className="main-footer">
                <div className="float-right d-none d-sm-block">
                    <b>Version</b> 3.1.0-rc
                </div>
                <strong>Copyright &copy; 2014-2020 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights
                reserved.
            </footer>
        </div>
    );
};
