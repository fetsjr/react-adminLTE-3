// @flow
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const shadowsEnum = {
  none: "shadow-none",
  small: "shadow-sm",
  regular: "shadow",
  large: "shadow-lg",
};
const bgColor = {
  primary:"bg-primary",
  secondary:"bg-secondary",
  success:"bg-success",
  danger:"bg-danger",
  warning:"bg-warning",
  info:"bg-info",
  light: "bg-light",
  dark:"bg-dark",
  white:"bg-white",
}
const InfoBox = (props) => {
  const {
    message,
    number,
    icon,
    bg,
    bgBoxIcon,
    shadows = "none",
    progress,
    progressMessage,
    isGradient
  } = props;
  return (
    <>
      <div className={`info-box bg-${isGradient?'gradient-'+bg:bg} ${shadowsEnum[shadows]}`}>
        <span className={`info-box-icon bg-${bgBoxIcon}`}>
          <FontAwesomeIcon icon={["far", icon]} className="nav-icon" />
        </span>

        <div className="info-box-content">
          <span className="info-box-text">{message}</span>
          <span className="info-box-number">{number}</span>
          {progress ? (
            <>
              <div className="progress">
                <div
                  className={`progress-bar`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="progress-description">
                {progress}% {progressMessage}
              </span>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

InfoBox.propTypes = {
  message: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  bg: PropTypes.oneOf(["info", "warning", "success", "danger"]),
  bgBoxIcon: PropTypes.oneOf(["info", "warning", "success", "danger"]),
  shadows: PropTypes.oneOf(["small", "regular", "larger ", "none"]),
  progress: PropTypes.number,
  progressMessage: PropTypes.string,
  isGradient:PropTypes.bool
};

export default InfoBox;
