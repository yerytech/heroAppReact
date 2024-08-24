
import { InputForm } from "../components";
import { Link, } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../context";



export const LoginPage = () => {

const { onInputChange, EmailInput, PasswordInput,  } = useForm({
  EmailInput: "",
  PasswordInput: "",
});
   
  const { login } = useContext(AuthContext);

  
  const onLogin = () => {
    login(EmailInput,PasswordInput);
  }
  

  
  
  
 
  return (
    <div className="container mt-5  animate__animated animate__fadeInLeft">
      <h1>Login</h1>
      <hr />
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
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
      <Link to={"/register"} className="container m-5">
        Create Acount
      </Link>
    </div>
  );
}
