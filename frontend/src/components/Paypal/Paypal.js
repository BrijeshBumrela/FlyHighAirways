import React, { Component } from 'react'

import PayPalExpressBtn from 'react-paypal-express-checkout';

export default class Paypal extends Component {
    render() {

        const onSuccess = (payment) => {
            console.log(JSON.stringify(payment));
        }

        const onCancel = (data) => {
            console.log(JSON.stringify(data));
        }

        const onError = (err) => {
            console.log(JSON.stringify(err));
        }

        let env = 'sandbox';
        let currency = 'USD';
        let total = 1.3;

        const client = {
            sandbox: 'AeCP7XjbY68kPoHkF4cqS2LWBZ83t1wSFRy6jbEdbGFG4c_m3qI6j_qozn84D8xpTN3ML6opD6XanSgO',
            production: ''
        }


        return (
            <div>
                <PayPalExpressBtn 
                    env={env}
                    client={client}
                    currency={currency}
                    total={total}
                    onError={onError}
                    onSuccess={onSuccess}
                    onCancel={onCancel}
                    style={{
                        size: 'large',
                        shape: 'rect',
                        label: 'checkout'
                    }}
                />
            </div>
        )
    }
}
