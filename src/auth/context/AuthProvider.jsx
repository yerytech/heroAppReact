
import { useEffect, useReducer } from "react";
import { AuthContext, authReducer } from "./index"
import PropTypes from "prop-types"
import { types } from "../types/types";
import { useNavigate } from "react-router";



const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user,
    user: user
    
  }
}

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authState, dispatch] = useReducer(authReducer, init);






  // guardo el usuario 
  useEffect(() => {
    if (authState.user) {
      localStorage.setItem("user", JSON.stringify(authState.user));
    }
  }, [authState, authState.user]);
    
  // funcion para login 
  const login = (email1, password1) => {
    const userDate = localStorage.getItem("user");
    if (email1 === '' && password1 === '') {
      alert('Campos vacios')
    }else 
    if (userDate) {
      const user = JSON.parse(userDate);
      
      if (user.email === email1&&user.password===password1) {
        dispatch({ type: types.login, payload: user })
        navigate('/marvel');
       
        return;
      } 
    } else {
      alert("Datos incorrectos");
    

   }
    
    
     
    
  }

  // funcion para el logout
  const logout = () => {
    dispatch({ type: types.logout });

  }

  const deleteAcount = () => {
    localStorage.clear('user');
      dispatch({ type: types.logout });
    };
  // funcion de registro
  
  const register = (email,password,name) => {
    const userDataRegister = { email, password, name };
    dispatch({
      type: types.register,
      logged: false,
      payload: userDataRegister
    });
    navigate("/login");
  }

  return (
      <AuthContext.Provider value={{
      ...authState,
      login,
      logout,
      register,
      deleteAcount
 
      }}>
          {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node
  
  
  
}
