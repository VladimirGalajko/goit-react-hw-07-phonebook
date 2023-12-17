import { useSelector, useDispatch } from 'react-redux';
import { Input } from './Filter.styled';
import { setFilterAction } from 'store/filterSlise/filterSlise';


export const Filter = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  
  const onChange = ({ target }) => {
    dispatch(setFilterAction(target.value));

  };

  return (
    <label>
      <p>Search by name</p>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="search"
      />
    </label>
  );
};
