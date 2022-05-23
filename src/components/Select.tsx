import tw from 'twin.macro';
import styled from 'styled-components';
import React from 'react';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

interface SelectProps {
    id: string;
    label: string;
    placeholder: string;
    required?: boolean;
    width?: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    options: string[];
}

type SelectStyle = Partial<SelectProps>

const StyledSelect = styled.div<SelectStyle>`
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
    id,
    label,
    placeholder,
    required,
    width,
    register,
    errors,
    options,
}: SelectProps) {
    return (
        <StyledSelect width={width}>
            <div className="select">
                <label htmlFor={id} className="select__label">
                    {label}
                    {required && ' *'}
                    <select
                        name={id}
                        id={id}
                        className="select__box"
                        defaultValue=""
                        placeholder={placeholder}
                        {...register(`${id}`, { required })}
                    >
                        <option disabled value="">Select Country</option>
                        {
                            options.map((value: string) => (
                                <option key={value} value={value}>{value}</option>
                            ))
                        }
                    </select>
                    {errors[id]?.type === 'required'
                        && <p className="select__error">This field is required.</p>}
                </label>
            </div>
        </StyledSelect>
    );
}

Select.defaultProps = {
    required: false,
    width: '100%',
};

export default Select;
