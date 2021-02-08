// @flow
import React, { useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";
import { Spring } from "react-spring/renderprops";
import { useMeasure } from "../helpers/useMesure";
type Props = {
  icon: "tachometer-alt",
  title: "",
  badge?: {
    title: "",
    css: "badge-danger",
  },
  link?: string,
};

const SidebarNavItem = (props: Props) => {
  const { icon, title, children, link } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const style = {
    display: "block",
  };

  const [bind, { height }] = useMeasure();
  const displayStyle = useSpring({
    config: { ...config.stiff, clamp: true },
    from: { opacity: 0, height: 0 },
    to: {
      opacity: dropdownOpen ? 1 : 0,
      height: dropdownOpen ? height : 0,
    },
  });
  const rotateIcon = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: `rotate(${dropdownOpen ? 0 : 90}deg)` },
  });
  const toggle = (e) => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <>
      <li className={"nav-item"}>
        <Link
          to={link ? link : "#"}
          className={"nav-link " + (dropdownOpen ? "active" : "")}
          onClick={toggle}
        >
          <FontAwesomeIcon icon={icon} className="nav-icon" />
          <p>
            {title}
            {children ? (
              <Spring to={{ value: dropdownOpen ? 0 : -90 }}>
                {(props) => (
                  <FontAwesomeIcon
                    icon={["fas", "angle-left"]}
                    className="right"
                    style={props}
                    transform={{ rotate: props.value }}
                  />
                )}
              </Spring>
            ) : (
              ""
            )}
            {props.badge ? (
              <span className={"right badge " + props.badge.css}>
                {props.badge.title}
              </span>
            ) : (
              ""
            )}
          </p>
        </Link>

        <animated.div style={{ ...displayStyle, overflow: "hidden" }}>
          <ul className="nav nav-treeview " {...bind} style={style}>
            {children}
          </ul>
        </animated.div>
      </li>
    </>
  );
};

export default SidebarNavItem;
