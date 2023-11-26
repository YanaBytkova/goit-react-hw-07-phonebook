import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {filterContact, inputFilter} from 'redux/contacts/contacts.reducer';
import css from './Filtering.module.css';
import { selectFilter } from 'redux/contacts/contacts.selector';
const Filtering = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

  const handleInputFilter = event => {
    const value = event.target.value;
    dispatch(inputFilter(value));
    dispatch(filterContact(value));
  };
    return (
        
        <div>
            <p className={css.labelText}>Find contacts by name</p>
            <input type="text" value={filter}  onChange={handleInputFilter}/>
        </div> 
       
    );

}
export default Filtering;