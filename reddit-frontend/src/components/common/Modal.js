import React, { useState } from 'react';
import styled, { css } from 'styled-components';

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
  width: 320px;
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

  .button-wrap {
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
  }
`;

const [ modalStatus, setModalStatus ] = useState(false)

const Modal = () => {
    return (
      <StyledModalWrapper>
        <StyledModalHeader>
            <p className="title">Modal Title</p>
            <div className="content">
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                tempora nulla, non molestiae dicta ducimus. Et unde laborum
                eveniet ex quod doloribus quae, aliquam beatae atque, vero
                assumenda rem quo?
                </p>
            </div>
            <div className="button-wrap">
                <button> Confirm </button>
            </div>
        </StyledModalHeader>
      </StyledModalWrapper>
    );
}

export default Modal;