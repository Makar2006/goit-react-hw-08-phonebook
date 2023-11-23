import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import css from './LoginForm.module.css';
import { login } from '../../redux/auth';
import { selectIsLoggedIn } from '../../redux/authSelectors';
import { toggleClick } from '../../redux/tooglePassword';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [toggleInput, setToggleInput] = useState('password');
  const dispatch = useDispatch();

  const isLogedIn = useSelector(selectIsLoggedIn);

  const onSubmit = data => {
    dispatch(login(data))
      .unwrap()
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      {isLogedIn && <Navigate to="/contacts" replace />}
      <form className={css.contactForm} onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Email</span>
          <input
            className={css.contactInput}
            type="email"
            placeholder="user@gmail.com"
            {...register('email', { required: true })}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            className={css.contactInput}
            type={toggleInput}
            placeholder="********"
            {...register('password', { required: true })}
          />
          <span onClick={() => toggleClick(toggleInput, setToggleInput)}></span>
        </label>
        <button className={css.formButton} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
