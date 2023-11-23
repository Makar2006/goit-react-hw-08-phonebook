import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logOut } from '../../redux/auth';
import { selectUser } from '../../redux/authSelectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);
  return (
    <>
      <NavLink to="/contacts">Contacts</NavLink>
      <div>
        <p>{name}</p>
        <button onClick={() => dispatch(logOut())}>Log out</button>
      </div>
    </>
  );
};

export default UserMenu;
