import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeField, initializeForm } from '../../lib/modules/auth'
import PageHeader from '../../layouts/PageHeader'
import Modal from '../../components/common/Modal';

const HeaderContainer = () => {
    const dispatch = useDispatch();
    const [ LoginModalOpen, setLoginModalOpen ] = useState(false);
    //const [ RegisterModalVisible, setRegisterModalVisible ] = useState(false)

    const showLoginModal = (e) => {
        setLoginModalOpen(true);
    }

    const closeLoiginModal = (e) => {
        setLoginModalOpen(false);
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
        <Modal open={LoginModalOpen} close={closeLoiginModal} />
      </>
    );
};

export default HeaderContainer;