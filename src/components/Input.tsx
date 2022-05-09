import tw from 'twin.macro';
import styled from 'styled-components';
import React from 'react';

interface InputProps {
    id: string;
    label: string;
    placeholder: string;
    required?: boolean;
    width?: string;
    error?: boolean;
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
    id, label = 'text', placeholder = 'text', required = false, width = ' ', error = false,
}: InputProps) {
    return (
        <StyledInput width={width}>
            <div className="input-box">
                <label htmlFor={id} className="input-box__label">
                    {label}
                    {required && ' *'}
                    <input className="input-box__input" type="text" id={id} placeholder={placeholder} />
                    {error && <p className="input-box__error">This field is required.</p>}
                </label>
            </div>
        </StyledInput>
    );
}

export default Input;
