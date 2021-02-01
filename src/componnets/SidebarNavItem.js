// @flow
import React,{ useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SidebarNavItemLink from "./SidebarNavItemLink";

type Props = {
  icon: "tachometer-alt",
  title: "",
  badge?:{
    title: "",
    css: "badge-danger"
  }
};

const SidebarNavItem = (props: Props) => {
  const { icon, title, children } = props;
  const [dropdownOpen,setDropdownOpen] =useState(false)
  const style = {
    display: dropdownOpen?'block':'none'
  }

  const toggle = (e)=>{
    e.preventDefault();
    setDropdownOpen(!dropdownOpen)
  }
  return (
    <>
      <li className="nav-item">
        <Link to="#" className={ 'nav-link ' + (dropdownOpen ? 'active':'')}  onClick={toggle}>
          <FontAwesomeIcon icon={icon} className="nav-icon" />
          <p>
            {title}
            { children?<FontAwesomeIcon icon={["fas", "angle-left"]} className="right" /> :'' }
            {props.badge ? <span className={ "right badge " + props.badge.css }>{props.badge.title}</span> : ''}
          </p>
        </Link>
        <ul className="nav nav-treeview" style={style} >{children}</ul>
      </li>
    </>
  );
};

export default SidebarNavItem;
