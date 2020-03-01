import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeField, initializeForm, login } from '../../store/modules/auth'
import AuthForm from '../../components/auth/AuthForm'
import { check } from '../../store/modules/user';
import { withRouter } from 'react-router-dom'
import { doneModal } from '../../store/modules/modal'

const LoginForm = ({ history }) => {
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user, modal }) => ({
        form : auth.login,
        auth: auth.auth,
        authError : auth.authError,
        user : user.user,
        modal : modal.login, 
    }));
    //console.log(form);
    const [error, setError] = useState(null);
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        )
    }

    const onSubmit = e => {
        e.preventDefault();
        const { username, password } = form;
        dispatch(login({ username, password }));
    }

    useEffect(() => {
        dispatch(initializeForm('login'))
    }, [dispatch])

    // auth, authError, dispatch가 발생할때 마다 다시 렌더링처리
    useEffect(() => {
        if (authError) {
            console.log('오류 발생')
            console.log(authError)
            setError('로그인 실패')
            return;
        }
        if (auth) {
            console.log('로그인 성공')
            dispatch(check())
            dispatch(doneModal('login'))
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if(user) {
            history.push('/');
            try {
                localStorage.setItem('user', JSON.stringify(user));
            } catch(e) {
                console.log('localStore is empty');
            }
        }
    }, [history, user]);

    return (
        <AuthForm 
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    );
};

export default withRouter(LoginForm);