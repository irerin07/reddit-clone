import React from 'react'
import styled from 'styled-components';
import Input from '../components/base/Input'
import { Icon, Col } from 'antd'
import Button from '../components/base/Button'

const StyledHeader = styled.header`
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    height: 4rem;
    background:#f7f8fb;
    position:fixed;
    height: 64px;
    top:0;
    left:0;
    right:0;
    margin-top:0;
`;

const StyledLogo = styled.div`
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
    h3 {
      font-size:1.25rem;
    }
`;

const SearchLabel = styled.label`
    position: absolute;
    top: 50%;
    left: 0;
    height: 18px;
    margin-left: 16px;
    margin-top: -9px;
    cursor:pointer;
`;

const HeaderSearchInput = styled(Input)`
    padding: 0.25rem;
    width: 100%;
    background: #fff;
    padding-left:2.5rem;
`;

const ButtonWrapper = styled(Col)`
    text-align:right;
`

const PageHeader = ({ onKeyUp, showLoginModal, showRegisterModal }) => {
    return (
      <StyledHeader>
        <Col span={6}>
          <StyledLogo>
            <h3>Reddit</h3>
          </StyledLogo>
        </Col>
        <Col span={12}>
          <SearchLabel>
            <Icon type="search" />
          </SearchLabel>
          <HeaderSearchInput
            name="headerSearch"
            type="text"
            onKeyUp={onKeyUp}
          />
        </Col>
        <ButtonWrapper span={6}>
          <Button purple margin={1} type="button" onClick={showLoginModal}>
            로그인
          </Button>
          <Button purple margin={1} type="button" onClick={showRegisterModal}>
            회원가입
          </Button>
        </ButtonWrapper>
      </StyledHeader>
    );
}

export default PageHeader;