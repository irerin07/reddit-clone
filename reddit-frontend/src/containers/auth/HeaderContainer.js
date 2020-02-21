import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeField, initializeForm } from '../../lib/modules/auth'
import PageHeader from '../../layouts/PageHeader'
import { Modal } from 'antd'

const HeaderContainer = () => {
    const dispatch = useDispatch();
    const [ LoginModalVisible, setLoginModalVisible ] = useState(false)
    const [ RegisterModalVisible, setRegisterModalVisible ] = useState(false)

    const setModalLogin = (flag) => {
        setLoginModalVisible(flag)
    }

    const setModalRegister = (flag) => {
        setRegisterModalVisible(flag)
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    useEffect(() => {
        //dispatch(initializeForm('login'))
    }, [dispatch])

    return (
        <PageHeader
            setLoginModal={setModalLogin(true)}
            setRegisterModal={setModalRegister(true)}
        />
    );
};

export default HeaderContainer;