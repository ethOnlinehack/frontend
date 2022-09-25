import React from 'react';
import { Input, } from 'antd';
import css from "./textArea.module.scss"
const { TextArea } = Input;
import { ErrorMessage, useField } from "formik";

import { Field } from 'formik';

const TextAreaComponent = ({ ...props }) => {
    const [field, meta] = useField(props);

    return (
                <TextArea {...field}  className={css.TextArea} rows={4}  />
    );
};

export default TextAreaComponent;