
import { Navigate } from "react-router";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../auth/context";


export const PrivateRoute = ({ children }) => {
    
   
    const { logged } = useContext(AuthContext);

    
    return (logged) ? children : <Navigate to="/login" />
}
    
PrivateRoute.propTypes = {
    children: PropTypes.node
}
