import React from 'react';
import { ErrorMessage, useField} from 'formik';
import css from "./inputtext.module.scss";

const TextField = ({label, ...props}) => {
  const [field, meta] = useField(props)
  return (
    <div>
      {label ? <label htmlFor={field.name}>{label}</label> : <></>}
      <input 
        className={css.input}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}

export default TextField;