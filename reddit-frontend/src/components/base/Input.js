import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    appearance: none;
    background-color: #f6f7f8;
    border-radius: 4px;
    border: 1px solid #f6f7f8;
    box-shadow: none;
    color: #1c1c1c;
    display: block;
    height: 36px;
    outline: none;
    padding: 0 16px 0 40px;
    width: 100%;
`;

const Input = (props) => {
    return (
        <StyledInput {...props} />
    );
};

export default Input;