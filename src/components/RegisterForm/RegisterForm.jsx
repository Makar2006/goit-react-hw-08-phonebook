import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signUp } from '../../redux/auth';
import { toggleClick } from '../../redux/tooglePassword';
import { selectIsLoggedIn } from '../../redux/authSelectors';
import css from './RegisterForm.module.css';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    name: yup.string().min(4).max(20).required(),
    email: yup.string().min(5).max(20).required(),
    password: yup.string().min(6).max(15).required(),
  })
  .required();

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const isLogedIn = useSelector(selectIsLoggedIn);
  const [toggleInput, setToggleInput] = useState('password');
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(signUp(data))
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
          <span>Name</span>
          <input
            className={css.contactInput}
            type="text"
            placeholder="User Name"
            {...register('name', { required: true })}
          />
          <span>{errors.name?.message}</span>
        </label>
        <label>
          <span>Email</span>
          <input
            className={css.contactInput}
            type="email"
            placeholder="user@gmail.com"
            {...register('email', { required: true })}
          />
          <span>{errors.email?.message}</span>
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
          <span>{errors.password?.message}</span>
        </label>
        <button className={css.formButton} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
