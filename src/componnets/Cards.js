// @flow
import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export const Cards = (props) => {
    return (
        <>
            <div className="card card-primary collapsed-card">
                <div className="card-header">
                    <h3 className="card-title">Expandable</h3>

                    <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                            <FontAwesomeIcon icon="plus" />
                        </button>
                    </div>

                </div>

                <div className="card-body">
                    The body of the card
                </div>

            </div>
        </>
    );
};


export default Cards;
