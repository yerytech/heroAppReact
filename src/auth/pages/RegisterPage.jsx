
import { InputForm } from "../components";
import { Link, } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";



export const RegisterPage = () => {
 

  const { onInputChange, EmailInput, PasswordInput,nameInput, } = useForm({
    EmailInput: "",
    PasswordInput: "",
    nameInput:''
  });
  const {register } = useContext(AuthContext);
  const handleRegister = () => {
    register(EmailInput, PasswordInput, nameInput);
    
  }

  return (
    <div className="container mt-5 animate__animated animate__fadeInRight">
      <h1>Register</h1>
      <hr />
      <InputForm
        typeInput="text"
        placeholder="User name"
        iconInput="(&)"
        name="nameInput"
        value={nameInput}
        onChange={onInputChange}
      />

      <InputForm
        typeInput="text"
        placeholder="Email"
        iconInput="@"
        name="EmailInput"
        value={EmailInput}
        onChange={onInputChange}
      />

      <InputForm
        typeInput="password"
        placeholder="Password"
        iconInput="**"
        name="PasswordInput"
        value={PasswordInput}
        onChange={onInputChange}
      />
      <button className="btn btn-primary" onClick={handleRegister}>
        Resiter
      </button>
      <Link to={"/login"} className="container m-5">
        Ihave acount
      </Link>
    </div>
  );
  
}
