import PropTypes from "prop-types";
import "./Input.css";

export const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  ...props
}) => {
  const inputType = type === "number" && value === "" ? "text" : type;
  return (
    <div className="input-container">
      <input
        type={inputType}
        className="input-field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
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
};
