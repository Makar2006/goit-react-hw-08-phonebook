import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/authSelectors';
import css from './HomePage.module.css';

const HomePage = () => {
  const isLogedIn = useSelector(selectIsLoggedIn);
  if (isLogedIn) {
    return <Navigate to="/contacts" replace />;
  }
  return (
    <div>
      <h1>PhoneBook</h1>
      <div className={css.container}>
        Please
        <NavLink to="/register">Register</NavLink>
        or
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
};

export default HomePage;
