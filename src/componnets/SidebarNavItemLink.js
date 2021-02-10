// @flow
import * as React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

type Props = {
title: string,
link: string};
const SidebarNavItemLink = (props: Props) => {
    const {title,link} = props
    return (
        <>
            <li className="nav-item">
                <Link to={link} className="nav-link">
                    <FontAwesomeIcon icon={["far", "circle"]} className="nav-icon" />
                    <p>{title}</p>
                </Link>
            </li>
        </>
    );
};

export default SidebarNavItemLink;
