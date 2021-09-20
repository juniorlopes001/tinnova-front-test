import './styles.scss';

import { useField } from 'formik';
import React, { InputHTMLAttributes, useState } from 'react';

import { CustomInput, InputContainer, Label } from '../LayoutStyles/Styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
  max?: string;
  disabled?: any;
  }

export const Input: React.FC<InputProps> = ({ label, name, type, max, disabled }) => {
  const [isActive, setIsActive] = useState(false);
  
  const [inputValue, setValue] = useState("");



  const [field, meta, helpers] = useField({name})

  return (
    <>
      <InputContainer className="floatAnimation">
        <CustomInput
         {...field} {...name}
          name={name}   
          type={type} 
          max={max}
          disabled={disabled}
        />
         {meta.error && meta.touched && <div className="errors">{meta.error}</div>}
        <Label className={isActive ? "Active" : ""} htmlFor="text">
          {label}
        </Label>
      </InputContainer>
    </>
  );
};
