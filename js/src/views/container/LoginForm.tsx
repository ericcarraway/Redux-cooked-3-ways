import * as React from 'react';
import Todo from '../../models/TodoModel';

const headerStyle: React.CSSProperties = {
    overflow: 'hidden',
    backgroundColor: '#444',
    padding: 10,
};

const buttonStyle: React.CSSProperties = {
    backgroundColor: '#4caf50',
    borderColor: 'transparent',
    borderRadius: 4,
    color: 'white',
    cursor: 'pointer',
    outline: 0,
    padding: '4px',
};

const inputStyle: React.CSSProperties  = {
    padding: '4px',
    borderRadius: 4,
    border: '2px solid #888',
    outline: 0,
    marginRight: 10,
};

const welcomeStyle: React.CSSProperties = {
    margin: 0,
    color: 'white',
    float: 'left'
};

const logoutButtonStyle = {
    ...buttonStyle,
    float: 'right'
}

import {
    AddTodo
} from '../../actions';
import { LOGIN_SUCCESS } from '../../constants/index';
import IUserModel from '../../models/IUserModel';

export interface ILoginFormProps {
    user: IUserModel,
    login: (email: string, password: string) => void;
}

const LoginForm: React.SFC<ILoginFormProps> = ({ login, user }) => {
    // Input tracker
    let email: HTMLInputElement;
    let password: HTMLInputElement;

    if (user.loginStatus === LOGIN_SUCCESS) {
        return (
            <div style={headerStyle}>
                <h3 style={welcomeStyle}>Welcome {user.name}!</h3>
                <a style={logoutButtonStyle}>Logout</a>
            </div>
        );
    } else {
        return (
            <div style={headerStyle}>
                <input
                    style={inputStyle}
                    placeholder="Email"
                    ref={(node) => { email = node; }}
                />
                <input
                    style={inputStyle}
                    placeholder="Password"
                    ref={(node) => { password = node; }}
                />
                <button
                    style={buttonStyle}
                    onClick={() => {
                        login(email.value, password.value);
                    }}
                >
                    Submit
                </button>
            </div>
        );
    }
};

export default LoginForm;
