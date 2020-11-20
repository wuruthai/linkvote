import React from 'react';
import { getClassName } from 'utils';
import { CaretDownIcon } from 'assests/icons';
import 'styles/select.scss';

const Select = ({
  name = 'custom',
  selectedValue,
  onChange,
  data,
  valueKey = 'id',
  nameKey = 'name',
  className,
  ...rest
}) => {
  const classes = getClassName(['select']);
  return (
    <span className={`select-container ${className && className}`}>
      <CaretDownIcon className="select-icon" />

      <select
        {...rest}
        className={classes}
        onChange={(event) => {
          const value = event.target.value;
          const item = data.find((option) => option[valueKey] === value);
          return onChange(item);
        }}
      >
        {data.map((item, index) => (
          <option
            key={`${name}-${index}`}
            value={item[valueKey]}
            onClick={() => console.log(item)}
          >
            {item[nameKey]}
          </option>
        ))}
      </select>
    </span>
  );
};

export default Select;
