import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeField, initializeForm } from '../../lib/modules/auth'
import PageHeader from '../../layouts/PageHeader'
import Modal from '../../components/common/Modal';
import AuthTemplate from '../../components/auth/AuthTemplate'
import Login from '../../pages/LoginPage'
import Register from '../../pages/RegisterPage'

const HeaderContainer = () => {
    const dispatch = useDispatch();
    const [ LoginModalOpen, setLoginModalOpen ] = useState(false);
    const [ RegisterModalOpen, setRegisterModalOpen ] = useState(false);

    const loginModalOpen = () => {
        setLoginModalOpen(true)
    }

    const loginModalClose = () => {
        setLoginModalOpen(false)
    }

    const registerModalOpen = () => {
        setRegisterModalOpen(true)
    }

    const registerModalClose = () => {
        setRegisterModalOpen(false);
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    const onKeyupSearch = e => {
        console.log(e);
    }

    useEffect(() => {
        //dispatch(initializeForm('login'))
    }, [dispatch])

    return (
      <>
        <PageHeader
          onKeyUp={onKeyupSearch}
          showLoginModal={loginModalOpen}
          showRegisterModal={registerModalOpen}
        />
        <Modal open={LoginModalOpen} close={loginModalClose}>
          <Login />
        </Modal>
        <Modal open={RegisterModalOpen} close={registerModalClose}>
          <Register />
        </Modal>
      </>
    );
};

export default HeaderContainer;