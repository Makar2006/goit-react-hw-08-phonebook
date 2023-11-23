import { NavLink } from 'react-router-dom';

const AuthMenu = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <ul>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </>
  );
};

export default AuthMenu;
