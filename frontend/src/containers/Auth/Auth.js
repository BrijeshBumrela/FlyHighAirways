import React, { Component } from 'react';
import { Icon, Input, Button } from 'antd';
  
import classes from './Auth.module.css';

class AuthenticateForm extends Component {
    
    state = {
        authForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter Your Email'
                },
                value: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Enter Your Password'
                },
                value: ''
            },
        }
    }

    onFormDataChanged = () => {
        return 5;
    }
    
    render() {

        const { authForm } = this.state;

        return (
            <form className={classes.container}>
                <Input 
                    className={classes.InputElement} 
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    type={authForm.email.elementConfig.type} 
                    placeholder={authForm.email.elementConfig.placeholder} 
                    value={authForm.email.value}
                    onChange={() => this.onFormDataChanged()}
                />
                
                <Input
                    className={classes.InputElement} 
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    type="password" 
                    placeholder="Password" 
                    value={authForm.password.value}
                    onChange={() => this.onFormDataChanged()}
                />
                <Button>Log In</Button>
            </form>
        )
    }

}

export default AuthenticateForm;