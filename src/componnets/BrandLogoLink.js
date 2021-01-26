// @flow
import * as React from 'react';

type Props = {
    logo:'',
    brand:'',
    link:''
};
export const BrandLogoLink = (props: Props) => {
    return (
        <>
            <a href={props.link} target="_blank" className="brand-link" rel="noopener noreferrer">
                <img src={props.logo} alt="AdminLTE Logo"
                     className="brand-image img-circle elevation-3" style={{opacity: .8}}/>
                <span className="brand-text font-weight-light">{props.brand}</span>
            </a>
        </>
    );
};
