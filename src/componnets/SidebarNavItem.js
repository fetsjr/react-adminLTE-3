// @flow
import * as React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import SidebarNavItemLink from "./SidebarNavItemLink";

type Props = {
  icon: 'tachometer-alt';
  title: ''
};

const SidebarNavItem = (props: Props) => {
    const {icon,title} = props;
    return (
        <>
            <li className="nav-item">
                <Link to="#" className="nav-link">
                    <FontAwesomeIcon icon={icon} className="nav-icon" />
                    <p>
                        {title}
                        <FontAwesomeIcon icon={['fas', 'angle-left']} className="right" />
                    </p>
                </Link>
                <ul className="nav nav-treeview">
                    <SidebarNavItemLink title='Dashboard v1' link="index.html" />

                    <li className="nav-item">
                        <a href="../../index.html" className="nav-link">
                            <i className="far fa-circle nav-icon"></i>
                            <p>Dashboard v1</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="../../index2.html" className="nav-link">
                            <i className="far fa-circle nav-icon"></i>
                            <p>Dashboard v2</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="../../index3.html" className="nav-link">
                            <i className="far fa-circle nav-icon"></i>
                            <p>Dashboard v3</p>
                        </a>
                    </li>
                </ul>
            </li>
        </>
    );
};

export default SidebarNavItem;
