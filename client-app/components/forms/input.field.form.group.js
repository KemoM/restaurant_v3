import React from 'react';
import {
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

//eslint-disable-next-line
export const renderInputField = ({ input, label, type, labelClass, meta: { touched, error, warning }, ...props }) => (
  <FormGroup row>
    <Label htmlFor={input.name} className={labelClass}>{label}</Label>
    <Input {...input} type={type} {...props} />
    {touched && error && <div className="text-danger">{error}</div> }
  </FormGroup>
);
