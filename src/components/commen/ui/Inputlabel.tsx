import React, { ChangeEvent } from "react";

type InputProps = {
  name: string;
  type: "text" | "password" | 'email';
  label: string;
  error: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Inputlabel = ({ name, type, label,  error, onChange }: InputProps) => {
  return (
    <div className="col-12">
      <input className="floting-input px-3" required type={type} name={name} onChange={onChange} />
      <label className="floting-label" htmlFor={name}>{label}</label>
      {error ? <p className="display-2 text-red">{error}</p> : false}
    </div>
  );
};

export default Inputlabel;