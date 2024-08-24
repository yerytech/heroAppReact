
import { useContext } from "react";
import { Link, NavLink,  } from "react-router-dom";
import { AuthContext } from "../../auth";



export const Navbar = () => {
    
  const { logout, deleteAcount } = useContext(AuthContext);
  const userData = localStorage.getItem("user");
  if (!userData) return;
  const user = JSON.parse(userData);
  
  



  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/marvel">
            Marvel
          </NavLink>

          <NavLink className="nav-item nav-link" to="/dc">
            DC
          </NavLink>

          <NavLink className="nav-item nav-link" to="/serch">
            Serch
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">{user?.name}</span>
          <button className="nav-item nav-link btn" onClick={logout}>
            LogOut
          </button>
          <button className="nav-item nav-link btn" onClick={deleteAcount}>
            Delete acount
          </button>
        </ul>
      </div>
    </nav>
  );
};
