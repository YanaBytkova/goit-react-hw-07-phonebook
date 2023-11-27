import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {inputFilter} from 'redux/contacts/contacts.reducer';
import css from './Filtering.module.css';
import { selectFilterTerm } from 'redux/contacts/contacts.selector';
const Filtering = () => {
    const filter = useSelector(selectFilterTerm);
    const dispatch = useDispatch();

  const handleInputFilter = event => {
    const value = event.target.value;
    dispatch(inputFilter(value));
  
  };
    return (
        
        <div>
            <p className={css.labelText}>Find contacts by name</p>
            <input type="text" value={filter}  onChange={handleInputFilter}/>
        </div> 
       
    );

}
export default Filtering;