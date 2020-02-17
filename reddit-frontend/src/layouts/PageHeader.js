import React from 'react'
import styled from 'styled-components';
import Input from '../components/base/Input'
import palette from '../lib/styles/palette'
import { Row, Icon, Col } from 'antd'
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
    margin: 0px auto;
    height: 4rem;
    background:white;
    position:fixed;
    height: 64px;
    background: #001529;
    //box-shadow : 5px 5px 5px rgba(0, 0, 0, 0.1);
`;

const StyledLogo = styled.div`
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
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

const HeaderSearchBar = styled(Input)`
    padding: 0.5rem;
    width: 100%;
    background: ${palette.gray[2]};
    padding-left:2.5rem;
`;

const ButtonWrapper = styled(Col)`
    text-align:right;
`

const PageHeader = (props) => {
    return (
      <StyledHeader {...props}>
        <Col span={6}>
          <StyledLogo />
        </Col>
        <Col span={12}>
          <SearchLabel>
            <Icon type="search" />
          </SearchLabel>
          <HeaderSearchBar />
        </Col>
        <ButtonWrapper span={6}>
          <Button>로그인</Button>
          <Button>회원가입</Button>
        </ButtonWrapper>
      </StyledHeader>
    );
}

export default PageHeader;