// @flow
import React,{ useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {useSpring, animated} from 'react-spring'

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
  const displayStyle = useSpring({
    to: {display: dropdownOpen?'block':'none',height: dropdownOpen?'100%':'0%', overflow:dropdownOpen?'hidden':'hiden'},
    config: { duration: 2000 }
    } )
  const toggle = (e)=>{
    e.preventDefault();
    setDropdownOpen(!dropdownOpen)
  }
  return (
    <>
      <li className={"nav-item " + (dropdownOpen?'menu-is-opening':'') }>
        <Link to="#" className={ 'nav-link ' + (dropdownOpen ? 'active':'')}  onClick={toggle}>
          <FontAwesomeIcon icon={icon} className="nav-icon" />
          <p>
            {title}
            { children?<FontAwesomeIcon icon={["fas", "angle-left"]} className="right" /> :'' }
            {props.badge ? <span className={ "right badge " + props.badge.css }>{props.badge.title}</span> : ''}
          </p>
        </Link>
        <animated.ul className="nav nav-treeview" style={displayStyle}>

            {children}


        </animated.ul>

      </li>
    </>
  );
};

export default SidebarNavItem;
