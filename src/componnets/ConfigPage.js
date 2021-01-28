// @flow
import * as React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
    title:''
 };
export const ConfigPage = (props: Props) => {
    const {children, title, BodyCss } = props;
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <body className={BodyCss} />
            </Helmet>
            { children }
        </div>
    );
};
