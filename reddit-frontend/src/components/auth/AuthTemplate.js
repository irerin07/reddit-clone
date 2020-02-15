import React from 'react';
import styled from 'styled-components';
//import palette from '../../lib/styles/palette';
//import { Link } from 'react-router-dom';

const AuthTemplateBlock = styled.div`
    //position: absolute;
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
    }
    box-shadow : 0 0 8px rgba(0,0,0,0.025);
    padding:2rem;
    width:375px;
    background:white;
    border-radius: 2px;
`

const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                <div className="logo">
                    회원가입
                </div>
                { children }
            </WhiteBox>
        </AuthTemplateBlock>
    );
};


export default AuthTemplate;