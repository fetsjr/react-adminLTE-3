import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const shadowsEnum = {
  none: "shadow-none",
  small: "shadow-sm",
  regular: "shadow",
  large: "shadow-lg",
};
const bgColor = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  danger: "bg-danger",
  warning: "bg-warning",
  info: "bg-info",
  light: "bg-light",
  dark: "bg-dark",
  white: "bg-white",
};
const SmallBox = (props) => {
  const {
    message,
    number,
    icon,
    bg,
    moreInfo = "More info",
    shadows = "none",
      loading
  } = props;
  return (
    <>
      <div className={`small-box ${bgColor[bg]} ${shadowsEnum[shadows]}`}>
          {loading? <div className={`overlay ${loading==='dark'? "dark":''}`}>
              <FontAwesomeIcon icon={icon} className="fa-3x" />
          </div>:''}
        <div className="inner">
          <h3>{number}</h3>

          <p>{message}</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <Link to="/" className="small-box-footer">
          {moreInfo + " "}
          <FontAwesomeIcon icon="arrow-circle-right" />
        </Link>
      </div>
    </>
  );
};

SmallBox.propTypes = {
  message: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  bg: PropTypes.oneOf(["info", "warning", "success", "danger"]),
  bgBoxIcon: PropTypes.oneOf(["info", "warning", "success", "danger"]),
  shadows: PropTypes.oneOf(["small", "regular", "larger ", "none"]),
  moreInfo: PropTypes.string,
  loading:PropTypes.oneOf([true,false,'dark']),
};

export default SmallBox;
