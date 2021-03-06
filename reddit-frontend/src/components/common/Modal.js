import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from '../base/Button'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.16);
`;

const StyledModalHeader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  & > * {
    &:first-child {
      margin-top: 16px;
    }
    margin-left: 16px;
    margin-right: 16px;
  }
  p.title {
    font-size: 16pt;
    font-weight: bold;
    color: #333;
  }
  .content {
    border-top: 1px solid #bebebe;
    margin-top: 16px;
    p {
      padding: 8px;
      font-size: 12pt;
      color: #999;
    }
  }

  /*.button-wrap {
    margin: 0;
    margin-top: 8px;
    button {
      width: 100%;
      padding: 12px 0;
      border-radius: 0 0 10px 10px;
      background-color: #ad7cef;
      font-size: 13pt;
      color: white;
      border: 0;
      cursor: pointer;
      &:hover {
        background-color: #7f49c8;
      }
      &:active {
        background-color: #7e49c8;
      }
    }
  }*/
`;

const StyledCloseBtn = styled.span`
    position:absolute;
    font-size:1.2rem;
    right:0px;
    cursor:pointer;
`;

const Modal = ({ open, close, children }) => {
    return (
      <>  
      {open === true ? (
      <StyledModalWrapper>
        <StyledModalHeader>
          <StyledCloseBtn>
              <AiOutlineCloseCircle onClick={close}/>
          </StyledCloseBtn>
          { children }
        </StyledModalHeader>
      </StyledModalWrapper>
      ) : (
        null  
      )}
    </>
    );
}

export default Modal;