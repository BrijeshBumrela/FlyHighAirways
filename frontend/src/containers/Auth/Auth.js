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
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Enter Your Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false
            },
        }
    }

    authHandler = (event) => {
        event.preventDefault();
        console.log('submitted eh?');
    };

    checkValidation = (value, rules) => {
        let isValid = false;

        if (rules.required) {
            isValid = value.trim() !== '';
        }

        if (rules.minLength) {
            isValid = isValid && value.length >= rules.minLength 
        }

        return isValid;
    };

    inputChangedHandler = (event, inputIdentifier) => {
        
        const updatedForm = { ...this.state.authForm };
        const updatedFormElement = { ...updatedForm[inputIdentifier] }
        updatedFormElement.value = event.target.value;
        updatedForm[inputIdentifier] = updatedFormElement;

        updatedForm[inputIdentifier].valid = this.checkValidation(event.target.value, updatedForm[inputIdentifier].validation)
        this.setState({ authForm:updatedForm });
    };
    
    render() {

        const { authForm } = this.state;

        return (
            <form className={classes.container} onSubmit={(e) => this.authHandler(e)}>
                <Input 
                    className={classes.InputElement} 
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    type={authForm.email.elementConfig.type} 
                    placeholder={authForm.email.elementConfig.placeholder} 
                    value={authForm.email.value}
                    onChange={(e) => this.inputChangedHandler(e, authForm.email.elementConfig.type)}
                />
                
                <Input
                    className={classes.InputElement} 
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    type="password" 
                    placeholder="Password" 
                    value={authForm.password.value}
                    onChange={(e) => this.inputChangedHandler(e, authForm.password.elementConfig.type)}
                />

                <Button htmlType="submit">Log In</Button>
            </form>
        )
    }

}

export default AuthenticateForm;