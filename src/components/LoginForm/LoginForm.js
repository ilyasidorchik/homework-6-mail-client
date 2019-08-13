// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';
import styles from './LoginForm.module.css';

const formFields = [
    {
        label: 'Почта',
        name: 'email',
        type: 'text'
    },
    {
        label: 'Пароль',
        name: 'password',
        type: 'password'
    }
];

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onClick = () => {
        const { authorize } = this.props;
        const { email, password } = this.state;

        authorize(email, password);
    };

    renderForm = (field) => {
        const { [field.name]: value } = this.state;

        return (
            <p key={field.name}>
                <label htmlFor={field.name}>
                    <span className={styles.labelText}>{field.label}</span>
                </label>
                <input
                    type={field.type}
                    name={field.name}
                    value={value}
                    className={styles.input + ` t-input-${field.name}`}
                    id={field.name}
                    onChange={this.onChange}
                />
            </p>
        );
    };

    render() {
        const { isAuthorized, authError } = this.props;

        return (
            isAuthorized
            ? <Redirect to="/app" />
            : <div className={styles.bg}>
                <div className={styles.form + ' t-form'}>
                    {formFields.map(this.renderForm)}

                    {authError && <p className={styles.error}>{authError}</p>}

                    <div className={styles.bg}>
                        <button
                            className={styles.button + ' t-login'}
                            onClick={this.onClick}
                        >
                            Войти
                        </button>
                    </div>
                </div>
              </div>
        );
    }
}

export default withAuth(LoginForm);