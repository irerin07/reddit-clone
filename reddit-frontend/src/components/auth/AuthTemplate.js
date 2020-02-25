import React from 'react';
import styled from 'styled-components';
//import palette from '../../lib/styles/palette';
//import { Link } from 'react-router-dom';

const AuthTemplateBlock = styled.div`
    left : 0;
    top : 0;
    bottom: 0;
    right: 0;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding:1.5rem;
`;

const WhiteBox = styled.div`
    .logo {
        display:block;
        padding-bottom:2rem;
        text-align:center;
        font-weight: 700;
        letter-spacing: 2px;
        font-size: 16px;
    }
    width:100%;
    background:white;
    border-radius: 2px;
`

const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                <div className="logo">
                    환영합니다
                </div>
                { children }
            </WhiteBox>
        </AuthTemplateBlock>
    );
};


export default AuthTemplate;