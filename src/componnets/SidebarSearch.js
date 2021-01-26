// @flow
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
type Props = {
    placeholder:''
};
export const SidebarSearch = (props: Props) => {
    return (
        <>
            <div className="form-inline">
                <div className="input-group" data-widget="sidebar-search">
                    <input className="form-control form-control-sidebar" type="search" placeholder={props.placeholder}
                           aria-label="Search"/>
                    <div className="input-group-append">
                        <button className="btn btn-sidebar">
                            <FontAwesomeIcon icon={faSearch} fixedWidth />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
