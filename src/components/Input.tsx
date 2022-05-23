import tw from 'twin.macro';
import styled from 'styled-components';
import React from 'react';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

interface InputProps {
    id: string;
    type?: string;
    label: string;
    placeholder: string;
    required?: boolean;
    width?: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

type InputStyle = Partial<InputProps>

const StyledInput = styled.div<InputStyle>`
  width: ${(props) => props.width || '100%'};
  .input-box {
    width: 100%;
    &__label {
        ${tw`text-lg`};
        display: inline-block;
        width: 100%;
        margin-top: 16px;
    }
    &__input {
        ${tw`bg-gray-100 placeholder:text-gray-300 font-normal`};
        display: block;
        width: 100%;
        padding: 12px 16px;
        margin-top: 8px;
        border-radius: 2px;
        border-width: 2px;
        border-color: transparent;
        &:active, 
        &:focus {
            ${tw`border-violet-400`};
        }
    }
    &__error {
      ${tw`text-violet-400 text-lg font-normal`};
      margin-top: 8px;
    }
  }
`;

function Input({
    id,
    type,
    label,
    placeholder,
    required = false,
    width = '100%',
    register,
    errors,
}: InputProps) {
    return (
        <StyledInput width={width}>
            <div className="input-box">
                <label htmlFor={id} className="input-box__label">
                    {label}
                    {required && ' *'}
                    <input
                        className="input-box__input"
                        type={type}
                        id={id}
                        placeholder={placeholder}
                        {...register(`${id}`, { required })}
                    />
                    {errors[id]?.type === 'required'
                        && <p className="input-box__error">This field is required.</p>}
                </label>
            </div>
        </StyledInput>
    );
}

export default Input;
