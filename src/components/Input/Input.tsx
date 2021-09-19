import React, { InputHTMLAttributes, useState } from "react";
import { CustomInput, InputContainer, Label } from "../LayoutStyles/Styles";
import './styles.scss';
import { Field, useField } from 'formik'; 

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  }

export const Input: React.FC<InputProps> = ({ label, name }) => {
  const [isActive, setIsActive] = useState(false);
  
  const [inputValue, setValue] = useState("");

  function handleTextChange(text: any) {
    setValue(text);

    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  const [field, meta, helpers] = useField({name})

  return (
    <>
      <InputContainer className="floatAnimation">
        <CustomInput
         {...field} {...name}
          name={name}    
        />
         {meta.error && meta.touched && <div>{meta.error}</div>}
        <Label className={isActive ? "Active" : ""} htmlFor="text">
          {label}
        </Label>
      </InputContainer>
    </>
  );
};
