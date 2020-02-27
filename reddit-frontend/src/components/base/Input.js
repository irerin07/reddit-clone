import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette'

const StyledInput = styled.input`
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    font-size: 1rem;
    flex: 1 1 0%;
    padding: 1rem;
    border-width: 1px 1px 1px 1px;
    border-style: solid;
    border-color: rgb(222, 226, 230);
    border-image: initial;
    border-radius: 4px;
    width: 100%;
    &:focus {
        color: $oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};
    }
    & + & {
        margin-top: 1rem;
    }
`;

const Input = (props) => {
    return (
        <StyledInput {...props} />
    );
};

export default Input;