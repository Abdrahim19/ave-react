import React, { ChangeEvent } from 'react';
import { FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form';

type InputWithLabelProps = {
    name: string;
    type: "text" | "password" | 'email';
    label: string;
    error?: FieldError | undefined ;
    value?:string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    register?: UseFormRegister<any>;
    rules?: RegisterOptions;
    placeholder:string;
  };
  
const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, value, onChange , error ,
     placeholder , register , rules , name }) => {
  return (
    <div>
      <label htmlFor={label} className='fs-px_16 ln-ht-17px fw-medium mb-2'>{label}</label>
      <input
        type="text"
        id={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...register?.(name, rules)}
        className='normal__input'
      />
      {error ? <div className="text-danger fs-px_12">{error.message}</div> : false}
    </div>
  );
};
 
export default InputWithLabel