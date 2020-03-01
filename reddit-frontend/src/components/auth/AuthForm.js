import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette'
import { Link } from 'react-router-dom';
import Button from '../base/Button'

// navLink style
const StyledLink = styled(Link)`
    text-decoration:none !important;
`

// 회원가입 및 로그인 폼
const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: ${palette.gray[8]};
        margin-bottom: 1rem;
    }
`;

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
    width : 100%;
    &:focus {
        color: $oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};
    }
    & + & {
        margin-top: 1rem;
    }
`
const Footer = styled.div`
    margin-top: 2rem;
    text-align:right;
    a {
        color: ${palette.gray[6]};
        text-decoration:underline;
        &:hover {
            color: ${palette.gray[9]};
        }
    }
`;

const ButtonWithMarginTop = styled(Button)`
    margin-top: 1rem;
`;

const textMap = {
    login: '로그인',
    register : '회원가입',
}

const ErrorMessage = styled.div`
    color: red;
    text-align:center;
    font-size:0.875rem;
    margin-top: 1rem;
`

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <StyledInput 
                    autoComplete="username" 
                    name="username" 
                    placeholder="아이디" 
                    onChange={onChange}
                    value={form.username}
                />
                <StyledInput 
                    autoComplete="new-password"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                    onChange={onChange}
                    value={form.password}
                />
                {type === 'register' && (
                    <StyledInput 
                        authComplete="new-password"
                        name="passwordConfirm"
                        placeholder="비밀번호 확인"
                        type="password"
                        onChange={onChange}
                        value={form.passwordConfirm}
                    />
                )}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <ButtonWithMarginTop cyan fullWidth>
                    로그인
                </ButtonWithMarginTop>
            </form>
            <Footer>
                {type === 'login' ? (
                    <StyledLink to="/register">회원가입</StyledLink>
                ) : (
                    <StyledLink to="/login">로그인</StyledLink>
                )}
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;