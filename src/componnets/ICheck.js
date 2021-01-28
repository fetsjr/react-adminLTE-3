import * as React from 'react';
import PropTypes from 'prop-types';
import {Field} from "formik";
import '../../node_modules/icheck-bootstrap/icheck-bootstrap.min.css'


export const ICheck = ({id,name, children, color,type}) => {
    return (
        <>
            <div className={"icheck-" + color} >
                <Field type={type} id={id} name={name} />
                <label htmlFor={id}>
                    {children}
                </label>
            </div>
        </>
    );
};

// eslint-disable-next-line react/no-typos
ICheck.PropTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.oneOf(['radio', 'check']),
    id: PropTypes.string,
};
