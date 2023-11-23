import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signUp } from '../../redux/auth';
import { toggleClick } from '../../redux/tooglePassword';
import { selectIsLoggedIn } from '../../redux/authSelector';

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
        notifyError('this profile is busy');
      });
  };

  return (
    <div>
      {isLogedIn && <Navigate to="/contacts" replace />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Name</span>
          <input
            type="text"
            placeholder="User Name"
            {...register('name', { required: true })}
          />
          <span>{errors.name?.message}</span>
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            placeholder="user@gmail.com"
            {...register('email', { required: true })}
          />
          <span>{errors.email?.message}</span>
        </label>
        <label>
          <span>Password</span>
          <input
            type={toggleInput}
            {...register('password', { required: true })}
          />
          <span onClick={() => toggleClick(toggleInput, setToggleInput)}></span>
          <span>{errors.password?.message}</span>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;
