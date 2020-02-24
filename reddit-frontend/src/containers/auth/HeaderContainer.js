import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeField, initializeForm } from '../../lib/modules/auth'
import PageHeader from '../../layouts/PageHeader'

const HeaderContainer = () => {
    const dispatch = useDispatch();
    const [ LoginModalVisible, setLoginModalVisible ] = useState(false)
    const [ RegisterModalVisible, setRegisterModalVisible ] = useState(false)

    const showLoginModal = (e) => {
        //console.log(this.LoginModalVisible)
        setLoginModalVisible(true);
        console.log(LoginModalVisible);
    }
    
    const showRegisterModal = (e) => {
        //console.log(RegisterModalVisible)
        setRegisterModalVisible(true)
        console.log(RegisterModalVisible);
        //console.log(e);
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
        <PageHeader onKeyUp={onKeyupSearch} showLoginModal={showLoginModal} />
      </>
    );
};

export default HeaderContainer;