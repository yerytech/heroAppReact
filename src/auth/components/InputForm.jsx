import PropTypes from "prop-types";

export const InputForm = ({
  typeInput, placeholder,
  iconInput, name,
  value,onChange }) => {
 
 
  const onSubmitLogin = (e) => {
    e.preventDefault();
  }
  
  
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">
        {iconInput}
      </span>
      <form onSubmit={onSubmitLogin}>
        <input
          onChange={onChange}
          value={value}
          name={name}
          type={typeInput}
          className="form-control"
          placeholder={placeholder}
        />
      </form>
    </div>
  );
}

InputForm.propTypes = {
    typeInput:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    iconInput:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
}
