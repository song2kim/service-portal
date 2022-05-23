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
        &:-webkit-autofill,
        :-webkit-autofill:hover,
        :-webkit-autofill:focus,
        :-webkit-autofill:active {
            transition: background-color 5000s ease-in-out 0s;
            -webkit-transition: background-color 9999s ease-out;
            -webkit-box-shadow: 0 0 0px 0 rgba(246,246,246) inset !important;
        }
    }

    &__error {
      ${tw`text-violet-400 text-lg font-normal`};
      margin-top: 8px;
    }
  }
`;

const Input = ({
    id,
    type = 'text',
    label,
    placeholder,
    required = false,
    width = '100%',
    register,
    errors,
}: InputProps) => (
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
                    {...id === 'email' ? (
                        {
                            ...register('email', {
                                required: 'This field is required.',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                                    message: 'Please use a valid email address.',
                                },
                            }),
                        }
                    ) : (
                        {
                            ...register(`${id}`, {
                                required: 'This field is required.',
                            }),
                        }
                    )}

                />

                {errors[id]
                    && <p className="input-box__error">{errors[id]?.message}</p>}

            </label>
        </div>
    </StyledInput>
);

export default Input;
