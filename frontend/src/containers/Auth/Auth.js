import React, { Component } from 'react';
import { Icon, Input, Button, Row, Col } from 'antd';
import { connect } from 'react-redux';  
import axios from 'axios';

import classes from './Auth.module.css';

import * as actions from '../../store/actions/index';

// AeCP7XjbY68kPoHkF4cqS2LWBZ83t1wSFRy6jbEdbGFG4c_m3qI6j_qozn84D8xpTN3ML6opD6XanSgO

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
                    required: true,
                    shouldContain: '@'
                },
                valid: false,
                touched: false
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
                valid: false,
                touched: false
            },
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Your First Name'
                },
                value: '',
                validation: {
                    required: false,
                    minLength: 8,
                    nameOnly: true
                },
                valid: false,
                touched: false
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Your Last Name'
                },
                value: '',
                validation: {
                    required: false,
                    minLength: 8,
                },
                valid: false,
                touched: false
            }
            
        },
        isSignUp: true
    }

    authHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.authForm.email.value, this.state.authForm.password.value, this.state.isSignUp);
    };

    componentDidMount() {
        const flight = {
            source: 'Tiruvanantapuram',
            destination: 'Guwahati',
            start_time: '00:00',
            end_time: '2:45',
            logo: 'some 2',
            business: {
                fare: 10550,
                seats_remaining: 0
            },
            economy: {
                fare: 6056,
                seats_remaining: 6
            },
            nonStop: false
        }

        // axios.post('https://flyhighairways-2cfb4.firebaseio.com/flight.json', flight)
        //     .then(res => console.log(res))
        //     .catch(err => console.log('there was an ', err));
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => { 
            return {
                isSignUp: !prevState.isSignUp
            };    
        });
    }

    checkValidation = (value, rules) => {
        let isValid = false;

        if (rules.required) {
            isValid = value.trim() !== '';
        }

        if (rules.minLength) {
            isValid = isValid && value.length >= rules.minLength;
        }

        if (rules.shouldContain) {
            isValid = isValid && value.includes(rules.shouldContain);
        }

        return isValid;
    };

    // Function to use ternary operator and find which one of the two (cross/tick) to use
    validSignHandler = () => {

    }


    inputChangedHandler = (event, inputIdentifier) => {
        
        const updatedForm = { ...this.state.authForm };
        const updatedFormElement = { ...updatedForm[inputIdentifier] }
        updatedFormElement.value = event.target.value;
        updatedForm[inputIdentifier] = updatedFormElement;
        updatedForm[inputIdentifier].valid = this.checkValidation(event.target.value, updatedForm[inputIdentifier].validation)
        updatedForm[inputIdentifier].touched = true;

        this.setState({ authForm : updatedForm });
    };
    
    render() {

        const { authForm } = this.state;

        const inValidIcon = (
            <Icon type="close-circle" 
                theme="twoTone" 
                twoToneColor="#eb2f96"
                className={classes.validateIcon}
            />
        )

        const blankIcon = (
            <Icon type="close-circle" 
                theme="twoTone" 
                twoToneColor="#fff"
                className={classes.validateIcon}
            />
        )

        const validIcon = (
            <Icon type="check-circle" 
                className={classes.validateIcon}
                theme="twoTone"
                twoToneColor="#52c41a"
            />
        )

        // LOGIN FORM
        let form = (
            <div className={classes.container}>

                <h4 className={classes.FormText}>Login TO Proceed</h4>

                <form onSubmit={(e) => this.authHandler(e)}>
                    <div className={classes.formDiv}>
                        <Input 
                            className={classes.InputElement} 
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                            type={authForm.email.elementConfig.type} 
                            placeholder={authForm.email.elementConfig.placeholder} 
                            value={authForm.email.value}
                            onChange={(e) => this.inputChangedHandler(e, authForm.email.elementConfig.type)}
                        />
                        {
                            !authForm.email.touched ? validIcon : authForm.email.valid ? validIcon : inValidIcon
                        }
                    </div>

                    <div className={classes.formDiv}>
                        <Input
                            className={classes.InputElement} 
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                            type="password" 
                            placeholder="Password" 
                            value={authForm.password.value}
                            onChange={(e) => this.inputChangedHandler(e, authForm.password.elementConfig.type)}
                        />
                        {
                            !this.state.authForm.email.valid && this.state.authForm.email.touched ? 
                            inValidIcon : validIcon
                        }
                    </div>
                    <div style={{width: '90%'}}>
                        <Button htmlType="submit" size="default" style={{backgroundColor: '#6A5ACD', border:'none'}} block shape="round">
                            { this.state.isSignUp ? 'SIGN UP' : 'LOG IN' }
                        </Button>
                    </div>
                </form>

                <Button size="small" className={classes.switchBtn} onClick={this.switchAuthModeHandler}>
                    { this.state.isSignUp ? 'Click Here To LogIn' : 'Click Here To Sign Up' }
                </Button>
            </div>
        )

        if (this.state.isSignUp) {
            // Sign Up Form
            form = (

                <div className={classes.container}>

                    <h4 className={classes.FormText}>Login TO Proceed</h4>

                    <form onSubmit={(e) => this.authHandler(e)}>
                        <div className={classes.formDiv}>
                            <Input 
                                className={classes.InputElement} 
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                type={authForm.email.elementConfig.type} 
                                placeholder={authForm.email.elementConfig.placeholder} 
                                value={authForm.email.value}
                                onChange={(e) => this.inputChangedHandler(e, authForm.email.elementConfig.type)}
                            />
                            {
                                !authForm.email.valid && authForm.email.touched ? 
                                inValidIcon : validIcon
                            }
                        </div>

                        <div className={classes.formDiv}>
                            <Input 
                                className={classes.InputElement} 
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                type={authForm.firstName.elementConfig.type} 
                                placeholder={authForm.firstName.elementConfig.placeholder} 
                                value={authForm.firstName.value}
                                onChange={(e) => this.inputChangedHandler(e, 'firstName')}
                            />
                            {
                                !authForm.firstName.valid && authForm.firstName.touched ? 
                                inValidIcon : validIcon
                            }
                        </div>

                        <div className={classes.formDiv}>
                            <Input 
                                className={classes.InputElement} 
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                type={authForm.lastName.elementConfig.type} 
                                placeholder={authForm.lastName.elementConfig.placeholder} 
                                value={authForm.lastName.value}
                                onChange={(e) => this.inputChangedHandler(e, 'lastName')}
                            />
                            {
                                !authForm.lastName.valid && authForm.lastName.touched ? 
                                inValidIcon : validIcon
                            }
                        </div>


                        <div className={classes.formDiv}>

                            <Input
                                className={classes.InputElement} 
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                type="password" 
                                placeholder="Password" 
                                value={authForm.password.value}
                                onChange={(e) => this.inputChangedHandler(e, authForm.password.elementConfig.type)}
                            />
                            {
                                !authForm.password.valid && authForm.password.touched ? 
                                inValidIcon : validIcon
                            }
                        </div>

                        <div style={{width: '90%'}}>
                            <Button htmlType="submit" size="default" style={{backgroundColor: '#6A5ACD', border:'none'}} block shape="round">
                                { this.state.isSignUp ? 'SIGN UP' : 'LOG IN' }
                            </Button>
                        </div>
                    </form>

                    <Button size="small" className={classes.switchBtn} onClick={this.switchAuthModeHandler}>
                        { this.state.isSignUp ? 'Click Here To LogIn' : 'Click Here To Sign Up' }
                    </Button>
                </div>
            )
        }

        return (
            <div className={classes.BigDiv}>
                <div className={classes.LoginCard}>
                    <Row style={{height: '100%'}}>

                        <Col lg={12} className={classes.makeHeightFull}>
                            <div className={[classes.makeHeightFull, classes.planeImg].join(' ')}>

                            </div>
                        </Col>
                        
                        <Col lg={12} className={classes.makeHeightFull}>
                            {form}
                        </Col>

                    </Row>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, method) => dispatch(actions.auth(email, password, method))
    }
}

export default connect(null, mapDispatchToProps)(AuthenticateForm);