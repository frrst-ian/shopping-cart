/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import "./Input.css";

export const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  min,
  ...props
}) => {
  return (
    <div className="input-container">
      <input
        type={type}
        className="input-field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={0}
        {...props}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password", "number", "tel"]),
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
};
