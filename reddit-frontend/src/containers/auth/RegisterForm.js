import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeField, initializeForm, register } from '../../store/modules/auth';
import AuthForm from '../../components/auth/AuthForm'
import { check } from '../../store/modules/user'
import { withRouter } from 'react-router-dom';
import { doneModal } from '../../store/modules/modal'

const RegisterForm = ({ history }) => {
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user, modal }) => ({
        form: auth.register,
        auth : auth.auth,
        authError: auth.authError,
        user: user.user,
        register: modal.register
    }));

    const [error, setError] = useState(null);
    // 인풋 변경 이벤트 핸들러
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        )
    }

    const onSubmit = e => {
        e.preventDefault();
        const { username, password, passwordConfirm } = form;
        if([username, password, passwordConfirm].includes('')) {
            setError('빈 칸을 모두 입력하세요')
            return;
        }
        
        if (password !== passwordConfirm) {
            setError('비밀번호가 일치하지 않습니다')
            changeField({ form: 'register', key: 'password', value: '' });
            changeField({ form: 'register', key: 'passwordConfirm', value: '' });
            return;
        }
        dispatch(register({ username, password }));
    }
    // 회원가입 액션이 호출됐을 경우 초기화
    useEffect(() => {
        dispatch(initializeForm('register'))
    }, [dispatch])

    useEffect(() => {
        if (authError) {
            if(authError.response.status === 409){
                setError('이미 존재하는 계정입니다.');
            }
            setError('회원가입 실패');
            return;
        }
        if(auth) {
            console.log("회원가입 성공");
            console.log(auth);
            dispatch(check());
            dispatch(doneModal('register'))
        }
    }, [auth, authError, dispatch]);

    // user 값 설정확인
    useEffect(() => {
        if(user) {
            console.log('check API 성공');
            console.log(user);
            history.push('/');
        }
        try {
            localStorage.setItem('user', JSON.stringify(user));
        } catch(e) {
            console.log('localStorage is empty')
        }
    }, [history, user]);

    useEffect(() => {
        if (user) {
            history.push('/');
        }
    }, [history, user])

    return (
        <AuthForm
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    );
};

export default withRouter(RegisterForm);