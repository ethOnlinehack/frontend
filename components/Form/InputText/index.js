import React from 'react';
import { ErrorMessage, useField} from 'formik';
import css from "./inputtext.module.scss";

const InputText = ({label, ...props}) => {
  const [field, meta] = useField(props)
  return (
    <div className= {css.position}>
      {label ? <label htmlFor={field.name}>{label}</label> : <></>}
      <input 
        className={css.input}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className={css.error} />
    </div>
  )
}

export default InputText;