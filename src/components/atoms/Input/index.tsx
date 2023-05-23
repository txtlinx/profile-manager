import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { InputProps } from './Input.type';
import style from './Input.module.css';
import { InputRef } from './types';

const Input = forwardRef<InputRef, InputProps>(
  (
    {
      id,
      name,
      value,
      label,
      placeholder,
      tooltip,
      icon,
      type,
      error,
      success,
      disabled,
      errorMessage,
      showPassword,
      maxLength,
      variant,
      onChange,
      onBlur,
    }: InputProps,
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focusInput: () => {
        if (inputRef.current) inputRef.current.focus();
      },
    }));

    return (
      <div
        data-testid={id}
        className={`${style.containerInput} ${variant ? style[variant] : ''} ${
          disabled ? style.disabled : ''
        } ${success ? style.success : ''} ${error ? style.error : ''}`}
      >
        <fieldset>
          <legend>
            {label && label}{' '}
            {error ? <div className={style.asteriscoError}>*</div> : null}{' '}
            {tooltip && tooltip}
          </legend>
          <input
            //agregado para el test
            data-testid={'input_' + id}
            value={value}
            name={name}
            type={showPassword ? 'text' : type}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            ref={inputRef}
          />
          {icon && icon}
        </fieldset>
        {error && <p className={style.asteriscoError}>{errorMessage}</p>}
      </div>
    );
  }
);

export default Input;
