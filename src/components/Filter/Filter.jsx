import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { selectFilterValue } from 'redux/selectors';
import { setFilterValue } from 'redux/filterSlice';

export default function Filter() {
  const value = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilterValue(e.target.value))
  }


  return (
    <div>
      <label className={css.label}>
        {' '}
        Find contacts by name:
        <input
          className={css.input}
          type="text"
          name="filter"
          title="Enter first letters or numbers"
          placeholder='Enter first letters'
          value={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}


