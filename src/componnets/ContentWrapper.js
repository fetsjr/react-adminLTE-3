// @flow
import * as React from 'react';

type Props = {

};
export const ContentWrapper = (props: Props) => {
    return (
        <div>
            <div className="content-wrapper">

                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Fixed Layout</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Layout</a></li>
                                    <li className="breadcrumb-item active">Fixed Layout</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                </section>


                <section className="content">
                    {props.children}
                </section>

            </div>
        </div>
    );
};
