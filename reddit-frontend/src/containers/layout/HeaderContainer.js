import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeField, initializeForm } from '../../store/modules/auth'
import PageHeader from '../../layouts/PageHeader'
import Modal from '../../components/common/Modal';
import AuthTemplate from '../../components/auth/AuthTemplate'
import Login from '../../pages/LoginPage'
import Register from '../../pages/RegisterPage'
import { showModal, doneModal } from '../../store/modules/modal'
import { logout } from '../../store/modules/user'

const HeaderContainer = () => {
    const dispatch = useDispatch();
    //const [ LoginModalOpen, setLoginModalOpen ] = useState(false);
    //const [ RegisterModalOpen, setRegisterModalOpen ] = useState(false);
    
    const { login, register, user } = useSelector(({ modal, user }) => ({
          login : modal.login,
          register : modal.register,
          user : user.user
    }));

    const modalOpen = (type) => {
      if(type === 'login'){
        dispatch(showModal('login'))
      } else {
        dispatch(showModal('register'))
      }  
    }

    const modalClose = (type) => {
      if(type === 'login'){
        dispatch(doneModal('login'))
      } else {
        dispatch(doneModal('register'))
      }  
    }

    const onLogout = () => {
      dispatch(logout())
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    const onKeyupSearch = e => {
        console.log(e);
    }
    useEffect(() => {
      console.log("login : "+login)
      console.log("register : "+register)
    }, [login,register,dispatch])

    useEffect(() => {
        dispatch(initializeForm('login'))
    }, [dispatch])

    return (
      <>
        <PageHeader
          onKeyUp={onKeyupSearch}
          showLoginModal={() => modalOpen('login')}
          showRegisterModal={() => modalOpen('register')}
          user={user}
          onLogout={onLogout}
        />
        <Modal open={login} close={() => modalClose('login')}>
          <Login />
        </Modal>
        <Modal open={register} close={() => modalClose('register')}>
          <Register />
        </Modal>
      </>
    );
};

export default HeaderContainer;