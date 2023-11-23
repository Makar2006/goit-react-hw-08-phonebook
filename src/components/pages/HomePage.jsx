import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const HomePage = () => {
  const isLogedIn = useSelector(selectIsLoggedIn);
  if (isLogedIn) {
    return <Navigate to="/contacts" replace />;
  }
  return (
    <div>
      <h1 className="title">PhoneBook</h1>
      <div>
        Please
        <NavLink to="/register">Register</NavLink>
        or
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
};

export default HomePage;
