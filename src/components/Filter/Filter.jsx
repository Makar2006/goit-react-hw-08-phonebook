import { useSelector, useDispatch } from 'react-redux';
// import css from './Filter.module.css'
import { setFilter } from '../../redux/contactFilter';

const Filter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <>
      <input
        placeholder="Search name"
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </>
  );
};

export default Filter;
