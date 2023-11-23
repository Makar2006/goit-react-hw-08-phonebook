import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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
        notifyError('Incorrect password or login');
      });
  };

  return (
    <div>
      {isLogedIn && <Navigate to="/contacts" replace />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Email</span>
          <input
            type="email"
            placeholder="user@gmail.com"
            {...register('email', { required: true })}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type={toggleInput}
            {...register('password', { required: true })}
          />
          <span onClick={() => toggleClick(toggleInput, setToggleInput)}></span>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
