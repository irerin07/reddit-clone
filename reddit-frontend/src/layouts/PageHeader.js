import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.header`
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px auto;
    height: 4rem;
    box-shadow : 5px 5px 5px rgba(0, 0, 0, 0.1);
`;

const PageHeader = (props) => {
    return <StyledHeader {...props} />
}

export default PageHeader;