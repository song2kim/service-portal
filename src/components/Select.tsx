import tw from 'twin.macro';
import styled from 'styled-components';
import React from 'react';

interface SelectProps {
    id: string;
    label: string;
    placeholder: string;
    required?: boolean;
    width?: string;
    error?: boolean;
}

type InputStyle = Partial<SelectProps>

const StyledSelect = styled.div<InputStyle>`
  width: ${(props) => props.width || '100%'};
  .select {
    width: 100%;
    &__label {
        ${tw`text-lg`};
        display: inline-block;
        width: 100%;
        margin-top: 16px;
    }
    &__box {
        ${tw`bg-gray-100 placeholder:text-gray-300 font-normal`};
        display: block;
        width: 100%;
        padding: 12px 16px;
        margin-top: 8px;
        border-radius: 2px;
        border-width: 2px;
        border-color: transparent;
        appearance: none;
        background-image: url("/assets/icons/ic_arrow_down.svg");
        background-position:  calc(100% - 16px) 50%;
        background-repeat: no-repeat;
        &:active,
        &:focus {
            ${tw`border-violet-400`};
            outline: unset;
        }
    }
    &__error {
      ${tw`text-violet-400 text-lg font-normal`};
      margin-top: 8px;
    }
  }
`;

function Select({
    id, label = 'select', placeholder = 'select', required, width, error,
}: SelectProps) {
    return (
        <StyledSelect width={width}>
            <div className="select">
                <label htmlFor={id} className="select__label">
                    {label}
                    {required && ' *'}
                    <select name="country" id={id} className="select__box">
                        <option value="">select1</option>
                        <option value="">select2</option>
                    </select>
                </label>
            </div>
        </StyledSelect>
    );
}

export default Select;
