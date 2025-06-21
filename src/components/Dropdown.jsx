import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Dropdown = forwardRef(({ currencys, title,onChange,value }, ref) => {
  
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <div>
        <select ref={ref} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-800" onChange={onChange} value={value}>
          {currencys.map((currency) => (
            <option value={currency} key={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
});

Dropdown.propTypes = {
  currencys: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Dropdown;
