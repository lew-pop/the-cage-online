import React from "react";
import PropTypes from "prop-types";

// Button Component
const Button = ({
  label,
  onClick,
  type = "button",
  style = {},
  className = "",
  disabled = false,
}) => {
  const defaultStyles = {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      style={{ ...defaultStyles, ...style }}
      className={`custom-button ${className}`}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {label}
    </button>
  );
};

// PropTypes for validation
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  style: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

// Export Component
export default Button;
