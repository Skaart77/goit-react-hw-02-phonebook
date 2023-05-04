import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './filter.styled';
const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <Input type="text" value={value} onChange={onChange} />
  </Label>
);
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
export default Filter;
